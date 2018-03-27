window.AdobeAn = {};

//require('../video/LC');
//require('../video/images/LC_atlas_.png');
/**
 *	主类，继承create.Stage
 *	@param	canvas	主体或者名称
 */
var Cartoon = function(canvas){
	var _this = this;
	
	var FPS = 24;	//帧频
	var WIDTH = 640,
		HEIGHT = 1387;
	var _libName = '';
	var _video = null;
	var _sound = {};
	var _expire = null;
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		videoInit();
		_this.on("tick", onTick);
	};
	function videoInit(){
		_video = document.createElement("video");
		_video.addEventListener("loadstart", videoProgress);
		//_video.addEventListener("progress", videoProgress);
		_video.addEventListener("waiting", videoProgress);
		_video.addEventListener("canplay", videoComplete);
		_video.addEventListener("canplaythrough", videoComplete);
		_video.addEventListener("play", videoComplete);
		_video.addEventListener("playing", videoComplete);
		_video.addEventListener("ended", videoEnded)
	}
	/**
	 * 播放
	 * @param {w} name 
	 */
	_this.play = function(name){
		createjs.Sound.stop();
		if(name == "AIRism" || name == "Wireless"){
			videoPlay(name);
		}else{
			soundPlay(name);
			if(name == "Jeans"){
				_expire = new Date().getTime() + 5 * 1000;
			}else{
				flaPlay(name);
			}
		}	
	};
	/**
	 * 清空
	 */
	_this.clear = function(){
		_this.removeAllChildren();
		_expire = null;
		createjs.Sound.stop();
		soundPlay("LC");
		if(_video) _video.pause();
	};
	/**
	 * 声音播放
	 * @param {*} name 
	 */
	function soundPlay(name){
		let myInstance = null;
		if(_sound.hasOwnProperty(name)){
			myInstance = createjs.Sound.play(name, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1, delay:2000});
		}else{
			let url = `./sounds/BGmusic_${name}.mp3`;
			let listener = createjs.Sound.on("fileload", event=>{
				createjs.Sound.off("fileload", listener);
				myInstance = createjs.Sound.play(name, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1, delay:1000});
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
		_libName = name;
		_video.src = `http://appmedia.qq.com/media/641012709/video/${name}.mp4`;
		//_video.setAttribute("loop", "loop");
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
			
		}else if(name == "Wireless"){
			scale = 440/604;
			mc.regX = 302;
			mc.regY = 540;
		}
		mc.y = window.innerHeight / 2 * _this.canvas.width /_this.canvas.clientWidth;
		mc.x = WIDTH /2;
		mc.scaleX = mc.scaleY = scale;
		
		_this.addChild(mc);
	}
	/**
	 * flash canvas播放
	 * @param {*} name 
	 */
	function flaPlay(name){
		_libName = name;
		_this.removeAllChildren();
		if(module.hot){
			import(`../video/${name}`).then(lazy);
			//require.ensure([`../video/${name}`], e=>{console.log(e);});
		}
		
		//lazy();
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
	function videoProgress(e){
		var event = new createjs.Event(Cartoon.Event.IMG_LOADING);
		event.loaded = 0.5;
		_this.dispatchEvent(event);
	}
	function videoComplete(e){
		_this.dispatchEvent(Cartoon.Event.IMG_LOADED);
	}
	function videoEnded(e){
		console.log(e);
		var event = new createjs.Event(Cartoon.Event.MC_END);
		event.data = _libName;
		_this.dispatchEvent(event);
	}
	function handleProgress(evt){
		var event = new createjs.Event(Cartoon.Event.IMG_LOADING);
		event.loaded = evt.loaded;
		_this.dispatchEvent(event);
	}
	function handleFileLoad(evt, comp) {
		var images=comp.getImages();	
		if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
	}
	function handleComplete(evt,comp) {
		_this.dispatchEvent(Cartoon.Event.IMG_LOADED);
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
				var event = new createjs.Event(Cartoon.Event.MC_END);
				event.data = _libName;
				_this.dispatchEvent(event);
				_this.removeAllChildren();
			}
		});
		_this.addChild(mc);	
	}	
	function onTick (e) {
		if(_expire && new Date().getTime() > _expire){
			_expire = null;
			var event = new createjs.Event(Cartoon.Event.MC_END);
			event.data = "Jeans";
			_this.dispatchEvent(event);
		}
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