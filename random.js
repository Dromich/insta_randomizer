document.body.style.border = "5px solid red";
var koment = document.getElementsByClassName("gElp9");

function moreComents(init) {
	var init = init;

	var mkoment = document.getElementsByClassName("Z4IfV");

	function eventFire(el, etype) {

		if (el == undefined) {
			console.log("елемент відсутній");
			moreComents('off');
			alert("DONE");
			console.log(koment[22].innerHTML);
		} else {
	
			if (el.fireEvent) {
				el.fireEvent('on' + etype);
			} else {
				var evObj = document.createEvent('MouseEvents');
				evObj.initEvent(etype, true, false);
				var canceled = !el.dispatchEvent(evObj);
				if (canceled) {
					// A handler called preventDefault.
					console.log("automatic click canceled");
				} else {
					moreComents('on');
					console.log("CALL Клік он");
				}
			};
		};
	};
	
	if (init=="on") {				

	setTimeout(eventFire, 1000, mkoment[0], 'click');
	
		
	}else{
		console.log("Клік OFF")
	};	
	
};
moreComents("on");








