/****************************************************************************
*	@Copyright(c)	2018,保定无双软件
*	@desc	优衣库项目，方盒飞
*	@date	2018-2-27
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/main.js
*	@modify	null
******************************************************************************/

import "three/examples/js/controls/DeviceOrientationControls";

import Cube from "./cube";
import Cartoon from "./cartoon";
import * as Preload from "./preload";


/**
 *	版本
 */
const VER = "1.0.0";
/**
 *	事件
 */
const Event = {
	CUBE_CLICK:	"cubeClick",
	GAME_INIT: "gameInit",
	GAME_START:	"gameStart",
	GAME_OVER:	"gameOver"
}
/**
 *	主体
 */
var main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	const BOX_Y = -10,
		BOX_Z = -50;
		
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__box = null,	//盒子
		__cubes = null,	//所有的六面体
		__environment = null;	//环境
	var _boxIsMove = true;	//方盒运动
	var _controls = null;	//控制器
	var __stats = null;	//fps
	var _raycaster = new THREE.Raycaster(),	//射线
		_objects = [],	//检测元素
		_enable = true;	//允许操作
	/**
	 *	初始化
	 */
	_this.init = function(container){
		//WIDTH = container.clientWidth;
		//HEIGHT = container.clientHeight;
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		__camera = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 1, 1500 );
		__scene = new THREE.Scene();	//场景
		
		__renderer = new THREE.WebGLRenderer({canvas: container, antialias: true, alpha:true});	//渲染器
		__renderer.autoClear = false;
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		
		//__stats = new Stats();
		//document.body.appendChild(__stats.dom);
		__cubes = new THREE.Object3D();
		__scene.add(__cubes);
		_this.control();
		animate();
	};
	_this.resize = function(width, height){
		if(!width) width = window.innerWidth;
		if(!height) height = window.innerHeight;
		WIDTH = width;
		HEIGHT = height;
		__camera.aspect = WIDTH/HEIGHT;
		__camera.updateProjectionMatrix();
		__renderer.setSize( WIDTH, HEIGHT );
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		createBox();
		let arr = require('./cubes.json');
		arr = arr.concat(arr);
		let len = arr.length;
		let unit = 360/len;
		let radii = 50;
		arr.forEach((o, k)=>{
			let mesh = new Cube(checkParams(o));
			mesh.addEventListener(Cube.Event.FLY, (e)=>{e.target.play()});
			let x = radii * Math.cos(THREE.Math.degToRad(k * unit));
			let z = radii * Math.sin(THREE.Math.degToRad(k * unit));
			let y = Math.random() * 20 -10;
			let scale = Math.random() * 0.3 + 0.7;
			mesh.scale.set(scale,scale,scale);
			mesh.aim(x, y, z);
			_objects.push(mesh);
			__cubes.add(mesh);
		})
	};
	/**
	 * 检测参数
	 * @param {*} obj 
	 */
	function checkParams(obj){
		var param = {};
		for(let k in obj){
			if( typeof(obj[k]) == "object") {
				var o = {};
				for(let i in obj[k]){
					o[i] = obj[k][i];
				}
				param[k] = o;
			}else{
				param[k] = obj[k];
			}
			if(param[k].hasOwnProperty("map")){
				var map = new THREE.Texture(Preload.getResult(param[k].map));
				map.needsUpdate = true;
				param[k].map = map;
			}
			if(param[k].hasOwnProperty("opacity")){
				param[k].transparent = true;
			}
		}
		return param;
	}
	/**
	 * 创建方盒
	 */
	function createBox(){
		let obj = {
			front:{map:"Uniqlo"},
			back:{map:"Uniqlo"},
			left:{color:"white",opacity:0.9},
			right:{color:"white",opacity:0.9},
			top:null,
			bottom:{color:"white",opacity:0.7}
		}
		__box = new Cube(checkParams(obj));
		__box.scale.set(1.5,1.5,1.5);
		__box.addEventListener(Cube.Event.FADE_IN, onFadeIn);
		__box.fadeIn();
		__scene.add(__box);
	}
	function moveBox(){
		if(!_boxIsMove) return;
		let v = new THREE.Vector3(0,BOX_Y, BOX_Z);
		__camera.localToWorld(v);
		if(__box)__box.position.copy(v);
	}
	function onFadeIn(e){
		_boxIsMove = false;
		var delay = 0;
		for(let k in __cubes.children){
			let cube = __cubes.children[k];
			cube.position.copy(__box.position);
			delay += Math.random() * 200;
			cube.fly(delay);
		}
		setTimeout(()=>{__box.fadeOut();}, delay + 1000);
	}
	/**
	 * 纸片人出现
	 */
	_this.paper = function(){
		__cubes.children.forEach((o)=>{
			o.fadeOut();
		});
		let arr = ["person1","person2","person3","person4","person5"];
		let len = arr.length;
		let unit = 360/len;
		let radii = 60;
		arr.forEach((v, k)=>{
			let s = addPaper(v);
			let x = radii * Math.cos(THREE.Math.degToRad(k * unit));
			let z = radii * Math.sin(THREE.Math.degToRad(k * unit));
			let y = 0;
			s.position.set(x, y, z);
			__cubes.add(s);
		});
	};
	function addPaper(id){
		let img = Preload.getResult(id);
		let t = new THREE.Texture(img);
		t.needsUpdate = true;
		let m = new THREE.SpriteMaterial( { map: t, transparent: true } );
		let sprite = new THREE.Sprite( m );
		sprite.scale.x = img.width/10;
		sprite.scale.y = img.height/10;
		return sprite;
	}
	/**
	 *	点击
	 */
	function onClick( e ) {
		e.preventDefault();
		hitTest( e.clientX, e.clientY );
	}
	function onTouchStart (e) {
		e.preventDefault();
		hitTest( e.touches[0].clientX, e.touches[0].clientY );
	}
	/**
	 *	点击检测
	 */
	function hitTest( x, y ) {
		var mouse = {};
		mouse.x = ( x / WIDTH) * 2 - 1;
		mouse.y = - ( y / HEIGHT ) * 2 + 1;

		_raycaster.setFromCamera( mouse, __camera );
		var intersects = _raycaster.intersectObjects( _objects );
		if ( intersects.length > 0 ) {
			var obj = intersects[ 0 ];
			_this.dispatchEvent({ type: Event.CUBE_CLICK, data:obj});
		}
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		_controls = new THREE.DeviceOrientationControls(__camera);
		_controls.noZoom = true;
		_controls.noPan = true;
		document.addEventListener( 'click', onClick, false );
		document.addEventListener( 'touchstart', onTouchStart, false );
	};
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		moveBox();
		if(__stats)__stats.update();
		if(_controls)_controls.update();
		__renderer.render( __scene, __camera );
		
	}
	_this.init(container);
};

Object.assign( main.prototype, THREE.EventDispatcher.prototype);
main.prototype.constructor = main;

export {VER,Event,Preload,Cartoon,main};