(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"LC_atlas_", frames: [[0,1076,640,1138],[0,0,2904,1074],[642,1076,640,381]]}
];


// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["LC_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["LC_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1_1 = function() {
	this.spriteSheet = ss["LC_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-542,-966,1.689,1.689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-542,-966,1080.8,1921.8);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-526,-215,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526,-215,1047.8,387.5);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib._1_1();
	this.instance.parent = this;
	this.instance.setTransform(-1251,-743,3.903,3.903);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1251,-743,2498.2,1487.2);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14.7,1,1).p("AAHIKIgNwT");
	this.shape.setTransform(51.3,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(14.7,1,1).p("AoJAAIQTAA");
	this.shape_1.setTransform(52.2,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,119.1,119.1);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("En0SC5JMAAAlyRMPolAAAMAAAFyRg");
	this.shape.setTransform(1859.4,99.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_2
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-1311,-1087,2.166,2.166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-1342.5,-1087,6403.8,2371.1), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("EkTXCjpMAAAlHRMImvAAAMAAAFHRg");
	this.shape.setTransform(-8.4,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_2
	this.instance = new lib._1_1();
	this.instance.parent = this;
	this.instance.setTransform(-1772,-1072,5.497,5.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-1772,-1072,3526,2095.8), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(52.2,52.1,1,1,0,0,0,52.2,52.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.4,y:113.5,alpha:1},3).to({x:-86.3,y:277,alpha:0},8).to({startPosition:0},3).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,119.1,119.1);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.补间5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(194.3,228.2,0.001,0.002,0,0,0,107.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1.01,x:298.5,y:226.4},9).to({regX:107.6,scaleX:1.1,scaleY:1.1,x:355.6,y:227.8},12).to({regX:107.2,regY:0.3,scaleX:10.84,scaleY:10.85,x:6199.2,y:-619.5},8).to({x:2567.4},118).to({regY:0.2,scaleX:5.66,scaleY:5.66,x:54.9,y:238.2},18).to({startPosition:0},44).wait(1));

	// 图层_1
	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(198.3,229.7,0.032,0.032,0,0,0,655.1,328.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:655.3,regY:327.7,scaleX:0.96,scaleY:0.96,x:198.4},9).to({_off:true},20).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.4,185.1,201.9,74.8);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.instance = new lib.补间4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(542,906.9,0,0.001,0,0,0,0,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.43,scaleY:0.43,x:541.1,y:919.7},12).to({regX:0.1,regY:74.6,scaleX:0.48,scaleY:0.48,x:543.3,y:925.2},28).wait(14));

	// 图层_6
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(589.6,826.7,0.016,0.016,0,0,0,183.5,105.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:182.1,regY:105.8,scaleX:0.89,scaleY:0.89,x:753.7,y:900.9},12).to({regX:182.3,regY:105.9,scaleX:0.96,scaleY:0.96,x:753.8,y:901},28).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(541.5,807.8,73.3,99.5);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.instance = new lib.元件10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(263.1,1119.4,0.538,0.538);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(162));

	// 图层_4
	this.instance_1 = new lib.元件10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(289.7,1251.1,0.963,0.963,0,0,0,-16.4,148);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(169));

	// 图层_3
	this.instance_2 = new lib.元件10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.1,1153.5,0.538,0.538);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(175));

	// 图层_2
	this.instance_3 = new lib.元件10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(241,1098.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233.6,1090.7,119.1,119);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_9
	this.instance = new lib.元件15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(716.5,330.9,1,1,-167.7,0,0,287.6,1165.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},94).wait(89));

	// 图层_5
	this.instance_1 = new lib.元件10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.1,1119.4,0.538,0.538);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({_off:true},73).wait(89));

	// 图层_4
	this.instance_2 = new lib.元件10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(289.7,1251.1,0.963,0.963,0,0,0,-16.4,148);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({_off:true},80).wait(89));

	// 图层_3
	this.instance_3 = new lib.元件10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(271.1,1153.5,0.538,0.538);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).to({_off:true},86).wait(89));

	// 图层_2
	this.instance_4 = new lib.元件10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(241,1098.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true},93).wait(89));

	// 图层_1
	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(539.8,960.2,0.001,0.001,0,0,0,0,96.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.1,regY:96.5,scaleX:1,scaleY:1,x:539.9,y:1057.3,alpha:1},7).to({_off:true},95).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(539.3,959.6,1,1);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.4,56.5,1,1,0,0,0,168.8,279.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(341));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-38.3,201.9,74.8);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-278.2,-681.7,1,1,0,0,0,263.3,224.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-98.5,73.3,99.5);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_11
	this.instance = new lib.元件9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(540.8,961.1,1,1,0,0,0,539.8,960.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207).to({_off:false},0).wait(102));

	// 图层_8
	this.instance_1 = new lib.元件8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(530.3,916.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({alpha:1,startPosition:9},9).to({startPosition:154},145).to({startPosition:171},22).to({_off:true},1).wait(91));

	// 1
	this.instance_2 = new lib.元件7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(410.3,695.6,1,1,0,0,0,-134.1,-316.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1,startPosition:4},4).to({startPosition:41},37).to({alpha:0,startPosition:45},4).to({_off:true},1).wait(263));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(544.4,913.7,73.3,99.6);


// stage content:
(lib.LC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层_12
	this.instance = new lib.元件16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.7,149.5,0.59,0.59,0,0,0,114.8,251.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(309));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(642.3,1061.1,43.3,58.8);
// library properties:
lib.properties = {
	id: 'D279CE1507FE9D49B7F74414332A3CC7',
	width: 640,
	height: 1042,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/images-LC_atlas_.png", id:"LC_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['LC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
