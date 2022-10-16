const home = document.createElement('div');
const h1 = document.createElement('h1');
const img = document.createElement('img');
const p = document.createElement('p');
import image from '../assets/imgs/restaurant.jpg'

h1.textContent = 'Best Restaurant EVER!!';
img.setAttribute('src', image);
p.textContent = 'Das ist eine schöne Platze mit große See. Es gibt viele Berge. Das Restaurant ist super cool.';

home.appendChild(h1);
home.appendChild(img);
home.appendChild(p);
export default home;