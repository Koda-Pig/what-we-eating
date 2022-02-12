import './style.css'

let btn = document.querySelector('button'),
    resultName = document.querySelector('.result p'),
    eatingAt;

btn.addEventListener('click', () => {
  eatingAt = options[Math.floor(Math.random() * options.length)];
  resultName.innerHTML =
    `${eatingAt.name} <br>
    <a href='tel:${eatingAt.numberLink}'>${eatingAt.number}</a> <br>
    <a href='${eatingAt.menuLink}'>menu</a>
    `;
});

let options = [
 {
  name: 'Nandos',
  number: '011 442 6168',
  numberLink: '+27114426168',
  menuLink: 'https://www.nandos.co.za/eat/order/menu'
 },
 {
  name: 'Momos',
  number: '010 900 4889',
  numberLink: '+27109004889',
  menuLink: 'https://www.zomato.com/momobaohaus/menu'
 }
 ,{
  name: 'Lapadrino',
  number: '011 486 6222',
  numberLink: '+27114866222',
  menuLink: 'http://www.lapadrinorobertsham.co.za/images/Menu-J.jpg'
 }
 ,{
  name: 'Tamrind',
  number: '063 206 0757',
  numberLink: '+27632060757',
  menuLink: 'http://tamarindofindia.co.za/'
 }
 ,{
  name: 'Soul Souvlaki',
  number: '011 327 6366',
  numberLink: '+27113276366',
  menuLink: 'https://soulsouvlaki.co.za/parktown-north/#menu'
 }
 ,{
  name: 'Aldega',
  number: '063 028 9935',
  numberLink: '+27630289935',
  menuLink: 'https://www.zomato.com/johannesburg/adega-express-emmarentia/menu'
 }
 ,{
  name: 'Mochachos',
  number: '011 646 3967',
  numberLink: '+27116463967',
  menuLink: 'https://www.mochachos.com/our-food/'
 },{
  name: 'Syrian Rose',
  number: '074 492 5555',
  numberLink: '+27744925555',
  menuLink: 'https://www.facebook.com/OnlineMediaSA/photos/pcb.4179395818756347/4179395545423041'
 }
]