	//location filter
	const locationDivs = document.getElementsByClassName("s-item__location s-item__itemLocation")
	for (i = 0; i < locationDivs.length; ++i){
		if (locationDivs[i].textContent == "from China"){
		  console.log("china listing detected, deleting...");
		  locationDivs[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(locationDivs[i].parentNode.parentNode.parentNode.parentNode)
		}
	}	  