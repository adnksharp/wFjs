let body = document.querySelector('body'),
    div = document.createElement('div'),
    p = document.createElement('p');
div.setAttribute('class', 'text-r');
p.setAttribute('class', 'write');

body.insertBefore(div, body.firstChild);
div.insertAdjacentElement('beforeend', p);