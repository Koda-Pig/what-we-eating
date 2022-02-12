import './style.css'

let options = ['nandos', 'momos', 'lapadrino', 'tamrind', 'soul souvlaki'];
let btn = document.querySelector('button');
let result = document.querySelector('.result p')

btn.addEventListener('click', () => {
  result.innerHTML = options[Math.floor(Math.random() * options.length)];
});
