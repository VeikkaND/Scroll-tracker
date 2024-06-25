var lastScroll = 0

function scrollHandler(event) {
    const scrollAmount = window.scrollY - lastScroll
    const url = event.target.location.origin
    if(scrollAmount > 0) {
        chrome.storage.local.get(url, function(obj){
            const currentVal = Object.values(obj)[0]
            const newVal = currentVal + scrollAmount
            if(newVal) {
                chrome.storage.local.set({[url]: newVal})
            } else {
                chrome.storage.local.set({[url]: scrollAmount})
            }
        })
        chrome.storage.local.get("total", function(obj){
            if(!Object.values(obj)[0]) {
                chrome.storage.local.set({["total"]: scrollAmount})
            } else {
                const currentVal = Object.values(obj)[0]
                const newVal = currentVal + scrollAmount
                chrome.storage.local.set({["total"]: newVal})
            }
        })  
    }
    lastScroll = window.scrollY
}

document.addEventListener("scrollend", scrollHandler)