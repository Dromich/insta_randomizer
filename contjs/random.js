console.log("IM HEREEEE");
(function() {

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
	

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	  };



	browser.runtime.onMessage.addListener((message) => {
	  if (message.command === "gooBot") {
		  console.log("STARTTTTT");

		 gitmoreComents("on");


		

	  } else if (message.command === "reset") {

console.log("Хард ресет ")
		
		
	  }
	});

	

  
  })();

















