const botaoabrir = document.querySelector(".header-mobile > button")
const botaofechar = document.querySelector('.header-mobile nav button')

const body = document.querySelector('body')
const nav = document.querySelector(".header-mobile nav")

console.log(body)

botaoabrir.addEventListener('click',abrirmenu)
botaofechar.addEventListener('click',fecharmenu)

function abrirmenu (){
    body.classList.add("menu-open")
    nav.classList.add ("abrir")
}

function fecharmenu (){
    body.classList.remove("menu-open")
    nav.classList.remove("abrir")
}