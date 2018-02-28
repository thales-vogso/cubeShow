/****************************************************************************
*	@Copyright(c)	2018,保定无双软件
*	@desc	优衣库项目，方盒飞
*	@date	2018-2-27
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/main.js
*	@modify	null
******************************************************************************/

import * as THREE from "three";
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
		
	var CAMERA_X = 0,
		CAMERA_Y = 0,
		CAMERA_Z = -239,
		CAMERA_NEAR = 150,
		CAMERA_FAR = 239;
		
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__box = null,	//盒子
		__cubes = null,	//所有的六面体
		__environment = null;	//环境
	var _raycaster = new THREE.Raycaster(),	//射线
		_objects = [],	//检测元素
		_enable = true;	//允许操作
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
		let arr = require('./cubes.json');
		let unit = 360/arr.length;
		let radii = 50;
		arr.forEach((o, k)=>{
			for(let i in o){
				let p = o[i]; 
				if(p.hasOwnProperty("map")){
					var map = new THREE.Texture(Preload.getResult(p.map));
					map.needsUpdate = true;
					p.map = map;
					p.side = THREE.DoubleSide;
				}
				if(p.hasOwnProperty("opacity")){
					p.transparent = true;
				}
			}
			let mesh = new Cube(o);
			let x = radii * Math.cos(THREE.Math.degToRad(k * unit));
			let z = radii * Math.sin(THREE.Math.degToRad(k * unit));
			mesh.position.x = x;
			mesh.position.z = z;
			__cubes.add(mesh);
		})
	};
	function createBox(){
		var obj = {
			front:{map:Preload.getResult("Uniqlo")},
			back:{color:0xffffff,opacity:0.7},
			back:{color:0xffffff,opacity:0.7},
			back:{color:0xffffff,opacity:0.7},
			top:{color:0xffffff,opacity:0.7},
			bottom:{color:0xffffff,opacity:0.7}
		}
		__box = new Cube(obj);
		__scene.add(__box);
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
		//TWEEN.update();
		if(__stats)__stats.update();
		if(_controls)_controls.update();
		__renderer.render( __scene, __camera );
		
	}
	_this.init(container);
};

Object.assign( main.prototype, THREE.EventDispatcher.prototype);
main.prototype.constructor = main;

export {VER,Event,Preload,main};