/**
 *	动画纹理
 */
var Texture = function(img){
	var _this = this;
	const WIDTH = 512,
		HEIGHT = 512;
	var __entity = null;
	var _clock = null,
		_last = 0,
		_expire = 2;
	var _step = 0,
		_index = 0,
		_unit = 0;
	_this.init = function(img){
		THREE.Texture.call(_this, img);
		_this.needsUpdate = true;
		if(img.width > WIDTH){
			_step = Math.floor(img.width / WIDTH);
			_unit = WIDTH / img.width;
			_this.repeat.set(_unit, 1);
			_clock = new THREE.Clock();
			animate();
		}
	};
	_this.setExpire = function(n){
		_expire = n;
	};
	function motion(){
		let t = _clock.getElapsedTime();
		if(t-_last < _expire) return;
		_last = t;
		_this.offset.set(_index * _unit, 0);
		_index++;
		if(_index>=_step) _index = 0;
	}
	function animate() {
		requestAnimationFrame( animate );
		motion();
	}
	_this.init(img);
};
Texture.prototype = Object.create( THREE.Texture.prototype );
Texture.prototype.constructor = Texture;

export default Texture;