chrome.storage.local.get(null, function(obj){
    const statsArray = Object.keys(obj).map(key => {
        return {key: key, value: obj[key]}
    })
    statsArray.sort((b, a) => {
        if(a.value < b.value) {return -1}
        else if(a.value > b.value) {return 1} 
        return 0
    })
    console.log(statsArray)
    document.getElementById("total")
        .textContent = statsArray[0].value
    const list = document.getElementById("leaderboard")
    for(let i = 1; i < 6; i++) {
        const item = statsArray[i]
        const node = document.createElement("li")
        const textnode = document
            .createTextNode(item.key + ": " + item.value)
        node.append(textnode)
        list.appendChild(node)
    }
    console.log(statsArray)
})