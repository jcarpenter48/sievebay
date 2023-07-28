var filteredText = "2GB"

window.onload = function () {
      const titleSpans = document.getElementsByClassName("s-item__title")
      for (i = 0; i < titleSpans.length; ++i){
            if (titleSpans[i].textContent.includes(filteredText)){
              console.log("bad text filter listing detected, deleting...");
              titleSpans[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(titleSpans[i].parentNode.parentNode.parentNode.parentNode)
            }
      }
      console.log("initialized sievebay text filter")

      window.onscroll = function() {
            console.log("scrolling and cleaning")
            for (i = 0; i < titleSpans.length; ++i){
                  if (titleSpans[i].textContent.includes(filteredText)){
                    console.log("bad listing detected, deleting...");
                    titleSpans[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(titleSpans[i].parentNode.parentNode.parentNode.parentNode)
                  }
            }
      }
}