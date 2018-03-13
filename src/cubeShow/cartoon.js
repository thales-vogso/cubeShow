window.AdobeAn = {};
require("../video/LC");
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
	var WIDTH = 640,
		HEIGHT = 1042;
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		_this.on("tick", onTick);
	};
	_this.play = function(name){
		flaPlay(name);
	};
	_this.clear = function(){
		_this.removeAllChildren();
	};
	function flaPlay(name){
		_this.removeAllChildren();
		//let url = `/src/video/${name}`;
		//import(url).then(lazy);
		var comp=AdobeAn.getComposition(name);
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		if(name == "Kids"){
			var images=comp.getImages();
			images['_1'] = CubeShow.Preload.getResult("_1");
		}
		var ssMetadata = lib.ssMetadata;
		for(let i=0; i<ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [CubeShow.Preload.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		let mc = new lib[name]();
		_this.addChild(mc);
	}
	function lazy(m){
		console.log(m);
		return;
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
		loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	}
	function handleFileLoad(evt, comp) {
		var images=comp.getImages();	
		if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
	}
	function handleComplete(evt,comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for(i=0; i<ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		exportRoot = new lib.Guide();
		stage = new lib.Stage(canvas);	
	}	
	function onTick (e) {
		
	}
	this.init(canvas);
};
Cartoon.prototype = createjs.extend(Cartoon, createjs.Stage);
Cartoon = createjs.promote(Cartoon, "Stage");

Cartoon.Event = {
	IMG_LOADING:"imgLoading",
	IMG_LOADED:"imgLoaded"
};

export default Cartoon;