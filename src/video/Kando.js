(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Kando_atlas_", frames: [[0,0,741,428],[0,817,419,330],[0,430,369,385]]},
		{name:"Kando_atlas_2", frames: [[0,649,226,377],[518,673,192,323],[0,0,388,315],[0,317,291,330],[521,302,177,369],[415,998,235,217],[228,909,185,305],[390,0,320,300],[293,317,226,350],[228,669,288,238]]},
		{name:"Kando_atlas_3", frames: [[356,426,123,135],[231,426,123,163],[0,0,211,225],[0,827,231,97],[380,563,120,120],[336,0,114,203],[0,619,129,206],[0,438,229,179],[231,591,147,136],[210,263,152,161],[213,0,121,261],[0,227,208,209],[364,205,119,108],[0,926,153,83],[233,729,166,116],[233,847,166,116],[131,619,97,186]]}
];


// symbols:



(lib._01 = function() {
	this.spriteSheet = ss["Kando_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.m1 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.m2 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.m5 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.m6 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.m7 = function() {
	this.spriteSheet = ss["Kando_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.m8 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m9 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.n1 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.n2 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.n3 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.n4 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.n5 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.n6 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.n7 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.n8 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.n9 = function() {
	this.spriteSheet = ss["Kando_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.r1 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.r10 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.r11 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.r2 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.r3 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.r4 = function() {
	this.spriteSheet = ss["Kando_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.r5 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.r6 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.r7 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.r8 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.r9 = function() {
	this.spriteSheet = ss["Kando_atlas_3"];
	this.gotoAndStop(16);
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


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,623.3,360), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0,0,231,97), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0,0,388,315), null);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,419,330), null);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(0,0,211,225), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,123,135), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件24, new cjs.Rectangle(0,0,192,323), null);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件23, new cjs.Rectangle(0,0,226,377), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,123,163), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.m9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,120,120), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,121,261), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,208,209), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,119,108), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,153,83), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,166,116), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,166,116), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,147,136), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,226,350), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,288,238), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,97,186), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.r11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,152,161), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,201.6,228.6), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,162.8,150.3), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,122.6,255.6), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,128.2,211.3), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,221.7,207.8), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,89.4,142.7), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,158.6,124), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,79,140.6), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.n9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,255.6,266.7), null);


(lib.元件3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m4.png
	this.instance_1 = new lib.元件22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(618.4,203.2,1,1,0,0,0,75.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:75.5,rotation:0.3,x:618.5,y:203.3},0).wait(1).to({rotation:0.5},0).wait(1).to({regX:75.4,rotation:1,x:618.4,y:203.4},0).wait(1).to({regX:75.5,rotation:1.3,y:203.5},0).wait(1).to({regX:75.4,rotation:1.5,x:618.3},0).wait(1).to({regX:75.5,rotation:2,y:203.6},0).wait(1).to({regX:75.4,rotation:2.3,y:203.7},0).wait(1).to({rotation:2.6,x:618.2},0).wait(1).to({regX:75.5,rotation:3,y:203.8},0).wait(1).to({regX:75.4,regY:4.3,rotation:3.3,x:618.1,y:203.9},0).wait(1).to({regX:75.5,regY:4.2,rotation:3.6,x:618.2,y:204},0).wait(1).to({rotation:4,x:618.1},0).wait(1).to({regX:75.4,rotation:4.3,x:618,y:204.1},0).wait(1).to({regX:75.5,rotation:4.8,x:618.1},0).wait(1).to({rotation:5,x:618,y:204.2},0).wait(1).to({rotation:5.3,x:617.9},0).wait(1).to({rotation:5.8,x:618,y:204.3},0).wait(1).to({regX:75.4,rotation:6,x:617.8,y:204.4},0).wait(1).to({regX:75.5,rotation:6.3,x:617.9},0).wait(1).to({rotation:6.8,x:617.8,y:204.5},0).wait(1).to({rotation:7,y:204.6},0).wait(1).to({regX:75.4,rotation:7.3,x:617.7},0).wait(1).to({regX:75.5,rotation:7.8,y:204.7},0).wait(1).to({rotation:8,y:204.8},0).wait(1).to({rotation:8.3,x:617.6},0).wait(1).to({rotation:8.8,y:204.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,y:205},0).wait(1).to({regX:75.4,rotation:9.5,x:617.5,y:205.1},0).wait(1).to({regX:75.5,rotation:9.8},0).wait(1).to({rotation:10.1,x:617.4,y:205.2},0).wait(1).to({regX:75.4,regY:4.1,rotation:10.5},0).wait(1).to({regY:4.2,rotation:10.8,x:617.3},0).wait(1).to({regX:75.5,rotation:11.1,x:617.4,y:205.3},0).wait(1).to({rotation:11.5,x:617.3,y:205.4},0).wait(1).to({rotation:11.8,y:205.5},0).wait(1).to({rotation:12.1},0).wait(1).to({regX:75.4,rotation:12.5,x:617.2,y:205.6},0).wait(1).to({regX:75.5,rotation:12.8,y:205.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.3,y:205.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.5,x:617.1},0).wait(1).to({rotation:13.8,y:205.9},0).wait(1).to({rotation:14.3,x:617,y:206},0).wait(1).to({regX:75.4,rotation:14.5,x:616.9,y:205.9},0).to({_off:true},1).wait(62));

	// m3.png
	this.instance_2 = new lib.元件25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(543.8,96.9,1,1,0,0,0,5.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({rotation:0.3},0).wait(2).to({x:543.9},0).wait(1).to({rotation:0.5,x:543.8},0).wait(3).to({rotation:0.8},0).wait(1).to({y:97},0).wait(1).to({y:96.9},0).wait(1).to({rotation:1},0).wait(1).to({x:543.9},0).wait(1).to({x:543.8},0).wait(1).to({rotation:1.3,y:97},0).wait(1).to({regY:2.8,y:96.9},0).wait(2).to({regY:2.9,rotation:1.5},0).wait(3).to({rotation:1.8},0).wait(3).to({rotation:2},0).wait(3).to({rotation:2.3,x:543.9,y:97},0).wait(1).to({x:543.8},0).wait(1).to({regY:2.8,y:96.9},0).wait(1).to({regY:2.9,rotation:2.5},0).wait(3).to({rotation:2.8},0).wait(1).to({y:97},0).wait(1).to({regY:2.8,y:96.9},0).wait(1).to({regY:2.9,rotation:3},0).wait(3).to({rotation:3.3,y:97},0).wait(2).to({regX:5.9,x:543.9,y:96.9},0).wait(1).to({regX:5.8,rotation:3.5,x:543.8},0).wait(1).to({y:97},0).to({_off:true},1).wait(62));

	// m8.png
	this.instance_3 = new lib.元件29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(350.7,304.9,1,1,0,0,0,231.7,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:49,x:351,y:305.1},0).wait(1).to({rotation:0.3,x:351.3,y:305.3},0).wait(1).to({regX:231.6,rotation:0.5,x:351.5,y:305.4},0).wait(1).to({regX:231.7,rotation:0.8,x:351.8,y:305.5},0).wait(1).to({x:352.2,y:305.7},0).wait(1).to({rotation:1,x:352.5,y:305.9},0).wait(1).to({rotation:1.3,x:352.7,y:306.1},0).wait(1).to({rotation:1.5,x:353.1,y:306.2},0).wait(1).to({regY:48.9,rotation:1.8,x:353.4},0).wait(1).to({x:353.7,y:306.3},0).wait(1).to({regY:49,rotation:2,x:353.9,y:306.6},0).wait(1).to({regX:231.6,rotation:2.3,x:354.2,y:306.7},0).wait(1).to({regX:231.7,rotation:2.5,x:354.5,y:306.9},0).wait(1).to({rotation:2.8,x:354.8,y:307.1},0).wait(1).to({x:355.1,y:307.2},0).wait(1).to({regY:48.9,rotation:3,x:355.4},0).wait(1).to({regY:49,rotation:3.3,x:355.7,y:307.5},0).wait(1).to({regY:48.9,rotation:3.5,x:356},0).wait(1).to({regY:49,rotation:3.8,x:356.3,y:307.8},0).wait(1).to({regY:48.9,x:356.6},0).wait(1).to({rotation:4,x:356.9,y:307.9},0).wait(1).to({regY:49,rotation:4.3,x:357.2,y:308.2},0).wait(1).to({rotation:4.5,x:357.5,y:308.4},0).wait(1).to({rotation:4.8,x:357.8,y:308.6},0).wait(1).to({x:358.1,y:308.7},0).wait(1).to({rotation:5,x:358.4,y:308.8},0).wait(1).to({regY:48.9,rotation:5.3,x:358.7,y:308.9},0).wait(1).to({rotation:5.5,x:359,y:309},0).wait(1).to({regY:49,rotation:5.6,x:359.3,y:309.2},0).wait(1).to({regY:48.9,rotation:5.8,x:359.6,y:309.3},0).wait(1).to({regY:49,rotation:6,x:359.9,y:309.5},0).wait(1).to({regY:48.9,rotation:6.3,x:360.2,y:309.6},0).wait(1).to({regY:49,rotation:6.5,x:360.4,y:309.8},0).wait(1).to({rotation:6.6,x:360.7,y:310},0).wait(1).to({rotation:6.8,x:361.1,y:310.1},0).wait(1).to({rotation:7,x:361.3,y:310.2},0).wait(1).to({regY:48.9,rotation:7.3,x:361.7,y:310.3},0).wait(1).to({regX:231.8,rotation:7.5,x:362,y:310.4},0).wait(1).to({regX:231.7,rotation:7.6,x:362.2,y:310.6},0).wait(1).to({rotation:7.8,x:362.5,y:310.8},0).wait(1).to({rotation:8,x:362.8,y:310.9},0).wait(1).to({regY:49,rotation:8.3,x:363.1,y:311.1},0).wait(1).to({regY:48.9,rotation:8.5,x:363.4,y:311.2},0).to({_off:true},1).wait(62));

	// m7.png
	this.instance_4 = new lib.元件27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(615.4,621.5,1,1,0,0,0,32.9,104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:33,rotation:-0.5},0).wait(1).to({rotation:-1,x:615.5},0).wait(1).to({rotation:-1.5},0).wait(1).to({regX:32.9,rotation:-2,x:615.4},0).wait(1).to({rotation:-2.5},0).wait(1).to({regX:33,rotation:-3,x:615.5,y:621.4},0).wait(1).to({regX:32.9,rotation:-3.5,x:615.4,y:621.5},0).wait(1).to({rotation:-4,y:621.4},0).wait(1).to({regX:33,rotation:-4.5,x:615.5,y:621.5},0).wait(1).to({regX:32.9,regY:104.1,rotation:-5,x:615.4,y:621.4},0).wait(1).to({regY:104.2,rotation:-5.5,y:621.5},0).wait(1).to({regX:33,rotation:-6},0).wait(1).to({rotation:-6.5,x:615.5},0).wait(1).to({rotation:-7.1},0).wait(1).to({regX:32.9,rotation:-7.6,x:615.4},0).wait(1).to({regY:104.3,rotation:-8.1},0).wait(1).to({regX:33,regY:104.2,rotation:-8.6},0).wait(1).to({rotation:-9.2,x:615.5},0).wait(1).to({regX:32.9,scaleX:1,scaleY:1,rotation:-9.8,x:615.4},0).wait(1).to({rotation:-10.3,y:621.4},0).wait(1).to({rotation:-10.8},0).wait(1).to({rotation:-11.3,y:621.5},0).wait(1).to({rotation:-11.8},0).wait(1).to({rotation:-12.3},0).wait(1).to({regX:33,rotation:-12.8,x:615.5},0).wait(1).to({rotation:-13.3},0).wait(1).to({regX:32.9,rotation:-13.8,x:615.4,y:621.4},0).wait(1).to({regX:33,rotation:-14.3,y:621.5},0).wait(1).to({regX:32.9,rotation:-14.8},0).wait(1).to({rotation:-15.3,y:621.4},0).wait(1).to({rotation:-15.8,y:621.5},0).wait(1).to({rotation:-16.3,y:621.4},0).wait(1).to({regX:33,rotation:-16.8,x:615.5,y:621.5},0).wait(1).to({rotation:-17.3},0).wait(1).to({rotation:-17.8,y:621.4},0).wait(1).to({regX:32.9,scaleX:1,scaleY:1,rotation:-18.5,x:615.4,y:621.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-19},0).wait(1).to({regX:33,rotation:-19.5,y:621.4},0).wait(1).to({regX:32.9,rotation:-20,y:621.5},0).wait(1).to({rotation:-20.5,y:621.4},0).wait(1).to({rotation:-21,x:615.3,y:621.5},0).wait(1).to({rotation:-21.5},0).wait(1).to({regX:33,regY:104.3,rotation:-22.1,x:615.5},0).to({_off:true},1).wait(62));

	// m1.png
	this.instance_5 = new lib.元件23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(519,188.5,1,1,0,0,0,113,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:true},1).wait(62));

	// m2.png
	this.instance_6 = new lib.元件24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(623,315.3,1,1,0,0,0,131.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:true},1).wait(62));

	// m6.png
	this.instance_7 = new lib.元件28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(370.3,530.9,1,1,0,0,0,340.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:-1.3,rotation:-0.3,y:530.5},0).wait(1).to({rotation:-0.8,y:530},0).wait(1).to({rotation:-1.3,y:529.5},0).wait(1).to({rotation:-1.8,y:529},0).wait(1).to({regY:-1.4,rotation:-2.3,y:528.5},0).wait(1).to({regY:-1.3,rotation:-2.8,y:528.1},0).wait(1).to({regY:-1.4,rotation:-3.3,y:527.5},0).wait(1).to({regY:-1.3,rotation:-3.8,x:370.2,y:527.1},0).wait(1).to({rotation:-4.3,x:370.3,y:526.6},0).wait(1).to({regY:-1.4,rotation:-4.8,y:526},0).wait(1).to({rotation:-5.3,x:370.2,y:525.5},0).wait(1).to({regY:-1.3,rotation:-5.6,y:525.1},0).wait(1).to({regY:-1.4,rotation:-6.1,x:370.3,y:524.6},0).wait(1).to({regY:-1.3,rotation:-6.6,y:524.2},0).wait(1).to({rotation:-7,y:523.6},0).wait(1).to({rotation:-7.5,y:523.2},0).wait(1).to({rotation:-8,y:522.7},0).wait(1).to({regY:-1.4,rotation:-8.5,x:370.4,y:522.1},0).wait(1).to({rotation:-9,x:370.3,y:521.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.5,y:521.1},0).wait(1).to({rotation:-10,y:520.7},0).wait(1).to({regY:-1.3,rotation:-10.5,y:520.2},0).wait(1).to({regY:-1.4,rotation:-10.8,y:519.7},0).wait(1).to({regY:-1.3,rotation:-11.3,y:519.3},0).wait(1).to({regY:-1.4,rotation:-11.8,x:370.4,y:518.7},0).wait(1).to({regY:-1.3,rotation:-12.3,y:518.3},0).wait(1).to({regY:-1.4,rotation:-12.8,x:370.3,y:517.7},0).wait(1).to({rotation:-13.3,x:370.4,y:517.3},0).wait(1).to({regY:-1.3,rotation:-13.8,y:516.9},0).wait(1).to({rotation:-14.3,y:516.4},0).wait(1).to({regY:-1.4,rotation:-14.8,y:515.8},0).wait(1).to({rotation:-15.3,y:515.3},0).wait(1).to({regY:-1.3,rotation:-15.8,y:514.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.3,y:514.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.6,y:513.9},0).wait(1).to({regX:340.1,regY:-1.4,rotation:-17.1,x:370.3,y:513.3},0).wait(1).to({regX:340.2,rotation:-17.6,x:370.4,y:512.8},0).wait(1).to({rotation:-18.1,y:512.3},0).wait(1).to({rotation:-18.6,y:511.8},0).wait(1).to({regX:340.3,rotation:-19,x:370.5,y:511.4},0).wait(1).to({regX:340.1,regY:-1.3,rotation:-19.5,x:370.3,y:511},0).wait(1).to({regX:340.2,rotation:-20,x:370.4,y:510.5},0).wait(1).to({rotation:-20.5,x:370.5,y:510},0).to({_off:true},1).wait(62));

	// m5.png
	this.instance_8 = new lib.元件26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(507.9,436.4,1,1,0,0,0,147.8,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:508.1,y:436.3},0).wait(1).to({regY:38.2,rotation:0.3,x:508.3},0).wait(1).to({x:508.5,y:436.2},0).wait(1).to({regY:38.1,rotation:0.5,x:508.8,y:435.9},0).wait(1).to({rotation:0.6,x:509,y:435.8},0).wait(1).to({regY:38.2,rotation:0.8,x:509.3},0).wait(1).to({regY:38.1,rotation:1,x:509.4,y:435.6},0).wait(1).to({regY:38.2,x:509.6},0).wait(1).to({regY:38.1,rotation:1.3,x:509.9,y:435.4},0).wait(1).to({regY:38.2,x:510.1,y:435.3},0).wait(1).to({rotation:1.5,x:510.4,y:435.2},0).wait(1).to({regY:38.1,rotation:1.8,x:510.6,y:435.1},0).wait(1).to({regY:38.2,x:510.8},0).wait(1).to({regY:38.1,rotation:2,x:511,y:434.7},0).wait(1).to({rotation:2.1,x:511.3},0).wait(1).to({rotation:2.3,x:511.5,y:434.6},0).wait(1).to({rotation:2.5,x:511.7,y:434.4},0).wait(1).to({regX:147.7,regY:38.2,x:511.9},0).wait(1).to({regX:147.8,regY:38.1,rotation:2.8,x:512.1,y:434.2},0).wait(1).to({x:512.4,y:434.1},0).wait(1).to({rotation:3,x:512.6,y:434},0).wait(1).to({regY:38.2,rotation:3.3,x:512.8},0).wait(1).to({x:513.1,y:433.9},0).wait(1).to({regY:38.1,rotation:3.5,x:513.3,y:433.6},0).wait(1).to({rotation:3.6,x:513.5,y:433.5},0).wait(1).to({rotation:3.8,x:513.7,y:433.4},0).wait(1).to({regY:38.2,rotation:4,x:514},0).wait(1).to({x:514.2,y:433.2},0).wait(1).to({rotation:4.3,x:514.4},0).wait(1).to({regY:38.1,x:514.7,y:433},0).wait(1).to({rotation:4.5,x:514.9,y:432.8},0).wait(1).to({regY:38.2,rotation:4.8,x:515.1},0).wait(1).to({regY:38.1,x:515.3,y:432.6},0).wait(1).to({regY:38.2,rotation:5,x:515.5},0).wait(1).to({rotation:5.1,x:515.8,y:432.5},0).wait(1).to({regY:38.1,rotation:5.3,x:516,y:432.3},0).wait(1).to({rotation:5.5,x:516.2,y:432.1},0).wait(1).to({regX:147.7,x:516.3,y:432},0).wait(1).to({regX:147.8,rotation:5.8,x:516.7,y:431.9},0).wait(1).to({x:516.9,y:431.8},0).wait(1).to({rotation:6,x:517.2,y:431.7},0).wait(1).to({regY:38.2,rotation:6.3,x:517.3,y:431.6},0).wait(1).to({regY:38.1,x:517.6,y:431.5},0).to({_off:true},1).wait(62));

	// m9.png
	this.instance_9 = new lib.元件21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(412.5,190.6,1,1,0,0,0,84.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({rotation:-0.3},0).wait(2).to({rotation:-0.5},0).wait(1).to({rotation:-0.6,y:190.7},0).wait(1).to({rotation:-0.8,x:412.6,y:190.6},0).wait(1).to({rotation:-1},0).wait(1).to({x:412.5},0).wait(1).to({rotation:-1.3},0).wait(1).to({y:190.7},0).wait(1).to({rotation:-1.5,y:190.6},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.8,x:412.6},0).wait(1).to({rotation:-2,x:412.5},0).wait(1).to({x:412.6},0).wait(1).to({rotation:-2.3,x:412.5},0).wait(2).to({rotation:-2.5},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-3},0).wait(2).to({rotation:-3.3,y:190.7},0).wait(1).to({y:190.6},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.8},0).wait(2).to({rotation:-4},0).wait(2).to({rotation:-4.3,x:412.6},0).wait(2).to({rotation:-4.5,x:412.5},0).wait(1).to({rotation:-4.8,y:190.7},0).wait(1).to({y:190.6},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-5.1,x:412.6},0).wait(1).to({rotation:-5.3,x:412.5},0).wait(2).to({rotation:-5.5},0).wait(1).to({rotation:-5.8},0).wait(2).to({rotation:-6,y:190.7},0).wait(1).to({rotation:-6.1,y:190.6},0).to({_off:true},1).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.1,0,971.4,847.3);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r11.png
	this.instance_1 = new lib.元件10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.5,170.2,1,1,0,0,0,121.5,153.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:153.3,y:170.3},0).wait(2).to({regX:121.6,rotation:-0.3,x:299.6},0).wait(1).to({y:170.4},0).wait(1).to({regX:121.5,x:299.5,y:170.3},0).wait(1).to({regX:121.6,rotation:-0.5,x:299.6},0).wait(1).to({regY:153.2,y:170.2},0).wait(1).to({y:170.3},0).wait(1).to({regX:121.5,regY:153.3,rotation:-0.8,x:299.5},0).wait(2).to({regY:153.2,y:170.2},0).wait(1).to({regX:121.6,rotation:-1,x:299.6},0).wait(2).to({y:170.3},0).wait(1).to({regX:121.5,rotation:-1.3,x:299.5},0).wait(1).to({regX:121.6,regY:153.3,x:299.6},0).wait(2).to({regX:121.5,regY:153.2,rotation:-1.5,x:299.5,y:170.2},0).wait(1).to({regX:121.6,x:299.7},0).wait(1).to({x:299.6},0).wait(1).to({regY:153.3,rotation:-1.8,x:299.7,y:170.3},0).wait(1).to({regX:121.5,regY:153.2,x:299.6,y:170.2},0).wait(1).to({x:299.5},0).wait(1).to({regX:121.6,rotation:-2,x:299.6,y:170.3},0).wait(1).to({y:170.2},0).wait(1).to({regX:121.5,x:299.5},0).wait(2).to({regY:153.3,y:170.3},0).wait(1).to({regY:153.2,rotation:-1.8,y:170.2},0).wait(1).to({regY:153.3,x:299.6,y:170.3},0).wait(1).to({regX:121.6,regY:153.2,y:170.2},0).wait(1).to({rotation:-1.7,y:170.3},0).wait(1).to({rotation:-1.5,y:170.2},0).wait(1).to({x:299.7},0).wait(1).to({regX:121.5,x:299.6,y:170.3},0).wait(1).to({regY:153.3,rotation:-1.3,x:299.5},0).wait(1).to({regY:153.2},0).wait(1).to({regY:153.3},0).wait(1).to({regX:121.6,regY:153.2,rotation:-1.1,x:299.6,y:170.2},0).wait(1).to({rotation:-1},0).wait(1).to({_off:true},1).wait(15));

	// r9.png
	this.instance_2 = new lib.元件11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.9,247.2,1,1,0,0,0,71.9,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:72,regY:1.3,rotation:-0.6,x:87.6,y:247.9},0).wait(1).to({regX:71.9,regY:1.2,rotation:-1.3,x:88.1,y:248.4},0).wait(1).to({regX:72,rotation:-2,x:88.7,y:249},0).wait(1).to({rotation:-2.8,x:89.2,y:249.6},0).wait(1).to({regX:71.9,regY:1.3,rotation:-3.5,x:89.7,y:250.3},0).wait(1).to({regX:72,rotation:-4.3,x:90.3,y:250.9},0).wait(1).to({regX:71.9,regY:1.2,rotation:-5,x:90.8,y:251.4},0).wait(1).to({regX:72,rotation:-5.8,x:91.4,y:252},0).wait(1).to({regY:1.3,rotation:-6.5,x:92,y:252.7},0).wait(1).to({regX:71.9,regY:1.2,rotation:-7.3,x:92.5,y:253.2},0).wait(1).to({regY:1.3,rotation:-8,x:93,y:253.9},0).wait(1).to({regX:72,regY:1.2,rotation:-8.8,x:93.7,y:254.4},0).wait(1).to({regX:71.9,scaleX:1,scaleY:1,rotation:-9.5,x:94.1,y:255.1},0).wait(1).to({regX:72,scaleX:1,scaleY:1,rotation:-10.3,x:94.7,y:255.7},0).wait(1).to({regX:71.9,scaleX:1,scaleY:1,rotation:-10.8,x:95.3,y:256.2},0).wait(1).to({regY:1.3,rotation:-11.6,x:95.8,y:256.9},0).wait(1).to({rotation:-12.3,x:96.4,y:257.5},0).wait(1).to({rotation:-13.1,x:97,y:258.1},0).wait(1).to({rotation:-13.8,x:97.5,y:258.7},0).wait(1).to({rotation:-14.5,x:98.1,y:259.3},0).wait(1).to({regX:72,rotation:-15.3,x:98.7,y:259.9},0).wait(1).to({regY:1.2,rotation:-16,x:99.2,y:260.4},0).wait(1).to({rotation:-16.8,x:99.7,y:261},0).wait(1).to({regY:1.3,rotation:-17.5,x:100.3,y:261.7},0).wait(1).to({rotation:-18.3,x:100.9,y:262.3},0).wait(1).to({regX:71.9,rotation:-19,x:101.4,y:263},0).wait(1).to({rotation:-18.3,x:100.9,y:262.4},0).wait(1).to({regX:72,regY:1.2,rotation:-17.8,x:100.4,y:261.8},0).wait(1).to({regX:71.9,rotation:-17.1,x:99.9,y:261.2},0).wait(1).to({regX:72,regY:1.3,rotation:-16.5,x:99.5,y:260.8},0).wait(1).to({regX:71.9,regY:1.2,rotation:-15.8,x:98.9,y:260.2},0).wait(1).to({regX:72,regY:1.3,rotation:-15.1,x:98.6,y:259.7},0).wait(1).to({regX:71.9,regY:1.2,rotation:-14.5,x:98,y:259.2},0).wait(1).to({rotation:-13.8,x:97.5,y:258.6},0).wait(1).to({rotation:-13.3,x:97.1,y:258.1},0).wait(1).to({rotation:-12.6,x:96.5,y:257.6},0).wait(1).to({regX:72,rotation:-12,x:96.2,y:257},0).wait(1).to({regX:71.9,regY:1.3,rotation:-11.3,x:95.6,y:256.6},0).wait(1).to({rotation:-10.8,x:95.1,y:256.2},0).wait(1).to({regX:72,regY:1.2,rotation:-10,x:94.7,y:255.5},0).wait(1).to({regX:71.9,rotation:-9.5,x:94.1,y:255.1},0).to({_off:true},1).wait(15));

	// r4.png
	this.instance_3 = new lib.元件12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(417.3,537.3,1,1,0,0,0,286.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:418.3,y:536.2},0).wait(1).to({regX:286.4,rotation:0.3,x:419.4,y:534.9},0).wait(1).to({regX:286.3,rotation:0.5,x:420.3,y:533.8},0).wait(1).to({regX:286.4,rotation:0.8,x:421.4,y:532.6},0).wait(1).to({x:422.4,y:531.5},0).wait(1).to({regX:286.3,rotation:1,x:423.3,y:530.3},0).wait(1).to({rotation:1.3,x:424.3,y:529.1},0).wait(1).to({regX:286.4,rotation:1.5,x:425.4,y:527.9},0).wait(1).to({regX:286.3,rotation:1.8,x:426.3,y:526.7},0).wait(1).to({regX:286.4,x:427.5,y:525.6},0).wait(1).to({regX:286.3,rotation:2,x:428.4,y:524.4},0).wait(1).to({rotation:2.3,x:429.4,y:523.2},0).wait(1).to({regX:286.4,rotation:2.5,x:430.5,y:522.1},0).wait(1).to({regX:286.3,rotation:2.8,x:431.3,y:520.9},0).wait(1).to({regX:286.4,x:432.5,y:519.7},0).wait(1).to({rotation:3,x:433.5,y:518.5},0).wait(1).to({rotation:3.3,x:434.5,y:517.3},0).wait(1).to({rotation:3.5,x:435.5,y:516.2},0).wait(1).to({regX:286.3,rotation:3.7,x:436.4,y:515},0).wait(1).to({regX:286.4,rotation:3.8,x:437.5,y:513.8},0).wait(1).to({regX:286.3,rotation:4,x:438.4,y:512.5},0).wait(1).to({regX:286.4,rotation:4.3,x:439.5,y:511.4},0).wait(1).to({regX:286.3,rotation:4.5,x:440.4,y:510.2},0).wait(1).to({regX:286.4,rotation:4.6,x:441.4,y:509.1},0).wait(1).to({regX:286.3,rotation:4.8,x:442.4,y:507.9},0).wait(1).to({regX:286.4,rotation:5,x:443.5,y:506.7},0).wait(1).to({regX:286.3,rotation:4.8,x:442.5,y:507.7},0).wait(1).to({x:441.7,y:508.7},0).wait(1).to({rotation:4.5,x:440.8,y:509.8},0).wait(1).to({rotation:4.3,x:439.9,y:510.8},0).wait(1).to({x:439.1,y:511.8},0).wait(1).to({rotation:4,x:438.2,y:512.8},0).wait(1).to({rotation:3.8,x:437.3,y:513.9},0).wait(1).to({x:436.4,y:514.9},0).wait(1).to({regX:286.4,rotation:3.5,x:435.7,y:515.9},0).wait(1).to({regY:11.2,rotation:3.3,x:434.8,y:516.9},0).wait(1).to({regY:11.3,rotation:3.2,x:433.9,y:518},0).wait(1).to({rotation:3,x:433.1,y:519},0).wait(1).to({rotation:2.8,x:432.2,y:520},0).wait(1).to({regX:286.3,rotation:2.6,x:431.2,y:521},0).wait(1).to({regX:286.4,rotation:2.5,x:430.5,y:522.1},0).to({_off:true},1).wait(15));

	// r1.png
	this.instance_4 = new lib.元件13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(291,230,1,1,0,0,0,113,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:true},1).wait(15));

	// r10.png
	this.instance_5 = new lib.元件14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.2,150,1,1,0,0,0,138.2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.5,y:150.1},0).wait(1).to({regX:138.1,rotation:-0.8,y:150},0).wait(1).to({regX:138.2,rotation:-1.1},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.8,y:150.1},0).wait(1).to({rotation:-2,y:150},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-4.3,y:150.1},0).wait(1).to({rotation:-4.5,y:150},0).wait(1).to({rotation:-4.8,x:206.3},0).wait(1).to({rotation:-5.1,x:206.2,y:150.1},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.8,y:150},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-6.3},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-7.3,x:206.3},0).wait(1).to({regX:138.3,rotation:-7.5},0).wait(1).to({regX:138.2,rotation:-7.8,x:206.2},0).wait(1).to({rotation:-7.6,x:206.3},0).wait(1).to({rotation:-7.3,x:206.2},0).wait(1).to({rotation:-7,x:206.3},0).wait(1).to({rotation:-6.8,x:206.2},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-6.3},0).wait(1).to({rotation:-6,y:150.1},0).wait(1).to({rotation:-5.8,y:150},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5,y:150.1},0).wait(1).to({rotation:-4.8,x:206.3},0).wait(1).to({rotation:-4.5,x:206.2,y:150},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-3.8},0).to({_off:true},1).wait(15));

	// r8.png
	this.instance_6 = new lib.元件15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(365.7,100.8,1,1,0,0,0,1.7,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.5},0).wait(1).to({regX:1.8,rotation:1,x:365.8},0).wait(1).to({rotation:1.3},0).wait(1).to({rotation:1.5,y:100.9},0).wait(1).to({rotation:2,y:100.8},0).wait(1).to({regX:1.7,rotation:2.3,x:365.7},0).wait(1).to({regX:1.8,rotation:2.5,x:365.8},0).wait(1).to({rotation:3},0).wait(1).to({rotation:3.3},0).wait(1).to({rotation:3.5},0).wait(1).to({regX:1.7,rotation:4,x:365.7},0).wait(1).to({regX:1.8,rotation:4.3,x:365.8},0).wait(1).to({regX:1.7,rotation:4.5,x:365.7},0).wait(1).to({rotation:5},0).wait(1).to({regX:1.8,rotation:5.3,x:365.8,y:100.9},0).wait(1).to({regX:1.7,rotation:5.5,x:365.7,y:100.8},0).wait(1).to({rotation:6},0).wait(1).to({regY:24.7,rotation:6.3},0).wait(1).to({regX:1.8,regY:24.8,rotation:6.5,x:365.8,y:100.9},0).wait(1).to({regX:1.7,rotation:7,y:100.8},0).wait(1).to({regX:1.8,rotation:7.3,y:100.9},0).wait(1).to({regX:1.7,rotation:7.6,y:100.8},0).wait(1).to({rotation:8,x:365.7},0).wait(1).to({regX:1.8,rotation:8.3,x:365.8,y:100.9},0).wait(1).to({regX:1.7,rotation:8.6,x:365.7,y:100.8},0).wait(1).to({regX:1.8,rotation:8.3,x:365.9},0).wait(1).to({regY:24.7,rotation:8,x:365.8},0).wait(1).to({regY:24.8,rotation:7.8},0).wait(1).to({rotation:7.5,y:100.9},0).wait(1).to({rotation:7.1,y:100.8},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:6.5},0).wait(1).to({regX:1.7,rotation:6.3,x:365.7},0).wait(1).to({regX:1.8,rotation:6,x:365.8},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:5.1},0).wait(1).to({regX:1.7,rotation:4.8,x:365.7},0).wait(1).to({rotation:4.5,x:365.8},0).wait(1).to({regX:1.8,rotation:4.3},0).to({_off:true},1).wait(15));

	// r7.png
	this.instance_7 = new lib.元件16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(444,134,1,1,0,0,0,83,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:58.1,rotation:0.3,x:443.8,y:134.5},0).wait(1).to({rotation:0.5,x:443.6,y:135},0).wait(1).to({rotation:1,x:443.5,y:135.4},0).wait(1).to({rotation:1.3,x:443.1,y:135.9},0).wait(1).to({rotation:1.5,x:443,y:136.3},0).wait(1).to({regY:58,rotation:2,x:442.8,y:136.6},0).wait(1).to({regY:58.1,rotation:2.3,x:442.5,y:137.2},0).wait(1).to({rotation:2.5,x:442.3,y:137.7},0).wait(1).to({rotation:3,x:442.1,y:138},0).wait(1).to({regY:58,rotation:3.3,x:441.9,y:138.5},0).wait(1).to({regY:58.1,rotation:3.5,x:441.6,y:139},0).wait(1).to({rotation:4,x:441.5,y:139.4},0).wait(1).to({rotation:4.3,x:441.2,y:139.8},0).wait(1).to({regX:83.1,rotation:4.5,x:441.1,y:140.3},0).wait(1).to({regX:83,regY:58,rotation:5,x:440.8,y:140.6},0).wait(1).to({regY:58.1,rotation:5.3,x:440.6,y:141.2},0).wait(1).to({regY:58,rotation:5.5,x:440.4,y:141.5},0).wait(1).to({rotation:6,x:440.2,y:142},0).wait(1).to({regY:58.1,rotation:6.3,x:439.9,y:142.5},0).wait(1).to({regX:83.1,rotation:6.5,x:439.8,y:142.9},0).wait(1).to({regX:83,rotation:7,x:439.5,y:143.3},0).wait(1).to({regY:58,rotation:7.3,x:439.3,y:143.7},0).wait(1).to({rotation:7.6,x:439.1,y:144.1},0).wait(1).to({regY:58.1,rotation:8,x:438.8,y:144.6},0).wait(1).to({rotation:8.3,x:438.7,y:145.1},0).wait(1).to({rotation:8.6,x:438.4,y:145.6},0).wait(1).to({regY:58,rotation:8.3,x:438.7,y:145.1},0).wait(1).to({rotation:8,x:438.8,y:144.7},0).wait(1).to({rotation:7.8,x:439,y:144.3},0).wait(1).to({rotation:7.5,x:439.2,y:143.9},0).wait(1).to({rotation:7.1,x:439.4,y:143.5},0).wait(1).to({rotation:6.8,x:439.6,y:143.2},0).wait(1).to({regY:58.1,rotation:6.5,x:439.8,y:142.9},0).wait(1).to({regY:58,rotation:6.3,x:439.9,y:142.4},0).wait(1).to({rotation:6,x:440.1,y:142},0).wait(1).to({regY:58.1,rotation:5.8,x:440.3,y:141.8},0).wait(1).to({rotation:5.5,x:440.5,y:141.4},0).wait(1).to({rotation:5.1,x:440.7,y:141},0).wait(1).to({rotation:4.8,x:440.9,y:140.6},0).wait(1).to({rotation:4.5,x:441,y:140.2},0).wait(1).to({rotation:4.3,x:441.2,y:139.8},0).to({_off:true},1).wait(15));

	// r6.png
	this.instance_8 = new lib.元件17();
	this.instance_8.parent = this;
	this.instance_8.setTransform(521.7,84.5,1,1,0,0,0,5.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:5.8,regY:4.6,rotation:0.8,x:521.8,y:85.4},0).wait(1).to({regX:5.7,regY:4.5,rotation:1.5,y:86.1},0).wait(1).to({rotation:2.3,x:521.7,y:87},0).wait(1).to({regX:5.8,rotation:3,x:521.8,y:87.7},0).wait(1).to({regY:4.6,rotation:3.8,x:521.9,y:88.7},0).wait(1).to({regY:4.5,rotation:4.5,y:89.3},0).wait(1).to({regX:5.7,rotation:5.3,x:521.8,y:90.2},0).wait(1).to({regY:4.6,rotation:6,x:521.7,y:91},0).wait(1).to({regX:5.8,regY:4.5,rotation:6.8,x:521.9,y:91.8},0).wait(1).to({regY:4.6,rotation:7.6,y:92.6},0).wait(1).to({regY:4.5,rotation:8.3,y:93.4},0).wait(1).to({regX:5.7,regY:4.6,rotation:9.2,x:521.8,y:94.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:10,x:521.9,y:95.1},0).wait(1).to({regY:4.5,rotation:10.8,y:95.7},0).wait(1).to({regY:4.6,rotation:11.5,y:96.7},0).wait(1).to({regX:5.8,regY:4.5,rotation:12.3,x:522,y:97.4},0).wait(1).to({regY:4.6,rotation:13,y:98.3},0).wait(1).to({regX:5.7,rotation:13.8,x:521.9,y:99.1},0).wait(1).to({regX:5.8,regY:4.5,rotation:14.5,x:522,y:99.8},0).wait(1).to({regY:4.6,rotation:15.3,y:100.8},0).wait(1).to({rotation:16.1,y:101.5},0).wait(1).to({regX:5.7,regY:4.5,rotation:16.8,y:102.2},0).wait(1).to({regX:5.8,regY:4.6,rotation:17.6,y:103.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:18.5,y:103.9},0).wait(1).to({regY:4.5,scaleX:1,scaleY:1,rotation:19.3,y:104.7},0).wait(1).to({regX:5.7,regY:4.6,rotation:20,y:105.5},0).wait(1).to({regX:5.8,regY:4.5,rotation:19.3,x:522.1,y:104.8},0).wait(1).to({rotation:18.6,y:104.1},0).wait(1).to({regX:5.7,rotation:18,x:522,y:103.3},0).wait(1).to({regX:5.8,rotation:17.3,x:522.1,y:102.7},0).wait(1).to({rotation:16.6,x:522,y:102},0).wait(1).to({rotation:16,y:101.3},0).wait(1).to({regX:5.7,regY:4.6,rotation:15.3,x:521.9,y:100.7},0).wait(1).to({regX:5.8,regY:4.5,rotation:14.6,x:522,y:99.9},0).wait(1).to({rotation:14,y:99.2},0).wait(1).to({rotation:13.3,y:98.6},0).wait(1).to({rotation:12.6,y:97.8},0).wait(1).to({rotation:12,y:97.1},0).wait(1).to({regX:5.7,rotation:11.3,x:521.9,y:96.4},0).wait(1).to({rotation:10.6,y:95.7},0).wait(1).to({regY:4.6,rotation:10,y:95.1},0).to({_off:true},1).wait(15));

	// r5.png
	this.instance_9 = new lib.元件18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(288.7,571.6,1,1,0,0,0,105.7,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:0.3,y:571.1},0).wait(1).to({rotation:0.5,x:288.6,y:570.5},0).wait(1).to({rotation:0.8,x:288.5,y:569.9},0).wait(1).to({rotation:1,y:569.3},0).wait(1).to({rotation:1.3,x:288.4,y:568.7},0).wait(1).to({rotation:1.6,x:288.3,y:568.1},0).wait(1).to({rotation:2,y:567.5},0).wait(1).to({rotation:2.3,x:288.2,y:566.9},0).wait(1).to({rotation:2.5,y:566.4},0).wait(1).to({rotation:2.8,x:288,y:565.7},0).wait(1).to({rotation:3,y:565.2},0).wait(1).to({rotation:3.3,x:287.9,y:564.5},0).wait(1).to({rotation:3.6,x:287.8,y:563.9},0).wait(1).to({rotation:4,y:563.4},0).wait(1).to({rotation:4.3,x:287.7,y:562.8},0).wait(1).to({rotation:4.5,x:287.6,y:562.2},0).wait(1).to({rotation:4.8,x:287.5,y:561.6},0).wait(1).to({rotation:5,x:287.4,y:561},0).wait(1).to({rotation:5.3,y:560.4},0).wait(1).to({rotation:5.6,x:287.3,y:559.9},0).wait(1).to({rotation:6,y:559.2},0).wait(1).to({rotation:6.3,x:287.2,y:558.6},0).wait(1).to({rotation:6.5,x:287.1,y:558},0).wait(1).to({rotation:6.8,x:287,y:557.5},0).wait(1).to({rotation:7,x:286.9,y:556.8},0).wait(1).to({rotation:7.3,y:556.2},0).wait(1).to({rotation:7.1,x:287,y:556.7},0).wait(1).to({rotation:6.8,y:557.3},0).wait(1).to({rotation:6.6,x:287.1,y:557.8},0).wait(1).to({rotation:6.3,y:558.3},0).wait(1).to({regY:43.5,rotation:6.1,x:287.2,y:558.8},0).wait(1).to({regY:43.6,rotation:5.8,y:559.4},0).wait(1).to({rotation:5.6,x:287.3,y:559.8},0).wait(1).to({rotation:5.3,y:560.4},0).wait(1).to({regY:43.5,rotation:5.1,x:287.4,y:560.8},0).wait(1).to({regY:43.6,rotation:4.8,x:287.5,y:561.4},0).wait(1).to({rotation:4.6,x:287.6,y:561.9},0).wait(1).to({rotation:4.3,y:562.4},0).wait(1).to({rotation:4.1,x:287.7,y:562.9},0).wait(1).to({rotation:3.8,x:287.8,y:563.4},0).wait(1).to({rotation:3.6,y:563.9},0).to({_off:true},1).wait(15));

	// r3.png
	this.instance_10 = new lib.元件19();
	this.instance_10.parent = this;
	this.instance_10.setTransform(230.9,359.3,1,1,0,0,0,15.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:16,rotation:-0.3,x:231},0).wait(1).to({rotation:-0.5,x:231.1},0).wait(1).to({regX:15.9,rotation:-1,x:231,y:359.4},0).wait(1).to({rotation:-1.3},0).wait(1).to({regX:16,rotation:-1.8,x:231.1},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-2.3,x:231.2},0).wait(1).to({regX:15.9,rotation:-2.8,y:359.5},0).wait(1).to({regX:16,rotation:-3},0).wait(1).to({regX:15.9,rotation:-3.5,x:231.3,y:359.6},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-4.1,y:359.5},0).wait(1).to({rotation:-4.5,y:359.6},0).wait(1).to({regX:16,rotation:-4.8,x:231.5,y:359.5},0).wait(1).to({rotation:-5.3,y:359.7},0).wait(1).to({rotation:-5.5,y:359.6},0).wait(1).to({regX:15.9,rotation:-6,y:359.7},0).wait(1).to({regX:16,rotation:-6.3,x:231.6},0).wait(1).to({regX:15.9,rotation:-6.6},0).wait(1).to({rotation:-7,x:231.5},0).wait(1).to({regX:16,rotation:-7.3,x:231.6},0).wait(1).to({rotation:-7.8,x:231.7,y:359.8},0).wait(1).to({rotation:-8,x:231.8},0).wait(1).to({regX:15.9,rotation:-8.3,x:231.7},0).wait(1).to({rotation:-8.8},0).wait(1).to({rotation:-9.1,x:231.8,y:359.9},0).wait(1).to({regX:15.8,rotation:-8.8,x:231.6,y:359.8},0).wait(1).to({regX:15.9,rotation:-8.5,x:231.7},0).wait(1).to({regX:16,rotation:-8.3,x:231.8},0).wait(1).to({regX:15.9,rotation:-7.8,x:231.7},0).wait(1).to({regX:16,rotation:-7.5},0).wait(1).to({rotation:-7.3,x:231.6,y:359.7},0).wait(1).to({regX:15.9,rotation:-7},0).wait(1).to({regX:16,rotation:-6.6,x:231.7},0).wait(1).to({regX:15.9,rotation:-6.3,x:231.5},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-5.8,x:231.4,y:359.6},0).wait(1).to({rotation:-5.5},0).wait(1).to({regX:16,rotation:-5.1,x:231.5},0).wait(1).to({rotation:-4.8,y:359.5},0).wait(1).to({regX:15.9,rotation:-4.5,x:231.3,y:359.6},0).to({_off:true},1).wait(15));

	// r2.png
	this.instance_11 = new lib.元件20();
	this.instance_11.parent = this;
	this.instance_11.setTransform(345.9,389,1,1,0,0,0,27.9,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.5,x:346,y:389.1},0).wait(1).to({rotation:1.8,x:345.9},0).wait(1).to({rotation:2.3,y:389},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:3},0).wait(1).to({rotation:3.5},0).wait(1).to({rotation:3.8,x:346},0).wait(1).to({rotation:4.3,x:345.9},0).wait(1).to({rotation:4.6,x:346},0).wait(1).to({rotation:5,x:345.9,y:389.1},0).wait(1).to({rotation:5.3},0).wait(1).to({rotation:5.8,y:389},0).wait(1).to({rotation:6.3,y:389.1},0).wait(1).to({rotation:6.5,x:346},0).wait(1).to({rotation:7,x:345.9,y:389},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:7.8,x:346},0).wait(1).to({rotation:8.1,x:345.9},0).wait(1).to({rotation:8.5,x:346},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,x:345.9},0).wait(1).to({rotation:9.3,y:389.1},0).wait(1).to({rotation:9.8,x:346,y:389},0).wait(1).to({rotation:10.1,x:345.9},0).wait(1).to({rotation:9.8,x:346},0).wait(1).to({rotation:9.5,x:345.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,y:389.1},0).wait(1).to({rotation:8.8,y:389},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:8},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:7},0).wait(1).to({rotation:6.8,y:389.1},0).wait(1).to({rotation:6.3,y:389},0).wait(1).to({rotation:6,y:389.1},0).wait(1).to({rotation:5.8,y:389},0).wait(1).to({rotation:5.3,y:389.1},0).wait(1).to({rotation:5},0).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,17,654,747);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// n2.png
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(267.5,135.3,1,1,0,0,0,62.5,135.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:135.4},0).wait(2).to({rotation:0.1},0).wait(1).to({rotation:0.3},0).wait(4).to({rotation:0.5},0).wait(3).to({regX:62.6,rotation:0.6,x:267.6},0).wait(1).to({regX:62.5,rotation:0.8,x:267.5},0).wait(3).to({regY:135.4,x:267.6,y:135.5},0).wait(1).to({regY:135.3,rotation:1,y:135.3},0).wait(1).to({x:267.5},0).wait(1).to({x:267.6,y:135.4},0).wait(1).to({rotation:1.1,x:267.5,y:135.3},0).wait(1).to({rotation:1.3,y:135.4},0).wait(1).to({x:267.6},0).wait(1).to({x:267.5},0).wait(2).to({rotation:1.5},0).wait(3).to({rotation:1.6},0).wait(1).to({rotation:1.8},0).wait(3).to({y:135.3},0).wait(1).to({rotation:2,y:135.4},0).wait(3).to({rotation:2.1},0).wait(1).to({rotation:2.3,y:135.3},0).wait(1).to({y:135.4},0).wait(1).to({x:267.6},0).wait(1).to({x:267.5},0).wait(1).to({y:135.3},0).wait(1).to({rotation:2.1,y:135.4},0).to({_off:true},1).wait(35));

	// n9.png
	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(213.8,219.3,1,1,0,0,0,127.8,133.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:true},1).wait(35));

	// n8.png
	this.instance_3 = new lib.元件3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(361.3,259,1,1,0,0,0,3.3,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:3.4,rotation:-0.3,x:361.1},0).wait(1).to({regY:23.1,rotation:-0.5,x:360.7,y:259.2},0).wait(1).to({regX:3.3,regY:23,rotation:-0.8,x:360.2,y:259.1},0).wait(1).to({regY:23.1,rotation:-1,x:359.9,y:259.3},0).wait(1).to({regX:3.4,rotation:-1.3,x:359.6},0).wait(1).to({rotation:-1.5,x:359.2,y:259.4},0).wait(1).to({rotation:-1.8,x:358.9},0).wait(1).to({regY:23,rotation:-2,x:358.5},0).wait(1).to({regX:3.3,rotation:-2.3,x:358},0).wait(1).to({regX:3.4,rotation:-2.5,x:357.8},0).wait(1).to({regX:3.3,rotation:-2.8,x:357.3,y:259.5},0).wait(1).to({regX:3.4,regY:23.1,rotation:-3,x:357,y:259.6},0).wait(1).to({rotation:-3.3,x:356.6},0).wait(1).to({rotation:-3.5,x:356.2,y:259.7},0).wait(1).to({rotation:-3.8,x:355.9},0).wait(1).to({regX:3.3,regY:23,rotation:-4,x:355.4},0).wait(1).to({rotation:-4.3,x:355.1,y:259.8},0).wait(1).to({regX:3.4,regY:23.1,rotation:-4.5,x:354.8,y:259.9},0).wait(1).to({regX:3.3,rotation:-4.8,x:354.3},0).wait(1).to({rotation:-5,x:354},0).wait(1).to({regX:3.4,rotation:-5.3,x:353.7,y:260},0).wait(1).to({regX:3.3,regY:23,rotation:-5.5,x:353.2},0).wait(1).to({regX:3.4,rotation:-5.8,x:353},0).wait(1).to({regX:3.3,regY:23.1,rotation:-6,x:352.5,y:260.1},0).wait(1).to({regY:23,rotation:-6.3,x:352.2},0).wait(1).to({regY:23.1,rotation:-6.5,x:351.8,y:260.2},0).wait(1).to({regX:3.4,rotation:-6.8,x:351.4},0).wait(1).to({regX:3.3,rotation:-7,x:351,y:260.3},0).wait(1).to({regY:23,rotation:-7.3,x:350.6,y:260.2},0).wait(1).to({regY:23.1,rotation:-7.5,x:350.3,y:260.4},0).wait(1).to({regY:23,rotation:-7.8,x:349.9,y:260.3},0).wait(1).to({regY:23.1,rotation:-8,x:349.5,y:260.5},0).wait(1).to({rotation:-8.3,x:349.2,y:260.4},0).wait(1).to({regX:3.4,regY:23,rotation:-8.5,x:348.9},0).wait(1).to({regY:23.1,rotation:-8.8,x:348.5,y:260.6},0).wait(1).to({regY:23,rotation:-9,x:348.2,y:260.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.3,x:347.7,y:260.6},0).wait(1).to({regY:23.1,rotation:-9.5,x:347.4,y:260.7},0).wait(1).to({regY:23,rotation:-9.8,x:347,y:260.6},0).wait(1).to({regY:23.1,rotation:-9.5,x:347.4,y:260.7},0).wait(1).to({regY:23,rotation:-9.3,x:347.8,y:260.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9,x:348.2,y:260.5},0).to({_off:true},1).wait(35));

	// n7.png
	this.instance_4 = new lib.元件4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(332.6,125.3,1,1,0,0,0,17.6,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:8.4,y:125.4},0).wait(1).to({regX:17.7,rotation:0.3,x:332.7},0).wait(1).to({regX:17.6,regY:8.3,rotation:0.5,x:332.6,y:125.3},0).wait(1).to({regY:8.4,y:125.4},0).wait(1).to({rotation:0.8},0).wait(1).to({regX:17.7,regY:8.3,rotation:1,x:332.7,y:125.3},0).wait(1).to({regX:17.6,regY:8.4,rotation:1.1,x:332.6,y:125.4},0).wait(1).to({regX:17.7,rotation:1.3,x:332.7},0).wait(1).to({rotation:1.5,x:332.8},0).wait(1).to({rotation:1.6,x:332.7},0).wait(1).to({regX:17.6,rotation:1.8},0).wait(1).to({rotation:2},0).wait(1).to({regY:8.3,rotation:2.1},0).wait(1).to({regX:17.7,regY:8.4,rotation:2.3},0).wait(1).to({regY:8.3,rotation:2.5,x:332.8},0).wait(1).to({regX:17.6,rotation:2.6,x:332.7,y:125.3},0).wait(1).to({regX:17.7,regY:8.4,rotation:2.8,x:332.8,y:125.4},0).wait(1).to({rotation:3,x:332.7,y:125.5},0).wait(1).to({regY:8.3,rotation:3.3,y:125.4},0).wait(1).to({y:125.3},0).wait(1).to({regY:8.4,rotation:3.5,y:125.5},0).wait(1).to({regY:8.3,rotation:3.8,y:125.3},0).wait(1).to({regY:8.4,y:125.4},0).wait(1).to({rotation:4,y:125.5},0).wait(1).to({regX:17.6,regY:8.3,rotation:4.3,y:125.3},0).wait(1).to({regX:17.7,x:332.8},0).wait(1).to({regX:17.6,rotation:4.5,x:332.6},0).wait(1).to({regY:8.4,rotation:4.8,x:332.7,y:125.4},0).wait(1).to({regX:17.7,regY:8.3},0).wait(1).to({regX:17.6,regY:8.4,rotation:5,x:332.6},0).wait(1).to({regX:17.7,rotation:5.3,x:332.7},0).wait(1).to({regX:17.6,regY:8.3,x:332.6,y:125.3},0).wait(1).to({regX:17.7,regY:8.4,rotation:5.5,x:332.7,y:125.4},0).wait(1).to({regY:8.3,rotation:5.8},0).wait(1).to({rotation:6},0).wait(1).to({regY:8.4},0).wait(1).to({rotation:6.3,x:332.8},0).wait(1).to({rotation:6.5,x:332.7},0).wait(1).to({rotation:6.6},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:6.3,x:332.8},0).wait(1).to({regY:8.3,rotation:6,y:125.3},0).to({_off:true},1).wait(35));

	// n6.png
	this.instance_5 = new lib.元件5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(285.8,486.9,1,1,0,0,0,223.8,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:286.4,y:486.6},0).wait(1).to({rotation:0.3,x:287,y:486.2},0).wait(1).to({x:287.5,y:485.8},0).wait(1).to({rotation:0.5,x:288.1,y:485.5},0).wait(1).to({x:288.7,y:485.1},0).wait(1).to({rotation:0.8,x:289.3,y:484.7},0).wait(1).to({x:289.9,y:484.4},0).wait(1).to({rotation:1,x:290.4,y:484},0).wait(1).to({rotation:1.1,x:291.1,y:483.6},0).wait(1).to({rotation:1.3,x:291.5,y:483.2},0).wait(1).to({rotation:1.5,x:292.2,y:482.9},0).wait(1).to({x:292.8,y:482.5},0).wait(1).to({rotation:1.8,x:293.3,y:482.1},0).wait(1).to({x:293.9,y:481.7},0).wait(1).to({rotation:2,x:294.5,y:481.4},0).wait(1).to({rotation:2.1,x:295.1,y:481},0).wait(1).to({rotation:2.3,x:295.7,y:480.6},0).wait(1).to({regX:223.9,x:296.3,y:480.2},0).wait(1).to({regX:223.8,rotation:2.5,x:296.8,y:479.8},0).wait(1).to({rotation:2.8,x:297.4,y:479.5},0).wait(1).to({x:298,y:479},0).wait(1).to({rotation:3,x:298.5,y:478.7},0).wait(1).to({x:299.2,y:478.3},0).wait(1).to({rotation:3.3,x:299.7,y:477.9},0).wait(1).to({x:300.3,y:477.6},0).wait(1).to({rotation:3.5,x:300.9,y:477.2},0).wait(1).to({rotation:3.6,x:301.4,y:476.8},0).wait(1).to({rotation:3.8,x:302,y:476.5},0).wait(1).to({rotation:4,x:302.6,y:476.1},0).wait(1).to({x:303.2,y:475.8},0).wait(1).to({regX:223.9,rotation:4.3,x:303.9,y:475.4},0).wait(1).to({regX:223.8,x:304.3,y:475},0).wait(1).to({rotation:4.5,x:304.9,y:474.6},0).wait(1).to({rotation:4.6,x:305.6,y:474.2},0).wait(1).to({rotation:4.8,x:306.1,y:473.8},0).wait(1).to({x:306.7,y:473.4},0).wait(1).to({rotation:5,x:307.2,y:473.1},0).wait(1).to({rotation:5.3,x:307.8,y:472.7},0).wait(1).to({regY:23,x:308.5,y:472.4},0).wait(1).to({regY:22.9,x:307.8,y:472.7},0).wait(1).to({rotation:5,x:307.2,y:473.1},0).wait(1).to({rotation:4.8,x:306.6,y:473.5},0).to({_off:true},1).wait(35));

	// n5.png
	this.instance_6 = new lib.元件6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(172.1,288.5,1,1,0,0,0,13.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({rotation:-0.3,x:172.2},0).wait(1).to({regY:5.6,rotation:-0.5,x:172.1,y:288.6},0).wait(1).to({regY:5.7,rotation:-0.6,y:288.7},0).wait(1).to({regY:5.6,rotation:-0.8},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.1,x:172},0).wait(1).to({regY:5.5,rotation:-1.3,y:288.6},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.8,x:171.9},0).wait(1).to({x:172,y:288.7},0).wait(1).to({regY:5.6,rotation:-2,y:288.8},0).wait(1).to({regY:5.5,rotation:-2.3,y:288.7},0).wait(1).to({regY:5.6,y:288.8},0).wait(1).to({regY:5.5,rotation:-2.5,x:171.9,y:288.7},0).wait(1).to({rotation:-2.8},0).wait(1).to({regX:13.2,rotation:-3,x:172},0).wait(1).to({regX:13,regY:5.6,rotation:-3.1,x:171.8,y:288.9},0).wait(1).to({regX:13.1,regY:5.5,rotation:-3.3,x:171.9,y:288.8},0).wait(1).to({rotation:-3.5,x:171.8},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.8,y:288.9},0).wait(1).to({rotation:-4},0).wait(1).to({regY:5.7,rotation:-4.3,x:171.7,y:289},0).wait(1).to({regY:5.5,y:288.9},0).wait(1).to({rotation:-4.5,x:171.8},0).wait(1).to({rotation:-4.8,x:171.7},0).wait(2).to({regY:5.6,rotation:-5,x:171.8,y:289},0).wait(1).to({regY:5.7,rotation:-5.3,x:171.7,y:289.1},0).wait(1).to({regY:5.6,rotation:-5.5,y:289},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.8,x:171.6,y:289.1},0).wait(1).to({regY:5.5,rotation:-6,y:289},0).wait(1).to({regY:5.6,rotation:-6.1},0).wait(1).to({regY:5.5,rotation:-6.3},0).wait(1).to({rotation:-6.5,x:171.5},0).wait(1).to({regY:5.6,rotation:-6.8,x:171.6,y:289.1},0).wait(1).to({x:171.5,y:289.2},0).wait(1).to({x:171.6,y:289.1},0).wait(1).to({regY:5.5,rotation:-6.5,y:289},0).wait(1).to({rotation:-6.3,x:171.5},0).to({_off:true},1).wait(35));

	// n4.png
	this.instance_7 = new lib.元件8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(237.4,310.1,1,1,0,0,0,36.4,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({rotation:-0.3,x:237.5},0).wait(1).to({regY:40.2,x:237.4,y:310.2},0).wait(1).to({rotation:-0.5,y:310.3},0).wait(1).to({regY:40.1,rotation:-0.6,x:237.5,y:310.2},0).wait(1).to({rotation:-0.8,x:237.4},0).wait(1).to({regY:40.2,rotation:-1,y:310.3},0).wait(1).to({x:237.5},0).wait(1).to({regX:36.3,regY:40.1,rotation:-1.3,x:237.4},0).wait(1).to({regX:36.4,regY:40.2},0).wait(1).to({regY:40.1,rotation:-1.5},0).wait(1).to({regY:40.2,rotation:-1.8,x:237.5,y:310.4},0).wait(1).to({regY:40.1,y:310.3},0).wait(1).to({rotation:-2,x:237.4,y:310.2},0).wait(1).to({y:310.3},0).wait(1).to({regY:40.2,rotation:-2.3,y:310.4},0).wait(1).to({regX:36.5,rotation:-2.5,x:237.5},0).wait(1).to({regX:36.4,x:237.4,y:310.5},0).wait(1).to({regY:40.1,rotation:-2.8,y:310.4},0).wait(1).to({regY:40.2,y:310.5},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.5},0).wait(2).to({regY:40.1,rotation:-3.8},0).wait(2).to({rotation:-4},0).wait(1).to({rotation:-4.3},0).wait(1).to({regY:40.2,y:310.6},0).wait(1).to({regY:40.1,rotation:-4.5,y:310.5},0).wait(1).to({regY:40.2,rotation:-4.6,y:310.7},0).wait(1).to({rotation:-4.8},0).wait(1).to({regY:40.1,rotation:-5,y:310.6},0).wait(2).to({regY:40.2,rotation:-5.3,x:237.5,y:310.7},0).wait(2).to({regY:40.1,rotation:-5.5,x:237.4,y:310.6},0).wait(1).to({rotation:-5.6,y:310.7},0).wait(1).to({rotation:-5.5,y:310.6},0).wait(1).to({regY:40.2,rotation:-5.3,x:237.5,y:310.7},0).wait(1).to({regY:40.1,x:237.4,y:310.6},0).to({_off:true},1).wait(35));

	// n3.png
	this.instance_8 = new lib.元件7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(362.3,401.8,1,1,0,0,0,73.3,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:362.5,y:401.5},0).wait(1).to({regX:73.4,rotation:0.3,x:362.8,y:401.2},0).wait(1).to({regX:73.3,rotation:0.5,x:363,y:400.8},0).wait(1).to({regX:73.4,rotation:0.8,x:363.3,y:400.6},0).wait(1).to({regX:73.3,x:363.4,y:400.3},0).wait(1).to({rotation:1,x:363.7,y:400},0).wait(1).to({regX:73.4,regY:5.7,rotation:1.3,x:364,y:399.6},0).wait(1).to({rotation:1.5,x:364.2,y:399.3},0).wait(1).to({regY:5.8,rotation:1.6,x:364.5,y:399},0).wait(1).to({regX:73.3,rotation:1.8,x:364.6,y:398.7},0).wait(1).to({regX:73.4,rotation:2,x:364.9,y:398.4},0).wait(1).to({regX:73.3,rotation:2.3,x:365.1,y:398},0).wait(1).to({regX:73.4,rotation:2.5,x:365.4,y:397.7},0).wait(1).to({rotation:2.6,x:365.6,y:397.4},0).wait(1).to({regX:73.3,rotation:2.8,x:365.7,y:397.1},0).wait(1).to({rotation:3,x:366,y:396.8},0).wait(1).to({rotation:3.3,x:366.2,y:396.4},0).wait(1).to({regX:73.4,x:366.5,y:396.1},0).wait(1).to({regX:73.3,rotation:3.5,x:366.7,y:395.9},0).wait(1).to({rotation:3.8,x:366.9,y:395.5},0).wait(1).to({rotation:4,x:367.1,y:395.2},0).wait(1).to({rotation:4.3,x:367.3,y:394.9},0).wait(1).to({x:367.6,y:394.5},0).wait(1).to({rotation:4.5,x:367.8,y:394.3},0).wait(1).to({rotation:4.8,x:368,y:394},0).wait(1).to({rotation:5,x:368.3,y:393.6},0).wait(1).to({regX:73.4,rotation:5.1,x:368.6,y:393.3},0).wait(1).to({regX:73.3,rotation:5.3,x:368.7,y:392.9},0).wait(1).to({rotation:5.5,x:369,y:392.6},0).wait(1).to({regX:73.4,rotation:5.8,x:369.3,y:392.3},0).wait(1).to({rotation:6,x:369.5,y:392},0).wait(1).to({regX:73.3,rotation:6.1,x:369.6,y:391.7},0).wait(1).to({regX:73.4,rotation:6.3,x:370,y:391.4},0).wait(1).to({regX:73.3,rotation:6.5,x:370.1,y:391.1},0).wait(1).to({regX:73.4,rotation:6.8,x:370.4,y:390.7},0).wait(1).to({x:370.7,y:390.4},0).wait(1).to({regX:73.3,rotation:7,x:370.8,y:390.1},0).wait(1).to({regX:73.4,rotation:7.3,x:371.1,y:389.8},0).wait(1).to({regX:73.3,rotation:7.5,x:371.3,y:389.4},0).wait(1).to({regX:73.4,rotation:7.3,x:371.1,y:389.8},0).wait(1).to({regX:73.3,rotation:7,x:370.8,y:390.1},0).wait(1).to({regX:73.4,rotation:6.8,x:370.6,y:390.4},0).to({_off:true},1).wait(35));

	// n1.png
	this.instance_9 = new lib.元件9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(183.8,124.3,1,1,0,0,0,183.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({rotation:-0.3},0).wait(2).to({rotation:-0.5},0).wait(2).to({rotation:-0.8},0).wait(2).to({rotation:-1},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.3,x:183.9,y:124.4},0).wait(1).to({y:124.3},0).wait(1).to({rotation:-1.5,x:183.8},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-2},0).wait(1).to({y:124.4},0).wait(1).to({rotation:-2.3,y:124.3},0).wait(1).to({x:183.9},0).wait(1).to({rotation:-2.5,x:183.8},0).wait(2).to({rotation:-2.8},0).wait(2).to({rotation:-3,y:124.4},0).wait(1).to({rotation:-3.1,y:124.3},0).wait(1).to({rotation:-3.3},0).wait(2).to({rotation:-3.5},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.8,y:124.4},0).wait(1).to({rotation:-4,y:124.3},0).wait(1).to({x:183.9},0).wait(1).to({rotation:-4.3,x:183.8},0).wait(1).to({x:183.9},0).wait(1).to({rotation:-4.5,x:183.8},0).wait(2).to({rotation:-4.8},0).wait(2).to({rotation:-5},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5},0).wait(1).to({regY:1.4,rotation:-4.8,y:124.4},0).wait(1).to({regY:1.3,y:124.3},0).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,516.6,671.8);


// stage content:
(lib.Kando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3
	this.instance = new lib.元件3_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.2,-310.5,0.592,0.592,0,0,0,500.1,424.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).wait(1).to({regX:543.8,regY:462.5,x:341.6,y:-122.2,startPosition:1},0).wait(1).to({x:342.2,y:43.8,startPosition:2},0).wait(1).to({x:342.7,y:209.9,startPosition:3},0).wait(1).to({x:343.3,y:375.9,startPosition:4},0).wait(1).to({x:343.8,y:541.9,startPosition:5},0).wait(1).to({x:343.9,y:539.9,startPosition:6},0).wait(1).to({x:344,y:537.9,startPosition:7},0).wait(1).to({y:535.9,startPosition:8},0).wait(1).to({x:344.1,y:533.9,startPosition:9},0).wait(1).to({x:344.2,y:531.9,startPosition:10},0).wait(1).to({x:344.3,y:529.9,startPosition:11},0).wait(1).to({x:344.4,y:527.9,startPosition:12},0).wait(1).to({y:525.9,startPosition:13},0).wait(1).to({x:344.5,y:523.9,startPosition:14},0).wait(1).to({x:344.6,y:521.9,startPosition:15},0).wait(1).to({x:344.7,y:519.9,startPosition:16},0).wait(1).to({x:344.8,y:517.9,startPosition:17},0).wait(1).to({y:515.9,startPosition:18},0).wait(1).to({x:344.9,y:513.9,startPosition:19},0).wait(1).to({x:345,y:511.9,startPosition:20},0).wait(1).to({x:345.1,y:509.9,startPosition:21},0).wait(1).to({x:345.2,y:507.9,startPosition:22},0).wait(1).to({y:505.8,startPosition:23},0).wait(1).to({x:345.3,y:503.8,startPosition:24},0).wait(1).to({x:345.4,y:501.8,startPosition:25},0).wait(1).to({x:345.3,y:504.1,startPosition:26},0).wait(1).to({x:345.2,y:506.3,startPosition:27},0).wait(1).to({x:345.1,y:508.5,startPosition:28},0).wait(1).to({x:345,y:510.7,startPosition:29},0).wait(1).to({x:344.9,y:513,startPosition:30},0).wait(1).to({y:515.2,startPosition:31},0).wait(1).to({x:344.8,y:517.4,startPosition:32},0).wait(1).to({x:344.7,y:519.6,startPosition:33},0).wait(1).to({x:344.6,y:521.9,startPosition:34},0).wait(1).to({x:344.5,y:524.1,startPosition:35},0).wait(1).to({x:344.4,y:526.3,startPosition:36},0).wait(1).to({x:344.3,y:528.5,startPosition:37},0).wait(1).to({x:344.2,y:530.8,startPosition:38},0).wait(1).to({x:344.1,y:533,startPosition:39},0).wait(1).to({y:535.2,startPosition:40},0).wait(1).to({x:344,y:537.4,startPosition:41},0).wait(1).to({x:343.9,y:539.7,startPosition:42},0).wait(1).to({x:343.8,y:541.9,startPosition:43},0).wait(1));

	// 2
	this.instance_1 = new lib.元件2_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(335.8,-372.6,0.812,0.812,0,0,0,328.6,373.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regX:342,regY:390,x:348.2,y:-189.5,startPosition:1},0).wait(1).to({x:349.9,y:-19.8,startPosition:2},0).wait(1).to({x:351.5,y:149.8,startPosition:3},0).wait(1).to({x:353.1,y:319.4,startPosition:4},0).wait(1).to({x:354.7,y:489,startPosition:5},0).wait(1).to({x:355,y:486.5,startPosition:6},0).wait(1).to({x:355.3,y:484,startPosition:7},0).wait(1).to({x:355.6,y:481.4,startPosition:8},0).wait(1).to({x:355.9,y:478.9,startPosition:9},0).wait(1).to({x:356.2,y:476.4,startPosition:10},0).wait(1).to({x:356.5,y:473.8,startPosition:11},0).wait(1).to({x:356.8,y:471.3,startPosition:12},0).wait(1).to({x:357.1,y:468.8,startPosition:13},0).wait(1).to({x:357.4,y:466.2,startPosition:14},0).wait(1).to({x:357.7,y:463.7,startPosition:15},0).wait(1).to({x:358,y:461.2,startPosition:16},0).wait(1).to({x:358.3,y:458.6,startPosition:17},0).wait(1).to({x:358.6,y:456.1,startPosition:18},0).wait(1).to({x:358.9,y:453.6,startPosition:19},0).wait(1).to({x:359.2,y:451,startPosition:20},0).wait(1).to({x:358.9,y:453.3,startPosition:21},0).wait(1).to({x:358.7,y:455.5,startPosition:22},0).wait(1).to({x:358.4,y:457.8,startPosition:23},0).wait(1).to({x:358.1,y:460,startPosition:24},0).wait(1).to({x:357.9,y:462.2,startPosition:25},0).wait(1).to({x:357.6,y:464.5,startPosition:26},0).wait(1).to({x:357.4,y:466.7,startPosition:27},0).wait(1).to({x:357.1,y:468.9,startPosition:28},0).wait(1).to({x:356.8,y:471.2,startPosition:29},0).wait(1).to({x:356.6,y:473.4,startPosition:30},0).wait(1).to({x:356.3,y:475.6,startPosition:31},0).wait(1).to({x:356.1,y:477.9,startPosition:32},0).wait(1).to({x:355.8,y:480.1,startPosition:33},0).wait(1).to({x:355.5,y:482.3,startPosition:34},0).wait(1).to({x:355.3,y:484.6,startPosition:35},0).wait(1).to({x:355,y:486.8,startPosition:36},0).wait(1).to({x:354.7,y:489,startPosition:37},0).wait(1).to({x:560.1,startPosition:38},0).wait(1).to({x:765.5,startPosition:39},0).wait(1).to({x:970.9,startPosition:40},0).wait(1).to({startPosition:41},0).to({_off:true},1).wait(43));

	// 1
	this.instance_2 = new lib.元件1_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(324.4,-427.6,1,1,0,0,0,260.4,346.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:258.7,regY:334.7,x:322.7,y:-272.3,startPosition:1},0).wait(1).to({y:-104.9,startPosition:2},0).wait(1).to({y:62.4,startPosition:3},0).wait(1).to({y:229.8,startPosition:4},0).wait(1).to({y:397.1,startPosition:5},0).wait(1).to({y:564.5,startPosition:6},0).wait(1).to({x:322.6,y:561.5,startPosition:7},0).wait(1).to({x:322.4,y:558.5,startPosition:8},0).wait(1).to({x:322.3,y:555.5,startPosition:9},0).wait(1).to({x:322.1,y:552.5,startPosition:10},0).wait(1).to({x:322,y:549.5,startPosition:11},0).wait(1).to({x:321.8,y:546.5,startPosition:12},0).wait(1).to({x:321.7,y:543.5,startPosition:13},0).wait(1).to({x:321.6,y:540.5,startPosition:14},0).wait(1).to({x:321.4,y:537.5,startPosition:15},0).wait(1).to({x:321.3,y:534.5,startPosition:16},0).wait(1).to({x:321.1,y:531.5,startPosition:17},0).wait(1).to({x:321,y:528.5,startPosition:18},0).wait(1).to({x:320.8,y:525.5,startPosition:19},0).wait(1).to({x:320.7,y:522.5,startPosition:20},0).wait(1).to({x:320.8,y:525.3,startPosition:21},0).wait(1).to({x:321,y:528.1,startPosition:22},0).wait(1).to({x:321.1,y:530.9,startPosition:23},0).wait(1).to({x:321.2,y:533.7,startPosition:24},0).wait(1).to({x:321.4,y:536.5,startPosition:25},0).wait(1).to({x:321.5,y:539.3,startPosition:26},0).wait(1).to({x:321.6,y:542.1,startPosition:27},0).wait(1).to({x:321.8,y:544.9,startPosition:28},0).wait(1).to({x:321.9,y:547.7,startPosition:29},0).wait(1).to({x:322,y:550.5,startPosition:30},0).wait(1).to({x:322.2,y:553.3,startPosition:31},0).wait(1).to({x:322.3,y:556.1,startPosition:32},0).wait(1).to({x:322.4,y:558.9,startPosition:33},0).wait(1).to({x:322.6,y:561.7,startPosition:34},0).wait(1).to({x:322.7,y:564.5,startPosition:35},0).wait(1).to({x:428.7,startPosition:36},0).wait(1).to({x:534.8,startPosition:37},0).wait(1).to({x:640.8,startPosition:38},0).wait(1).to({x:746.8,startPosition:39},0).wait(1).to({x:852.8,startPosition:40},0).wait(1).to({x:958.9,startPosition:41},0).wait(1).to({x:1064.9,startPosition:42},0).to({_off:true},1).wait(83));

	// 图层_1
	this.instance_3 = new lib.元件30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(322.4,552,0.111,0.111,0,0,0,311.3,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:311.6,scaleX:0.29,scaleY:0.29},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:322.5},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:322.6},0).wait(1).to({scaleX:1,scaleY:1,x:322.7},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(14).to({scaleY:0.98},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:1.02},0).wait(1).to({scaleY:1.04},0).wait(1).to({scaleY:1.03},0).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.96},0).wait(24).to({scaleY:0.97},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1.02},0).wait(1).to({scaleY:1.03},0).wait(1).to({scaleY:1.02},0).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.96},0).wait(26).to({scaleY:0.97},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:1.03},0).wait(1).to({scaleY:1.04},0).wait(1).to({scaleY:1.06},0).wait(1).to({scaleY:1.04},0).wait(1).to({scaleY:1.02},0).wait(1).to({scaleY:1.01},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:0.96},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(607.9,1053.1,69.1,39.9);
// library properties:
lib.properties = {
	id: 'Kando',
	width: 640,
	height: 1042,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/images-Kando_atlas_.png", id:"Kando_atlas_"},
		{src:"images/images-Kando_atlas_2.png", id:"Kando_atlas_2"},
		{src:"images/images-Kando_atlas_3.png", id:"Kando_atlas_3"}
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
an.compositions['Kando'] = {
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
