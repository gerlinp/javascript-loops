let html = '';


let randomValue = () => Math.floor(Math.random() *256);

let randomRGB = () => {
    color = `rgb( ${randomValue()}, ${ randomValue()}, ${ randomValue()} )`;
    return color;
}

for (let i = 1; i <= 10; i++) { 
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
