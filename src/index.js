import './main.css';
import * as CubeShow from "./cubeShow/main.js";
var requireContext = require.context("./images/frame", true, /^\.\/.*\.png$/);
//requireContext.keys().map(requireContext);


let frame = document.createElement("div");
let imgs = requireContext.keys().map(requireContext);
imgs.forEach((src) => {
	let img = new Image();
	img.src = src;
	img.style.width = "100%";
	img.style.display = "none";
	frame.appendChild(img);
});
frame.run = function(){
	console.log(123);
	var index = 0;
	var len = frame.childElementCount;
	var sid = setInterval(() => {
		frame.children[index].style.display = "none";
		index++;
		if(index >= len){
			clearInterval(sid);
			return;
		}
		frame.children[index].style.display = "";
	}, 100);
}

CubeShow.frame = frame;

window.CubeShow = CubeShow;
