import './main.css';
import * as CubeShow from "./cubeShow/main.js";
import * as img from "./cubeShow/imgLoader.js";

var _game = null;
var _loading = null;
window.addEventListener('load', function(e){
	img.load(progress, complete);
	window.img = img;
	_loading = document.getElementById("loading");
	
});
function progress(e){
	console.log("progress", e);
	_loading.innerHTML = e;
}
function complete(){
	document.body.removeChild(_loading);
	var game = document.getElementById("game");
	_game = new CubeShow.main(game);
}
