(()=>{"use strict";const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("img"),c=document.createElement("p");t.textContent="Best Restaurant EVER!!",n.setAttribute("src","/src/assets/imgs/restaurant.jpg"),c.textContent="Das ist eine schöne Platze mit große See. Es gibt viele Berge. Das Restaurant ist super cool.",e.appendChild(t),e.appendChild(n),e.appendChild(c);const a=e,d=document.createElement("p"),o=document.createElement("div");d.textContent="This is the menu.",o.appendChild(d);const s=o,i=document.createElement("p"),r=document.createElement("div");i.textContent="This is the contact.",r.appendChild(i);const l=r;function m(e){const t=document.querySelector("#content");t.innerHTML="";let n=e.target.value;"home"===n&&t.appendChild(a),"menu"===n&&t.appendChild(s),"contact"===n&&t.appendChild(l)}document.querySelectorAll("#buttons").forEach((e=>addEventListener("click",m)))})();