﻿(function(){
	
	function showElement() {
	  alert(this.innerHTML);
	}

	el = document.getElementById("list");   // <<< el используется повторно и не определяется
	el.addEventListener('click', showElement, false);

	el = document.getElementById("item");
	el.addEventListener('click', showElement, false);

	el = document.getElementById("link");
	el.addEventListener('click', showElement, false);

	el = document.getElementById("list2");
	el.addEventListener('click', showElement, true);

	el = document.getElementById("item2");
	el.addEventListener('click', showElement, true);

	el = document.getElementById("link2");
	el.addEventListener('click', showElement, true);	
	
}());
