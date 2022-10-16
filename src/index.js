import home from './functions/home';
import menu from './functions/menu';
import contact from './functions/contact';
import MyImage from './my-image.png'

(() => {
    const buttons = document.querySelectorAll('#buttons');
    buttons.forEach(e => addEventListener('click', setTab));
})();

function setTab(e) {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    let tab = e.target.value;

    if (tab === 'home') {
        content.appendChild(home);
    };

    if (tab === 'menu') {
        content.appendChild(menu);
    };

    if (tab === 'contact') {
        content.appendChild(contact);
    };
};