chrome.storage.local.get(null, function(obj){
    const statsArray = Object.keys(obj).map(key => {
        return {key: key, value: obj[key]}
    })
    console.log(statsArray)
})