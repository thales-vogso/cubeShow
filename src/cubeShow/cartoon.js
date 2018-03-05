/**
 *	主类，继承create.Stage
 *	@param	canvas	主体或者名称
 */
var Cartoon = function(canvas){
	var _this = this;
	
	var FPS = 24;	//帧频
	var WIDTH = 320,
		HEIGHT = 568;
	var __game = null,	//游戏载体
		__surface = null;	//界面
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS(FPS);	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		__game = new createjs.Container();
		__surface = new createjs.Container();
		_this.addChild(__game, __surface);
		_this.on("tick", onTick);
	};
	_this.ut = function(){
        var bit = new createjs.Bitmap(CubeShow.Preload.getResult("Uniqlo"));
        __game.addChild(bit);
	};
	
	function onTick (e) {
		
	}
	this.init(canvas);
};
Cartoon.prototype = createjs.extend(Cartoon, createjs.Stage);
Cartoon = createjs.promote(Cartoon, "Stage");

export default Cartoon;