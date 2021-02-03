console.clear;

const buttons = document.querySelectorAll('.answer_button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.querySelector('.right_answer').classList.toggle('hidden')
    })
}) 
