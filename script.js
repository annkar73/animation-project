document.addEventListener("DOMContentLoaded", function(event) {

    const objectElement = document.getElementById('bounce');
    objectElement.addEventListener('load', function() {
        console.log('SVG-filen har laddats');
    });

console.log('script.js is loaded');

const letterO = document.getElementById('LetterO');
console.log('LetterO element:', letterO);

gsap.to(letterO, {
    y: "-=50",
    ease: "power1.inOut",
    duration: 1,
    repeat: -1,
    yoyo: true
});
gsap.to(letterO, {
    y: "+=65",
    ease: "power1.inOut",
    duration: 1,
    repeat: -1,
    yoyo: true,
    delay: 1
});

const letterU = document.getElementById('LetterU');

gsap.to(letterU, {
    y: "-=50",
    ease: "power1.inOut",
    duration: 1,
    repeat: -1,
    yoyo: true
});

const letterE = document.getElementById('LetterE');

gsap.to(letterE, {
    y: "-=15",
    x: "+=15",
    ease: "power1.inOut",
    duration: 1,
    repeat: -1,
    yoyo: true
});

document.getElementById('bounce').addEventListener('load', function() {

});

});