window.onload = function () {
	//range listings filter
	const defaultSpans = document.getElementsByClassName("DEFAULT")
	for (i = 0; i < defaultSpans.length; ++i){
		if (defaultSpans[i].textContent == " to "){
		  console.log("bad listing detected, deleting...");
		  defaultSpans[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(defaultSpans[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
		}
	}

	//location filter
	const locationDivs = document.getElementsByClassName("s-item__location s-item__itemLocation")
	for (i = 0; i < locationDivs.length; ++i){
		if (locationDivs[i].textContent == "from China"){
		  console.log("china listing detected, deleting...");
		  locationDivs[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(locationDivs[i].parentNode.parentNode.parentNode.parentNode)
		}
	}	  
	console.log("initialized")

	window.onscroll = function() {
		console.log("scrolling and cleaning")
		for (i = 0; i < defaultSpans.length; ++i){
			  if (defaultSpans[i].textContent == " to "){
				console.log("bad listing detected, deleting...");
				defaultSpans[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(defaultSpans[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
			  }
		}
		
		//.s-item__location.s-item__itemLocation
		for (i = 0; i < locationDivs.length; ++i){
			if (locationDivs[i].textContent == "from China"){
			  console.log("china listing detected, deleting...");
			  locationDivs[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(locationDivs[i].parentNode.parentNode.parentNode.parentNode)
			}
		}		
		
	}
}

