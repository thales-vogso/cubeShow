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
import Texture from "./texture";
import * as Preload from "./preload";


/**
 *	版本
 */
const VER = "1.7.2";
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
		BOX_Z = -30;
	const CUBE_RADII = 50,
		CUBE_RADII_SCOPE = 10,
		CUBE_RADII_PACK = 15;
	const PAPER_RADII = 60,
		PAPER_SCALE = 50;
		
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__box = null,	//盒子
		__peper = null,	//纸片人
		__cubes = null;	//所有的六面体
	var  _papers = ["paper-sprite01","paper-sprite02","paper-sprite03","paper-sprite04","paper-sprite05"];
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
		__peper = new THREE.Object3D();
		__scene.add(__cubes, __peper);
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
		let tmp = [null,null,null];
		arr = arr.concat(tmp,arr,tmp, arr,tmp);
		let len = arr.length;
		let unit = 360/len;
		let radii = CUBE_RADII;
		arr.forEach((o, k)=>{
			if(o) {
				let mesh = new Cube(o);
				mesh.addEventListener(Cube.Event.FLY, (e)=>{e.target.play()});
				let r = (k%3) * CUBE_RADII_SCOPE + radii;
				let x = r * Math.cos(THREE.Math.degToRad(k * unit));
				let z = r * Math.sin(THREE.Math.degToRad(k * unit));
				let y = (k%2==0)?CUBE_RADII_PACK:-CUBE_RADII_PACK;
				mesh.aim(x, y, z);
				_objects.push(mesh);
				__cubes.add(mesh);
			}
		})
	};
	_this.replay = function(){
		_papers.forEach(name=>{
			__peper.remove(__peper.getObjectByName(name));
		})
		__cubes.children.forEach((o)=>{
			o.fadeIn();
		})
		/*
		__scene.remove(__cubes);
		__cubes = new THREE.Object3D();
		__scene.add(__cubes);
		_this.launch();
		*/
	};
	/**
	 * 创建方盒
	 */
	function createBox(){
		_boxIsMove = true;
		let obj = {
			name:"Uniqlo",
			front:{map:null},
			back:{map:null},
			left:{map:null},
			right:{map:null},
			top:null,
			bottom:{color:"white",opacity:0.8}
		}
		__box = new Cube(obj);
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
			let v = new THREE.Vector3(0,0,0);
			v.copy(__box.position);
			v.x += Math.random() * 4 -2;
			v.y += Math.random() * 4 -2;
			v.z += Math.random() * 4 -2;
			cube.position.copy(v);
			delay = Math.random() * 500 + 300;
			cube.fly(delay);
		}
		setTimeout(()=>{__box.fadeOut();}, delay + 1000);
	}
	/**
	 * 纸片人出现
	 */
	_this.paper = function(){
		let len = _papers.length;
		let unit = 360/len;
		let radii = PAPER_RADII;
		_papers.forEach((v, k)=>{
			let s = addPaper(v);
			s.name = v;
			let x = radii * Math.cos(THREE.Math.degToRad(k * unit));
			let z = radii * Math.sin(THREE.Math.degToRad(k * unit));
			let y = 0;
			s.position.set(x, y, z);
			__peper.add(s);
		});
	};
	function addPaper(id){
		let t = new Texture(CubeShow.Preload.getResult(id));
		t.setExpire(0.5);
		let m = new THREE.SpriteMaterial( { map: t, transparent: true } );
		let sprite = new THREE.Sprite( m );
		sprite.scale.x = PAPER_SCALE;
		sprite.scale.y = PAPER_SCALE;
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
			__cubes.children.forEach((o)=>{
				o.fadeOut();
			});
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
		__renderer.domElement.addEventListener( 'click', onClick, false );
		__renderer.domElement.addEventListener( 'touchstart', onTouchStart, false );
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