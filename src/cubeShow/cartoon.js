window.AdobeAn = {};


require("../video/DPJ");
require("../video/Dress");
require("../video/DryEX");
require("../video/kando");
require("../video/Kids");
require("../video/UT");


/**
 *	主类，继承create.Stage
 *	@param	canvas	主体或者名称
 */
var Cartoon = function(canvas){
	var _this = this;
	
	var FPS = 24;	//帧频
	var WIDTH = 720,
		HEIGHT = 1560;
	var __game = null,	//游戏载体
		__surface = null;	//界面
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		__game = new createjs.Container();
		__surface = new createjs.Container();
		_this.addChild(__game, __surface);
		_this.on("tick", onTick);
	};
	_this.play = function(name){
		console.log(name);
		flaPlay(name);
	};
	function flaPlay(name){
		_this.removeAllChildren();
		var comp=AdobeAn.getComposition(name);
		console.log(comp, AdobeAn);
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		var ssMetadata = lib.ssMetadata;
		for(let i=0; i<ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [CubeShow.Preload.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		let mc = new lib[name]();
		_this.addChild(mc);
	}
	
	function onTick (e) {
		
	}
	this.init(canvas);
};
Cartoon.prototype = createjs.extend(Cartoon, createjs.Stage);
Cartoon = createjs.promote(Cartoon, "Stage");

export default Cartoon;