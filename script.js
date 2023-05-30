import { animate } from "https://cdn.jsdelivr.net/npm/motion@10.16.2/+esm";

animate("#arrow-down",
    { y: [0, -10, 10, 0] },
    {
        duration: 2,
        offset: [0, 0.25, 0.75],
        repeat: Infinity
    }
);

console.log('hoiiii')