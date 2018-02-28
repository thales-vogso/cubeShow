this.createjs = {};
window.createjs = this.createjs;

//const createjs = require("createjs-preloadjs");
//import * as createjs from "createjs-preloadjs";
require("createjs-preloadjs");

import Uniqlo from '../images/box/Uniqlo.png';
import WirelessFace from '../images/Wireless/face.jpg';
import WirelessSide from '../images/Wireless/side.png';
import DPJFace from '../images/DPJ/face.png';
import DPJSide from '../images/DPJ/side.png';
import AirismFace from '../images/Airism/face.jpg';
import AirismSide from '../images/Airism/side.png';
import DressFace from '../images/Dress/face.jpg';
import DressSide from '../images/Dress/side.png';
import DryEXFace from '../images/DryEX/face.jpg';
import DryEXSide from '../images/DryEX/side.png';
import JeansFace from '../images/Jeans/face.jpg';
import JeansSide from '../images/Jeans/side.png';
import kandoFace from '../images/kando/face.png';
import kandoSide from '../images/kando/side.png';
import KidsFace from '../images/Kids/face.jpg';
import KidsSide from '../images/Kids/side.png';
import UTFace from '../images/UT/face.jpg';
import UTSide from '../images/UT/side.png';

/**
 *	预先加载
 */
var _queue = null;	//loder
var _images = [	//图片组
	{id:"AirismFace", src:AirismFace},
	{id:"AirismSide", src:AirismSide},
	{id:"DressFace", src:DressFace},
	{id:"DressSide", src:DressSide},
	{id:"DryEXFace", src:DryEXFace},
	{id:"DryEXSide", src:DryEXSide},
	{id:"JeansFace", src:JeansFace},
	{id:"JeansSide", src:JeansSide},
	{id:"kandoFace", src:kandoFace},
	{id:"kandoSide", src:kandoSide},
	{id:"KidsFace", src:KidsFace},
	{id:"KidsSide", src:KidsSide},
	{id:"UTFace", src:UTFace},
	{id:"UTSide", src:UTSide},
	{id:"WirelessFace", src:WirelessFace},
	{id:"WirelessSide", src:WirelessSide},
	{id:"DPJFace", src:DPJFace},
	{id:"DPJSide", src:DPJSide},
	{id:"Uniqlo", src:Uniqlo}
];
/**
 *	初始化
*/
var init = function(){
	_queue = new createjs.LoadQueue(false);
	_queue.loadManifest(_images, false);
};
/**
 *	加载
*/
var load = function(progress, complete){
	if(!_queue) init();
	if(progress)_queue.on("progress", progress, this);//资源载入中
	if(complete)_queue.on("complete", complete, this);//资源载入完毕
	_queue.load();
};
/**
 *	获取loader
*/
var getQueue = function(){
	return _queue;
};
/**
 *	获取文件实体
*/
var getResult = function(id){
	return _queue.getResult(id);
};
export {load,getResult};