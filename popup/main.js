function listenForClicks() {
	
	document.addEventListener("click", (e) => {
	
		function bgcomand(tabs) {
			refresh = document.querySelectorAll('#reset_but');
			box = document.querySelectorAll('#main_but');
			box[0].classList.add('hidden');
			refresh[0].classList.remove('hidden');

			browser.tabs.sendMessage(tabs[0].id,
				{
					command: "goo"
				});

		};


		function reset(tabs) {
			browser.tabs.sendMessage(tabs[0].id, {
				command: "reset",
			});
		};

		function close(tabs) {
			refresh[0].classList.add('hidden');
			box[0].classList.remove('hidden');

			browser.tabs.sendMessage(tabs[0].id, {
				command: "close",
			});
		};
	
	/**
	* Just log the error to the console.
	*/
	function reportError(error) {
	console.error(`Помилка функції: ${error}`);
	}
	
	
	
	
	
	if (e.target.classList.contains("start")) {

	browser.tabs.query({active: true, currentWindow: true})
	.then(bgcomand)
	.catch(reportError);
	}else if (e.target.classList.contains("reset")) {
	browser.tabs.query({active: true, currentWindow: true})
	.then(reset)
	.catch(reportError);
	}else  {
		browser.tabs.query({active: true, currentWindow: true})
		.then(close)
		.catch(reportError);
		}
	});



	};
	
	
	function reportExecuteScriptError(error) {
	document.querySelector("#popup-content").classList.add("hidden");
	document.querySelector("#user_mesage").classList.add("hidden");
	document.querySelector("#error-content").classList.remove("hidden");
	console.error(`Помилка загрузки скрипта: ${error.message}`);
	}
	
	/**
	* Вбудована функція яка передає проміс контент скрипту(як параметр адреса самого скрипта)
	*/
	browser.tabs.executeScript({file: "/contjs/random.js"})
	.then(listenForClicks)
	.catch(reportExecuteScriptError);
	