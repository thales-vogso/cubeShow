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

import Cube from "./cube.js";
import * as Preload from "./preload.js";


/**
 *	版本
 */
const VER = "1.0.0";
/**
 *	事件
 */
const Event = {
	STATE_SHOW:	"stateShow",
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
		let len = arr.length;
		let unit = 360/len;
		let radii = 50;
		arr.forEach((o, k)=>{
			checkParams(o);
			let mesh = new Cube(o);
			mesh.addEventListener(Cube.Event.FLY, (e)=>{e.target.play()});
			let x = radii * Math.cos(THREE.Math.degToRad(k * unit));
			let z = radii * Math.sin(THREE.Math.degToRad(k * unit));
			let y = Math.random() * 20 -10;
			let scale = Math.random() * 0.3 + 0.7;
			mesh.scale.set(scale,scale,scale);
			mesh.aim(x, y, z);	
			__cubes.add(mesh);
		})
	};
	/**
	 * 检测参数
	 * @param {*} obj 
	 */
	function checkParams(obj){
		for(let k in obj){
			var o = obj[k];
			if(!o) continue;
			if(o.hasOwnProperty("map")){
				var map = new THREE.Texture(Preload.getResult(o.map));
				map.needsUpdate = true;
				o.map = map;
			}
			if(o.hasOwnProperty("opacity")){
				o.transparent = true;
			}
		}
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
		checkParams(obj);
		__box = new Cube(obj);
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
	 *	控制
	 */
	_this.control = function(){
		_controls = new THREE.DeviceOrientationControls(__camera);
		_controls.noZoom = true;
		_controls.noPan = true;
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

export {VER,Event,Preload,main};