// first take the data from local Storage whic need to play

// console.log(data)

{/* <iframe autoplay = 'true' allowfullscreen="true" src="https://www.youtube.com/embed/GwIo3gDZCVQ?autoplay=1&videoEmbeddable=true"></iframe> */ }


chanel = `https://youtube.googleapis.com/youtube/v3/channels?id=UComP_epzeKzvBX156r6pm1Q&key=AIzaSyBYh8-vrq5_TTMH4DH8Wkr2aQWDK_xRnaI`


const embed = () => {
    let data = JSON.parse(localStorage.getItem('clicked_video'))

    let { videoId } = data
    console.log(videoId)
    console.log(data)

    frame = document.querySelector('#main_iframe')
    frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&videoEmbeddable=true`

}
embed()




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
            // console.log(JSON.parse(newData))
            window.location.href = '/play-video.html'
        })

        divL.setAttribute('class', 'vid-list')
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