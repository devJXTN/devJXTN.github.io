updateCopyright();
changeContainerPadding();

window.addEventListener("resize", function(event) {
	changeContainerPadding();
})

function changeContainerPadding(){
	var fH = document.getElementById("footer");
	var fHpx = (fH.clientHeight + 32) + "px";
    
	document.getElementById("container").style.paddingBottom = fHpx;
}

function updateCopyright(){
	var d = new Date();
	document.getElementById("cpyrght").innerHTML = "© " + d.getFullYear() + " devJXTN";
}

function openApp(){
	window.open("https://play.google.com/store/apps/details?id=com.devjxtn.ltoph");
}