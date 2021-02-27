updateCopyright();
changeContainerPadding();

window.addEventListener("resize", function(event) {
	changeHeight();
})

function changeContainerPadding(){
	var footerH = document.getElementById("footer").style.height;
	footerH = footerH + 8;
	$('.container').css('padding-bottom',footerH + 'px');
}

function updateCopyright(){
	var d = new Date();
	document.getElementById("cpyrght").innerHTML = "© " + d.getFullYear() + " devJXTN";
}

function openApp(){
	window.open("https://play.google.com/store/apps/details?id=com.devjxtn.ltoph");
}