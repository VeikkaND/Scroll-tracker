chrome.storage.local.get(null, function(obj){
    const statsArray = Object.keys(obj).map(key => {
        return {key: key, value: obj[key]}
    })

    statsArray.sort((b, a) => {
        if(a.value < b.value) {return -1}
        else if(a.value > b.value) {return 1} 
        return 0
    })

    const roundedValue = Math.round(statsArray[0].value)
    document.getElementById("total")
        .textContent = new Intl.NumberFormat()
            .format(roundedValue) + " px"  
    const list = document.getElementById("leaderboard")
    
    for(let i = 1; i < 6; i++) {
        const item = statsArray[i]
        const roundedValue = Math.round(item.value)
        const node = document.createElement("li")
        const textnode = document
            .createTextNode(
                item.key + ": " + new Intl.NumberFormat()
                    .format(roundedValue) + " px"
            )
        node.append(textnode)
        list.appendChild(node)
    }
})