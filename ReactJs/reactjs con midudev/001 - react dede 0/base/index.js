import React from "https://esm.sh/react@18.2.0";
import ReactDoom from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDoom.createRoot(appDomElement);
const button1 = React.createElement('button', {"data-id": 123}, 'Click me');
const button2 = React.createElement('button', {"data-id": 223}, 'Click me');
const button3 = React.createElement('button', {"data-id": 323}, 'Click me');

const container = React.createElement(React.Fragment, null, [button1, button2, button3]);

root.render(container);

//con jsx
<React.Fragment>
    <button data-id={123}>Click me</button>
    <button data-id={223}>Click me</button>
    <button data-id={323}>Click me</button>
</React.Fragment>