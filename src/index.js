import _ from 'lodash';
import './style.css';
import Toucan from './asserts/images/Toucan.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const toucan = new Image();
    toucan.src = Toucan

    element.appendChild(toucan);

    return element;
}

document.body.appendChild(component());