import uniqlo from '../images/box/Uniqlo.png';
import WirelessFace from '../images/Wireless/face.jpg';
import WirelessSide from '../images/Wireless/side.png';

var _arr = [uniqlo,WirelessFace,WirelessSide];
var _total = 0;
var _entity = {};
var _progress = null;
var _complete = null;
var _pattern = /(\w+)\/(\w+)\.(png|jpg|gif)/i;
function load(progress, complete){
	_progress = progress;
	_complete = complete;
	_total = _arr.length;
	single();
}
function single(){
	if(_arr.length == 0){
		if(_complete)_complete();
		return;
	}
	let str = _arr.shift();
	let img = new Image();
	img.addEventListener("load", imageLoaded);
	img.src = str;
}
function imageLoaded(e){
	if(_progress)_progress(_arr.length/_total);
	let img = e.target;
	let arr = _pattern.exec(img.src);
	if(arr){
		_entity[arr[2]] = img;
	}
	single();
}
function getImageByID(id){
	return _entity[id];
}
export {getImageByID,load};
