console.clear;
console.log('Beginn')

const button1 = document.querySelector('#answer_button1')
const answer1 = document.querySelector('#answer1')

console.log(answer1)

button1.addEventListener('click', () => {
    answer1.classList.toggle('hidden')
    console.log('toggle')
});