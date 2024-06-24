var lastScroll = 0
function scrollHandler(event) {
    const scrollAmount = window.scrollY - lastScroll
    const url = event.target.location.origin
    if(scrollAmount > 0) {
        chrome.storage.local.get(url, function(obj){
            const currentVal = Object.values(obj)[0]
            const newVal = currentVal + scrollAmount
            chrome.storage.local.set({[url]: newVal})
        })
        //console.log(storage)
        
    }
    //console.log("scrolled " + scrollAmount + " pixels")
    //console.log(window.scrollY)
    lastScroll = window.scrollY
}

document.addEventListener("scrollend", scrollHandler)