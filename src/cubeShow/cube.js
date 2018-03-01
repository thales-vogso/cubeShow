import * as TWEEN from "es6-tween";
/**
 *	方盒
 */
var Cube = function(param){
	var _this = this;
	const WIDTH = 5,	//尺寸
		SEGMENTS = 1,	//横断面
		FADE_DURATION = 1000,	//淡入淡出间隔
		RISE_Y = 10,	//上升位置
		RISE_DURATION = 1000,	//上升间隔
		PLUGE_DURATION = 500,	//下降间隔
		ROTATION = -Math.PI/2,	//旋转角度
		DELAY = 1000,	//间隔
		DURATION = 5000;	//自转周期
	var _tween = null,
		_flyTween = null;
	var __entity = null;
	var _aim = null;
	_this.init = function(param){
		THREE.Object3D.call(_this);
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
			p.side = THREE.DoubleSide;
			m = new THREE.MeshBasicMaterial( p );
		}
		return m;
	}
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
		__entity.scale.set(0.5,0.5,0.5);
		_this.visible = false;
		_aim = new THREE.Vector3(x, y, z);
	};
	_this.fly = function(delay){
		_this.visible = true;
		let rise = new TWEEN.Tween(_this.position)
			.delay(delay)
			.easing(TWEEN.Easing.Exponential.In)
			.to({x:0,y:RISE_Y,z:0}, RISE_DURATION);
		let pluge = new TWEEN.Tween(_this.position)
			.to(_aim, PLUGE_DURATION)
			.easing(TWEEN.Easing.Exponential.InOut);
		rise.chainedTweens(pluge);
		rise.on("complete", onFly);
		rise.start();
	};
	function onFly(e){
		__entity.scale.set(1,1,1);
		_this.dispatchEvent({ type: Cube.Event.FLY });
	}
	/**
	 * 淡入
	 */
	_this.fadeIn = function(){
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
		let tween = new TWEEN.Tween(__entity.scale)
			.to({x:0.1,y:0.1,z:0.1}, FADE_DURATION)
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