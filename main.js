const btnAdd = document.querySelector(".add");
const btnShow = document.querySelector(".showAdvice")
const btnClean = document.querySelector(".clean")
const btnOptions = document.querySelector(".showOptions")
const h1 = document.querySelector("h1")

const input = document.querySelector('input');

const advice = ['opcja1', 'opcja2'];


const add = (e) => {
    e.preventDefault();
    const newAdvice = input.value;
    advice.push(newAdvice);
    input.value = '';
    alert(`dodales ${newAdvice}`)
    input.value.textContent = "";



}

btnAdd.addEventListener('click', add)

btnShow.addEventListener('click', () => {
    input.value = '';
    let index = advice[Math.floor(Math.random() * advice.length)];
    h1.textContent = index;


})
btnClean.addEventListener('click', (e) => {
    e.preventDefault();
    advice.length = 0;
    input.value = '';
})
btnOptions.addEventListener('click', () => {
    alert(advice.join(" --- ---"))
})