const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const colors = button.addEventListener('click', () =>{

    const randomColor = makeRandColor();
    const newColor = randomColor.rgbString;

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    
    console.log(`Red is ${randomColor.r}`);
    console.log(`Green is ${randomColor.g}`);
    console.log(`Blue is ${randomColor.b}`);

    if (randomColor.r < 60 || randomColor.g < 60 || randomColor.b < 60) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black'; // Set the default color if not less than 60
    }
});
const makeRandColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return {
        r: r,
        g: g,
        b: b,
        rgbString: `rgb(${r}, ${g}, ${b})`
    };
    
}



