import { animate } from "https://cdn.jsdelivr.net/npm/motion@10.16.2/+esm";
import simpleParallaxJs from 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.2/+esm'

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");
    
    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        element.appendChild(span);
    });
}
enhance('fname');
enhance('lname');

animate("#arrow-down",
    { y: [0, -10, 10, 0] },
    {
        duration: 2,
        offset: [0, 0.25, 0.75],
        repeat: Infinity
    }
);

let image = document.getElementsByClassName('waves');
new simpleParallaxJs(image, {
	scale: 2
});