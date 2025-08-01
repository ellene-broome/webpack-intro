// src/index.js

import './style.css';
import { add } from './math';

const result = add(3, 7);
console.log("3 + 7 =", result);

const heading = document.createElement('h1');
heading.textContent = `3 + 7 = ${result}`;
document.body.appendChild(heading);
