import * as TWEEN from "es6-tween";
/**
 *	方盒
 */
var Cube = function(param){
	var _this = this;
	const WIDTH = 5,	//尺寸
		SEGMENTS = 1,	//横断面
		ROTATION = -Math.PI/2,	//旋转角度
		DELAY = 1000,	//间隔
		DURATION = 5000;	//自转周期
	var _tween = null;
	var __entity = null;
	var _front = null,
		_back = null;
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
			.repeat(Infinity)
			.start();
	};
	function getMaterial(p){
		var m = new THREE.MeshBasicMaterial( p );
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
	_this.getObjects = function(){
		return _objects;
	};
	_this.init(param);
};
Cube.prototype = Object.create( THREE.Object3D.prototype );
Cube.prototype.constructor = Cube;

export default Cube;