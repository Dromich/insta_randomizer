console.log("IM HEREEEE");
var koment = document.getElementsByClassName("_6lAjh");
var mkoment = document.getElementsByClassName("Z4IfV");
var engine = "off";


(function() {

	function dinamik_text(div, text) {
		var node = document.getElementById(div);
		if (!node) {
			console.log("No element" + div)
		} else {

			while (node.firstChild)
				node.removeChild(node.firstChild);
			node.appendChild(document.createTextNode("" + text + ""));
		}
	};
	function addTextHTML(div, text) {
		
		p1 = document.getElementById(div);
		p1.insertAdjacentHTML('afterend',text );
		
};


function insertContent() {
var status = document.getElementById("infoblock");

if (status == null) {
	var div = document.createElement('div');
	div.setAttribute("id", "infoblock");
	div.innerHTML = `
	<h1>Giveaway Randomaizer</h1>
	<div id="status_msg"></div>

	<div id="viner"></div>
	`;
	document.body.insertBefore(div, document.body.firstChild);
	console.log("AddInfoblock");
	
}else{
	console.log("Блок вже є")
};		
		
	};

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	  };

	function getViner() {
		var viner = koment[randomInteger(1,koment.length)].innerHTML;
		
		addTextHTML("viner", viner);
		
	}

	function moreComents(init) {
		var init = init;	
		if (init=="on") {				
	
			setTimeout(eventFire, 1000, mkoment[0], 'click');
			//eventFire(mkoment[0], 'click');
				
			}else{
				console.log("Клік OFF");
				//moreComents('off');
			};

		function eventFire(el, etype) {	
			if (el == undefined) {
				console.log("елемент відсутній");					
				console.log(koment[randomInteger(1,koment.length)].innerHTML);				
				//alert("DONE");
				var init = "off";
				dinamik_text("status_msg", "Коментраі завантажено "+koment.length+".штук");
				setTimeout(dinamik_text, 2000, "status_msg", "Визначаю переможця");
				setTimeout(dinamik_text, 7000, "status_msg", "Готово");
				setTimeout(dinamik_text, 7000, "viner", "Переможець");
				setTimeout(getViner, 7000, );



				

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
		
			
		
	};
	

	function startEngine() {
		if (engine=="on") {
			moreComents("on");
			
			
		};
	}

	



	browser.runtime.onMessage.addListener((message) => {
	  if (message.command === "goo") {
		  console.log("STARTTTTT");
		  startEngine();
		  engine = "on";
		  insertContent();
		  dinamik_text("status_msg", "Завантажуєм коментарі");
		 // moreComents("on");


		

	  } else if (message.command === "reset") {

console.log("Хард ресет ")
		
		
	  }
	});


	

  
  })();

















