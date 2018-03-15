window.AdobeAn = {};

/**
 *	主类，继承create.Stage
 *	@param	canvas	主体或者名称
 */
var Cartoon = function(canvas){
	var _this = this;
	
	var FPS = 24;	//帧频
	var WIDTH = 640,
		HEIGHT = 1042;
	var _libName = '';
	var _video = null;
	var _sound = {};
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		_video = document.createElement("video");
		_this.on("tick", onTick);
	};
	/**
	 * 播放
	 * @param {w} name 
	 */
	_this.play = function(name){
		if(name == "AIRism" || name == "Wireless"){
			videoPlay(name);
		}else{
			if(name != "LC"){
				soundPlay(name);
			}
			if(name != "Jeans") flaPlay(name);
		}	
	};
	/**
	 * 清空
	 */
	_this.clear = function(){
		_this.removeAllChildren();
		createjs.Sound.stop();
		if(_video) _video.pause();
	};
	/**
	 * 声音播放
	 * @param {*} name 
	 */
	function soundPlay(name){
		let myInstance = null;
		console.log(name);
		if(_sound.hasOwnProperty(name)){
			myInstance = createjs.Sound.play(name, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1, delay:2000});
		}else{
			let url = `./sounds/BGmusic_${name}.mp3`;
			let listener = createjs.Sound.on("fileload", event=>{
				createjs.Sound.off("fileload", listener);
				myInstance = createjs.Sound.play(name, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1, delay:2000});
				_sound[name] = true;
			});
			createjs.Sound.registerSound(url, name, 3);
		}	
	}
	/**
	 * 视频播放
	 * @param {*} name 
	 */
	function videoPlay(name){
		//_video.src = `video/${name}.mp4`;
		_video.src = `http://appmedia.qq.com/media/641012709/video/${name}.mp4`;
		_video.setAttribute("loop", "loop");
		_video.setAttribute("playsinline", "playsinline");
		_video.setAttribute("webkit-playsinline", "webkit-playsinline");
		_video.play();
		var myBuffer = new createjs.VideoBuffer(_video);
		var mc = new createjs.Bitmap(myBuffer);
		let scale = 1;
		let regX = 0;
		let regY = 0;
		if(name == "AIRism"){
			scale = WIDTH/ 1920;
			mc.regX = 960;
			mc.regY = 540;
			mc.y = HEIGHT / 2;
		}else if(name == "Wireless"){
			scale = 440/604;
			mc.regX = 302;
			mc.y = 100;
		}
		mc.x = WIDTH /2;
		mc.scaleX = mc.scaleY = scale;
		
		_this.addChild(mc);
	}
	/**
	 * flash canvas播放
	 * @param {*} name 
	 */
	function flaPlay(name){
		_this.removeAllChildren();
		import(`../video/${name}`).then(lazy);
		_libName = name;
	}
	/**
	 * 懒加载
	 * @param {*} m 
	 */
	function lazy(m){
		var loader = new createjs.LoadQueue(false);
		let comp = AdobeAn.getComposition(_libName);
		let lib=comp.getLibrary();
		loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
		loader.addEventListener("progress", handleProgress);//资源载入中
		loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
		loader.loadManifest(lib.properties.manifest);
	}
	function handleProgress(evt){
		var event = new createjs.Event(Cartoon.Event.IMG_LOADING);
		event.loaded = evt.loaded;
		_this.dispatchEvent(event);
	}
	function handleFileLoad(evt, comp) {
		_this.dispatchEvent(Cartoon.Event.IMG_LOADED);
		var images=comp.getImages();	
		if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
	}
	function handleComplete(evt,comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for(let i=0; i<ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		let mc = new lib[_libName]();
		let listener = mc.on("tick", e=>{
			if(mc.currentFrame >= mc.totalFrames){
				mc.off("tick", listener);
				_this.dispatchEvent(Cartoon.Event.MC_END);
			}
		});
		_this.addChild(mc);	
	}	
	function onTick (e) {
		
	}
	this.init(canvas);
};
Cartoon.prototype = createjs.extend(Cartoon, createjs.Stage);
Cartoon = createjs.promote(Cartoon, "Stage");

Cartoon.Event = {
	IMG_LOADING:"imgLoading",
	IMG_LOADED:"imgLoaded",
	MC_END:"MCEnd"
};

export default Cartoon;