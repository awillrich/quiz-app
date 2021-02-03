console.clear;

const answer_buttons = document.querySelectorAll('.answer_button')
const answers = document.querySelectorAll('.answer')
const bookmarks = document.querySelectorAll('.bookmark')

answer_buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.querySelector('.right_answer').classList.toggle('hidden')
    })
}) 

answers.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('marked')
    })
}) 

bookmarks.forEach(sign => {
    sign.addEventListener('click', () => {
        sign.classList.toggle('bookmark__active')
    })
}) 
