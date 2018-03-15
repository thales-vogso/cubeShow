import * as TWEEN from "es6-tween";
import Texture from "./texture";
/**
 *	方盒
 */
var Cube = function(param){
	var _this = this;
	const WIDTH = 10,	//尺寸
		SEGMENTS = 1,	//横断面
		FADE_DURATION = 1000,	//淡入淡出间隔
		IMG_WIDTH = 512,
		RISE_Y = 50,	//上升位置
		SCALE_MIN = 0.2,
		SCALE_MAX = 1,
		FLY_DURATION = 800,	//下降间隔
		ROTATION = -Math.PI/2,	//旋转角度
		DELAY = 1000,	//间隔
		DURATION = 5000;	//自转周期
	var _tween = null,
		_flyTween = null;
	var _enable = false;	//点击
	var __entity = null;
	var _aim = null;
	var _p0 = new THREE.Vector3(0,0,0),
		_p1 = new THREE.Vector3(0,0,0),
		_p2 = new THREE.Vector3(0,0,0),
		_p3 = new THREE.Vector3(0,0,0);
	_this.init = function(param){
		THREE.Object3D.call(_this);
		_this.name = param.name;
		_this.url = param.url;
		let g = new THREE.BoxGeometry(WIDTH, WIDTH, WIDTH, SEGMENTS);
		let m = [
			getMaterial(param.right),	//right
			getMaterial(param.left),	//left
			getMaterial(param.top),	//top
			getMaterial(param.bottom),	//bottom
			getMaterial(param.back),	//back
			getMaterial(param.front)	//front
		];
		__entity = new THREE.Mesh(g, m);
		_this.add(__entity);
		TWEEN.autoPlay(true);
		_tween = new TWEEN.Tween(__entity.rotation)
			.to({x:Math.PI*2, y:Math.PI*2}, DURATION)
			.delay(DELAY)
			.easing(TWEEN.Easing.Cubic.InOut)
			.repeat(Infinity);
	};
	function getMaterial(p){
		let m = null;
		if(p){
			let param = {side: THREE.DoubleSide, transparent: true};
			for(let k in p){
				param[k] = p[k];
			}
			if(p.hasOwnProperty("map")){
				let id = _this.name;
				if(p.map) id += '-' + p.map;
				param.map = new Texture(CubeShow.Preload.getResult(id));
			}
			m = new THREE.MeshBasicMaterial( param );
		}
		return m;
	}
	function motion(map, canvas, img){
		canvas.getContext("2d").drawImage(img, 0,0);
		map.needsUpdate = true;
		if(img.width > IMG_WIDTH){
			let x = 0;
			let sid = setInterval(()=>{
				canvas.getContext("2d").drawImage(img, x,0);
				map.needsUpdate = true;
				if(x <= -img.width){
					x = 0;
				}else{
					x -= IMG_WIDTH;
				}
			}, 500);
		}
	}
	_this.raycast = function( raycaster, intersects ){
		if(_enable && raycaster.ray.distanceToPoint(_this.position) < WIDTH/2){
			_enable = false;
			intersects.push(_this);
		}
	};
	/**
	 *	自转
	 */
	_this.play = function(){
		_tween.start();
	};
	_this.stop = function(){
		_tween.stop();
	};
	_this.aim = function(x, y, z){
		_this.visible = false;
		_this.scale.set(SCALE_MIN,SCALE_MIN,SCALE_MIN);
		_p3 = new THREE.Vector3(x, y, z);
		_p2.copy(_p3).setY(_p1.y);
		_aim = new THREE.Vector3(x, y, z);
	};
	_this.fly = function(delay){
		_p0.copy(_this.position);
		_p1.copy(_p0).setY(Math.random() * 10 + RISE_Y);
		_this.visible = true;
		let tween = new TWEEN.Tween({t:0})
			.delay(delay)
			.to({t:1}, 2000)
			.on("update", onFlying)
			.on("complete", onFly)
			.easing(TWEEN.Easing.Cubic.In);
		tween.start();
	};
	function onFlying(e){
		let x = cuBazier(e.t, _p0.x, _p1.x, _p2.x, _p3.x);
		let y = cuBazier(e.t, _p0.y, _p1.y, _p2.y, _p3.y);
		let z = cuBazier(e.t, _p0.z, _p1.z, _p2.x, _p3.z);
		let scale = SCALE_MIN + e.t * (SCALE_MAX - SCALE_MIN);
		_this.scale.set(scale,scale,scale);
		_this.position.set(x,y,z);
	}
	function cuBazier(t, p0, p1, p2, p3){
		let b = Math.pow((1-t), 3) * p0 + Math.pow((1-t), 2) * t * p1 * 3 + Math.pow(t, 2) * (1-t) * p2 * 3  + Math.pow(t, 3) * p3;
		return b;
	}
	function onFly(e){
		_enable = true;
		_this.dispatchEvent({ type: Cube.Event.FLY });
	}
	/**
	 * 淡入
	 */
	_this.fadeIn = function(){
		_this.visible = true;
		_enable = true;
		__entity.scale.set(0.1,0.1,0.1);
		let tween = new TWEEN.Tween(__entity.scale)
			.to({x:1,y:1,z:1}, FADE_DURATION)
			.easing(TWEEN.Easing.Back.Out)
			.on("complete", onFadeIn)
			.start();
	};
	function onFadeIn(e){
		_this.dispatchEvent({ type: Cube.Event.FADE_IN });
	}
	/**
	 * 淡出
	 */
	_this.fadeOut = function(){
		_enable = false;
		let tween = new TWEEN.Tween(__entity.scale)
			.to({x:0.001,y:0.001,z:0.001}, FADE_DURATION)
			.easing(TWEEN.Easing.Cubic.In)
			.on("complete", (e)=>{_this.visible = false})
			.start();
	};
	_this.getObjects = function(){
		return _objects;
	};
	_this.init(param);
};
Cube.prototype = Object.create( THREE.Object3D.prototype );
Cube.prototype.constructor = Cube;
Cube.Event = {
	FLY:"fly",
	FADE_IN:"cubeFadeIn"
}
export default Cube;