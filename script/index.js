const mainDom = document.querySelector('.list-container')
// const apikey = 'AIzaSyDnta0v3YBiwkifcwzQYHkzqvsDtk78VaA'
const apikey = 'AIzaSyBYh8-vrq5_TTMH4DH8Wkr2aQWDK_xRnaI'
window.onload = () => {
    document.querySelector('.search-box>div').addEventListener('click', search)
    document.querySelector('#srch').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            search()
        } else {
        }
    })

    const trndVdo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${apikey}`
    fetching(trndVdo)
}

const search = () => {
    const query = document.querySelector('#srch').value
    console.log(query)

    mainDom.innerHTML = null

    for (let ind = 0; ind < 25; ind++) {
        imgloader = document.createElement('img')
        imgloader.style.width = '92%'
        imgloader.src = './images/Screen Shot 2022-10-19 at 01.45.11.png'
        mainDom.append(imgloader)
    }
    // const apiKey = 'AIzaSyDnta0v3YBiwkifcwzQYHkzqvsDtk78VaA'
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apikey}`
    fetching(url)
    // for (let i = 0; i < 1; i++) {
    // }

}

const fetching = async (url) => {

    try {
        let response = await fetch(url)
        data = await response.json()
        data2 = data.items
        console.log(data2, 'this is data2')
        console.log(data, 'this is data sun le bhai')
        append(data)

    } catch (err) {
        console.log('err:', err)
    }
}

const append = ({ items }) => {
    // mainDom = document.querySelector('.list-container')
    console.log(items, 'thil is items')
    mainDom.innerHTML = null
    items.forEach(({ snippet, id }) => {
        console.log(id, 'this id is id')
        let acctualData = snippet
        let divL = document.createElement('div')
        let divM = document.createElement('div')
        let divS = document.createElement('div')
        let imgThumb = document.createElement('img')
        let imgChnl = document.createElement('img')
        let pVdotit = document.createElement('p')
        let pView = document.createElement('p')
        let pChnl = document.createElement('p')

        // hel = document.createElement('div')
        let videoId = id.videoId || id


        let aVdo = document.createElement('a')
        let aTit = document.createElement('a')

        divL.addEventListener('click', () => {
            let newData = {
                videoId,
                snippet
            }
            localStorage.setItem('clicked_video', JSON.stringify(newData))
            window.location.href = '/play-video.html'

        })

        divL.setAttribute('class', 'vid-list')
        //'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        divM.setAttribute('class', 'flex-div')
        divS.setAttribute('class', 'vid-info')

        pView.innerHTML = `15k Views &bull; 2 days`
        pChnl.innerText = acctualData.channelTitle
        let tempTitle = acctualData.title
        if (tempTitle.length > 68) {
            tempTitle = tempTitle.slice(0, 68) + '...'
        }
        pVdotit.innerText = tempTitle

        imgChnl.src = 'images/Jack.png'
        imgThumb.src = acctualData.thumbnails.medium.url
        imgThumb.setAttribute('class', 'thumbnail')




        aVdo.append(imgThumb)
        aTit.append(pVdotit)

        divS.append(aTit, pChnl, pView)
        divM.append(imgChnl, divS)
        divL.append(aVdo, divM)
        mainDom.append(divL)
    })
}