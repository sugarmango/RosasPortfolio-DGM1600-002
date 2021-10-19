import { films } from '../data/films.js'

let filmList = document.querySelector('#filmList')



let figure = document.createElement('figure')
let figImg = document.createElement('img')
figImg.src =  `https://starwars-visualguide.com/assets/img/films/1.jpg`
let figCaption = document.createElement('figcaption')


filmList.appendChild(poster)

for (let i = 0; i < films.length; i++) {
    let titleItem = document.createElement('li')
    titleItem.textContent = films[i].title
    titleList.appendChild(titleItem)
}