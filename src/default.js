updateCopyright();
changeContainerPadding();

window.addEventListener("resize", function(event) {
	changeContainerPadding();
})

function changeContainerPadding(){
	var fH = document.getElementsByClassName("footer").offsetHeight + 32;
	var fHpx = fH + "px";
	document.getElementsByClassName("container").style.paddingBottom = fHpx;
}

function updateCopyright(){
	var d = new Date();
	document.getElementById("cpyrght").innerHTML = "© " + d.getFullYear() + " devJXTN";
}

function openApp(){
	window.open("https://play.google.com/store/apps/details?id=com.devjxtn.ltoph");
}