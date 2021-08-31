function checkRanks() {
    punksInPage = document.getElementsByClassName('items_itemName__roIHd')

    for (i in punksInPage) {
        let punk = punksInPage[i]
        if (punk.textContent == null | punk.textContent == undefined) continue
        if (punk.textContent.includes('Rank')) continue
        punkId = punk.textContent.replace('Avax Punk ','')
                
        editPunk(punkId, punk)
        
    }
}

function editPunk(punkId, punk) {

    fetch(`https://ragepit.dev/punk/${punkId}`)
                .then(res => res.json())
                .then(data => {
                    punk.textContent = `Punk ${punkId} Rank: ${data.rank}`
                })
                .catch(e => console.error(e))
}

var items = document.getElementsByClassName('items_items__MFJjh')[0].children[0].innerHTML

function timing() {
    if (items != document.getElementsByClassName('items_items__MFJjh')[0].children[0].innerHTML)
        checkRanks()
    items = document.getElementsByClassName('items_items__MFJjh')[0].children[0].innerHTML
}

var intervalID = window.setInterval(timing, 1000);

timing()