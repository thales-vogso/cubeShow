import './main.css';
import * as CubeShow from "./cubeShow/main.js";


var _game = null;
var _loading = null;
window.addEventListener('load', function(e){
	CubeShow.Preload.load(progress, complete);
	_loading = document.getElementById("loading");
});
function progress(e){
	_loading.innerHTML = e.loaded;
}
function complete(){
	document.body.removeChild(_loading);
	var game = document.getElementById("game");
	_game = new CubeShow.main(game);
	_game.launch();
}
