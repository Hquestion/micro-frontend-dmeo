import React from "react";
import './Button.css';

const imgSrc = require('./WX20210121-170837@2x.png');

const Button = () => (
    <div>
        <img alt="图片" src={ require('./WX20210121-170837@2x.png') } />
        <button>App 2 Button</button>
    </div>
);

export default Button;
