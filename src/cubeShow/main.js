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
		__ball = null,	//球
		__person = null,	//人视角
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
		__camera.position.set(0, 0, 10);
		__scene = new THREE.Scene();	//场景
		
		__renderer = new THREE.WebGLRenderer({canvas: container, antialias: true, alpha:true});	//渲染器
		__renderer.autoClear = false;
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		
		//__stats = new Stats();
		//document.body.appendChild(__stats.dom);
		var geometry = new THREE.BoxGeometry( 5, 5, 5 );
		var map = new THREE.Texture(window.img.getImageByID("face"));
		map.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial({map:map});
		var mesh = new THREE.Mesh( geometry, material );
		__scene.add( mesh );
		animate();
	};
	_this.resize = function(width, height){
		if(!width) width = window.innerWidth;
		if(!height) height = window.innerHeight;
		CAMERA_WIDTH = WIDTH = width;
		HEIGHT = height;
		CAMERA_HEIGHT = HEIGHT * 0.8;
		__camera.aspect = CAMERA_WIDTH/CAMERA_HEIGHT;
		__camera.updateProjectionMatrix();
		__renderer.setSize( WIDTH, HEIGHT );
	};
	/**
	 *	启动
	 */
	_this.launch = function(coordinates){
		for(var i in coordinates) {
			if(isNaN(i)) continue;
			var coordinate = coordinates[i];
			coordinate.index = i;
			__ball.addMarking(coordinate);
		}
		_this.reset();
	};
	_this.location = function(index){
		var arr = __ball.getObjects();
		if(!isNaN(index) && index < arr.length){
			
		}else{
			index = 0;
			var distance = 0;
			for(var i in arr){
				var s = arr[i];
				var v = __ball.localToWorld(s.position.clone());
				var d = v.distanceTo(__camera.position);
				if(distance==0 || d < distance){
					distance = d;
					index = i;
				}
			}
		}
		var state = arr[index];
		cameraIn (state);
	};
	/**
	 *	灯光初始化
	 *	@param	level	等级
	 */
	function lightInit (level) {
		console.log(level);		
		//__scene.add( createAmbient(),createDirectional(),createSpot());
		if(level < 1){
			addSpotLight(new THREE.Vector3(0, 200, -50), 0xff8d62,1,1,1,14);//↑
			addSpotLight(new THREE.Vector3(0, -200, -50), 0xff8d62,0.5,1,1,14);//↓
			addSpotLight(new THREE.Vector3(200, 0, -50), 0xff8d62,1,1,1,14);//←
			addSpotLight(new THREE.Vector3(-200, 0, -50), 0xff8d62,1,1,1,14);//→
			addSpotLight(new THREE.Vector3(-141, -141, -50), 0xff8d62,1,1,1,14);//↘
			addSpotLight(new THREE.Vector3(141, -141, -50), 0xff8d62,1,1,1,14);//↙
			addSpotLight(new THREE.Vector3(-141, 141, -50), 0xff8d62,1,1,1,14);//↗
			addSpotLight(new THREE.Vector3(141, 141, -50), 0xff8d62,1,1,1,14);//↖
		}
		addSpotLight(new THREE.Vector3(-296.5, 227.5, 0), 0xfe7a18,1.5,1,1,18);//主光
		addSpotLight(new THREE.Vector3(-80, 180, 400), 0x45526c,3,1,1,8);//辅光
	}
	/**
	 *	添加聚光灯
	 */
	function addSpotLight (pos, color, intensity, decay ,inner, outer) {
		var light = new THREE.SpotLight( color, intensity, 0, THREE.Math.degToRad(outer), (outer - inner)/outer, decay );
		light.position.copy(pos);
		//var obj = new THREE.Object3D();
		//__scene.add(obj);
		//obj.position.copy(target);
		//light.target = obj;
		//light.lookAt(new THREE.Vector3(0,1000,0));
		//light.castShadow = true;
		__environment.add(light);
	}
	function createGlow () {
		var map = new THREE.Texture(Globe.Preload.getResult("glow"));
		map.needsUpdate = true;
		var geometry = new THREE.PlaneGeometry( 500, 500, 1,1 );
		var material = new THREE.MeshBasicMaterial( {map:map, side: THREE.DoubleSide, transparent:true} );
		var plane = new THREE.Mesh( geometry, material );
		plane.name = "glow";
		var v = new THREE.Vector3(-16,-24,-80);
		plane.position.copy(v);
		__environment.add(plane);
	}
	function createRing (delay) {
		var geometry = new THREE.TorusGeometry( 150, 0.1, 10, 100 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff,transparent:true } );
		material.opacity = 0.3;
		var torus = new THREE.Mesh( geometry, material );
		torus.scale.set(0.1,0.1,0.1);
		__environment.add( torus );
		new TWEEN.Tween( torus.scale )
			.to( {x:1,y:1,z:1}, 5000 )
			.delay(delay)
			.repeat(Infinity)
			.repeatDelay(0)
			.start();
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		_controls = new THREE.TrackballControls(__camera);
		_controls.noZoom = true;
		_controls.noPan = true;
		_controls.addEventListener("change", onControlChange)
	};
	function onControlChange (e) {
		var o = e.target.object;
		//__environment.lookAt(__camera.position);
		__environment.quaternion.copy(__camera.quaternion);
	}
	function cameraIn (state) {
		state.active();
		__ball.stop();
		var aim = __ball.localToWorld( state.getPositionByRadius(CAMERA_Z) );
		aim.negate();
		var vec3 = new THREE.Vector3(0,0,0);
		vec3.copy(__camera.position);
		var motion = new THREE.Vector3(0,0,0);
		var dis = vec3.distanceTo(aim);
		var pan = new TWEEN.Tween( vec3 )
			.to( aim, dis * 3 )
			.easing(TWEEN.Easing.Quadratic.In)
			.onUpdate(function(e){
				motion.copy(vec3);
				motion.setLength(CAMERA_FAR);
				__camera.position.copy(motion);
			})
			.onComplete(function(e){ motion.setLength(CAMERA_NEAR); })
		var zoom = new TWEEN.Tween(__camera.position)
			.to( motion, 1000 )
			.easing(TWEEN.Easing.Quadratic.In)
			.onComplete(function(e){ _this.dispatchEvent({ type: Globe.Event.STATE_SHOW, data:state.getIndex() }); })
		pan.chain(zoom);
		pan.start();
	}
	function cameraOut () {
		var arr = __ball.getObjects();
		for(var i in arr){
			var o = arr[i];
			o.recovery();
		}
		var vec3 = __camera.position.clone();
		vec3.setLength(CAMERA_FAR)
		var tween = new TWEEN.Tween( __camera.position )
			.to( vec3, 1000 )
			.easing(TWEEN.Easing.Quadratic.In)
			.onComplete(function(){__ball.play();})
			.start();
	}
	_this.reset = function() {
		cameraOut();
		__environment.quaternion.copy(__camera.quaternion);
	}
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

export {VER,Event,main};