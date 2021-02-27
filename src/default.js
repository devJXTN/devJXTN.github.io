updateCopyright();
changeHeight();

window.addEventListener("resize", function(event) {
	var footerH = document.getElementById("footer").style.height;
	var footerH = footerH + 8;
	document.getElementById("container").style.paddingBottom = footerH + "px";
})

function changeHeight(){
	document.getElementById("container").style.paddingBottom = "62px";
}

function updateCopyright(){
	var d = new Date();
	document.getElementById("cpyrght").innerHTML = "© " + d.getFullYear() + " devJXTN";
}

function openApp(){
	window.open("https://play.google.com/store/apps/details?id=com.devjxtn.ltoph");
}