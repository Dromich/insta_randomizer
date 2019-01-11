console.log("IM HEREEEE");
var koment = document.getElementsByClassName("_6lAjh");
var mkoment = document.getElementsByClassName("Z4IfV");
var engine = "off";


(function () {

	

	function getViner() {
		console.log('Try Get Viner start');

		setTimeout(dinamik_text, 500, "status_msg", "Визначаю переможця");

		var viner = koment[randomInteger(1, koment.length)];

		var viner_name = viner.innerText;
		console.log(viner_name);
		var viner_coment = viner.parentElement.innerHTML;

		var vinerMoreComents = [];

		for (let index = 0; index < koment.length; index++) {
			if (koment[index].innerText === viner_name) {
				vinerMoreComents.push(koment[index].parentElement.innerHTML);

			}

		}
console.log('GEt Viner Done');
		getUserInfo(viner_name, viner_coment, vinerMoreComents);

	};


	function getMoreViner() {
		console.log('Try Get Viner start');
		var viner = koment[randomInteger(1, koment.length)];

		var viner_name = viner.innerText;

		console.log(viner_name);
		var viner_coment = viner.parentElement.innerHTML;

		var vinerMoreComents = [];

		for (let index = 0; index < koment.length; index++) {
			if (koment[index].innerText === viner_name) {
				vinerMoreComents.push(koment[index].parentElement.innerHTML);

			}

		}

		getUserInfo(viner_name, viner_coment, vinerMoreComents,"on");

		var vinerMoreComents = [];

	};


	function getUserInfo(username, userComent, userMoreComents,more) {

var more = more;
console.log(more);

		console.log("Try GET User info - " + username);
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4) {
				var infoo = JSON.parse(xmlhttp.responseText);
				//console.log(infoo.graphql.user.profile_pic_url_hd);	

				var viner_pic = infoo.graphql.user.profile_pic_url_hd;



				vinerHTML = `
			<header class="Ppjfr">
			<div class="RR-M- h5uC0 mrq0Z" role="button" tabindex="0"><canvas class="CfWVH" style="position: absolute; top: -5px; left: -5px; width: 50px; height: 50px;"
				 width="50" height="50"></canvas><span class="_2dbep " style="width: 40px; height: 40px;" role="link" tabindex="0"><img
					 class="_6q-tv" src="${viner_pic}"
					 alt="Основна світлина "></span></div>
			<div class="o-MQd  ">
				<div class="PQo_0 ">
					<div class="e1e1d">
						<h2 class="BrX75"><a class="FPmhX notranslate nJAzx" title="Viner" href="/${username}/">${username}</a></h2>
					</div>
					
				</div>
			
			</div>
			
			
		</header>	
		<h5>Коментар переможця</h5>
		<div class="user_coment">${userComent}</div>

		<div id="user_more_coment">
		
		</div>
			`
				console.log('Get Viner done');
				setTimeout(dinamik_text, 300, "viner", "Переможець");

if (more === "on") {
	console.log('DIIINAMIKKKKKKKKK')
	dinamik_HTML("viner", vinerHTML)
}else{
	addTextHTML("viner", vinerHTML);
}

				


				if (userMoreComents.length > 1) {

					var node = document.getElementById('user_more_coment');
		if (!node) {
			console.log("No element" + div)
		} else {

			while (node.firstChild)
				node.removeChild(node.firstChild);
			
		}


					for (let index = 0; index < userMoreComents.length; index++) {

						addInnTextHTML("user_more_coment", userMoreComents[index]);
						

					}

				}

			} else (
				console.log("Status: " + xmlhttp.readyState)

			);

		};
		xmlhttp.open("GET", "https://www.instagram.com/" + username + "/?__a=1", true);
		xmlhttp.send();

	};


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

	function dinamik_HTML(div, text) {
		var node = document.getElementById(div);
		if (!node) {
			console.log("No element" + div)
		} else {
			
				node.removeChild(node.firstChild);


			node.insertAdjacentHTML('afterbegin', text);
		}
	};

	function addTextHTML(div, text) {

		p1 = document.getElementById(div);
		p1.insertAdjacentHTML('afterend', text);

	};
	function addInnTextHTML(div, text) {

		p1 = document.getElementById(div);
		p1.insertAdjacentHTML('afterbegin', text);

	};

	function RemInfoblock() {
		var div = document.getElementById("infoblock");
		if (!div) {
			console.log("Інфоблока вже нема")
		} else {
			document.body.removeChild(div);
			console.log("RemInfoblock");
		};

	};
	function insertContent() {
		var status = document.getElementById("infoblock");

		if (status == null) {
			var div = document.createElement('div');
			div.setAttribute("id", "infoblock");
			div.innerHTML = `
			<!--div id="close">X</div-->
	<h1>Giveaway Randomaizer</h1>
	<span id="load_count"></span>
	<div id="status_msg"></div>
	<div id="viner"></div>
	`;
			document.body.insertBefore(div, document.body.firstChild);
			

		} else {
			console.log("Screen On")
		};

	};

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	};



	function moreComents(init) {
		var load_proces = document.getElementsByClassName("zKxRE");
		
		dinamik_text("load_count", koment.length);
		var init = init;
		if (init == "on") {

			if (load_proces.length === 0) {
				setTimeout(eventFire, 1000, mkoment[0], 'click');
			} else {
				console.log('Load Coments');				
				setTimeout(moreComents, 2000, 'on');

			};

		} else {
			console.log("Клік OFF");
			//moreComents('off');
		};

		function eventFire(el, etype) {
			if (el == undefined) {
				console.log("елемент відсутній- або вже всі коменти");
				
				dinamik_text("status_msg", "Коментраі завантажено " + koment.length + ".штук");

							
				startViner();
				
				//setTimeout(getViner, 4000);

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
						console.log("Get coments");
					}
				};
			};
		};



	};


	function startEngine() {
		if (engine == "on") {
			moreComents("on");
		};
	}

	function startViner() {
		if (engine == "on") {
			getViner();
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
			console.log('Команда ресет пробую оновити преможця');
			getMoreViner();


		}else if (message.command === "close") {
			RemInfoblock();
			
			//document.location.reload(true);
			console.log("Хард ресет ")


		}
	});





})();

















