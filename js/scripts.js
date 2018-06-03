window.addEventListener("load", function() {

	var nodes = document.querySelectorAll("[data-theme] nav > *");
	
	for(var i = 0; i < nodes.length; i++){
	
		nodes[i].addEventListener("mouseover", function() {
	
			var container = document.querySelector("[data-theme]");
			container.setAttribute("data-theme", this.getAttribute("title"));
	
		});
	}
});