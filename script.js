import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@10.16.2/+esm";
import simpleParallaxJs from 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.2/+esm'
;
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
};
enhance('fname');
enhance('lname');

let breakpoint = window.matchMedia("(min-width: 860px)");
function animationBreakpoint(breakpoint) {
  if (breakpoint.matches) {
    animate(
        "header h1",
        { x: [-100, 0], opacity: [0, 1] },
        {
          duration: 1.4
        }
    );
  } else {
    animate(
        "header h1",
        { y: [50, 0], opacity: [0, 1] },
        {
            duration: 1.4
        }
    );
  }
}
animationBreakpoint(breakpoint);

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

inView(".about-me-container", () => {
    animate(
        ".about-me-container",
        { y: [50, 0], opacity: [0, 1] },
        { delay: 0.5, duration: 1.4 }
    );
});

//----------------------------------------------------------------

const allProjects = document.getElementById('projects-container').children;
let projectArray = [];

for (let i = 0; i < allProjects.length; i++) {
  const project = allProjects[i];

  projectArray.push(project);
}

for (let i = 0; i < projectArray.length; i++) {
    inView(projectArray[i], () => {
        animate(
            projectArray[i],
            { y: [50, 0], opacity: [0, 1] },
            { delay: 0.5, duration: 1.4 }
        );
    });
}