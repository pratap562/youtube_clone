let menuIcon = document.querySelector('.menu')
let sidebar1 = document.querySelector('.side');
let log = document.querySelector('.logo')
let con = document.querySelector('.container')
let side = document.querySelector('.hh')
let xx = document.querySelector('.right-sidebar')
let main = document.querySelector('.play-video')
// let side = document.querySelector('.right-sidebar')
date = new Date()
console.log(date)
console.log(menuIcon, 'menuIcon')

document.querySelector('.banner').remove()
menuIcon.addEventListener('click', kamKaro)


sex.onclick = function () {
    console.log(date)
}

sex.addEventListener('mouseout', function run() {
    console.log('Mouse Now went outside')
});


xx.onmouseover = function () {
    main.style.position = 'fixed'
    xx.style.position = ''
    main.style.width = '65%'
    side.style.marginLeft = '69%'
    var a = 2
}
main.onmouseover = function () {
    main.style.position = ''
    xx.style.position = 'fixed'
}

var kamKaro = () => {
    console.log('bkdjfdsklj lkjsdfaslfdkaslkd lsdfkjalskdjflakjsdf ldjsfalskjdflkajf')
    console.log(date)
    sidebar1.classList.toggle("small-sidebar");
    con.classList.toggle('large-container')
    console.log(xx.innerHTML)
}