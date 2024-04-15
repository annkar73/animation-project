document.addEventListener("DOMContentLoaded", function(event) {

    const objectElement = document.getElementById('bounce');
    objectElement.addEventListener('load', function() {
    });


const letterB = document.getElementById("LetterB");

gsap.to(letterB, {
	x: "-=50",
	ease: "power1.inOut",
	duration: 3,
	repeat: -1,
	yoyo: true
});

const letterO = document.getElementById("LetterO");

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

const letterU = document.getElementById("LetterU");

gsap.to(letterU, {
	y: "-=35",
	ease: "power1.inOut",
	duration: 2,
	repeat: -1,
	yoyo: true
});
gsap.to(letterU, {
	y: "+=65",
	ease: "power1.inOut",
	duration: 2,
	repeat: -1,
	yoyo: true,
	delay: 1
});

const letterN = document.getElementById("LetterN");

gsap
	.timeline({ repeat: -1 })
	.to(letterN, {
		scaleY: -1,
		transformOrigin: "center center",

		ease: "power1.inOut",
		duration: 1
	})
	.to(letterN, {
		scaleY: 1,
		transformOrigin: "center center",
		ease: "power1.inOut",
		duration: 1,
		delay: 1
	});

const letterC = document.getElementById("LetterC");

gsap.to(letterC, {
	rotation: 360,
	transformOrigin: "center center",
	ease: "none",
	duration: 2,
	repeat: -1
});

const letterE = document.getElementById("LetterE");

gsap.to(letterE, {
	x: "+=50",
	ease: "power1.inOut",
	duration: 3,
	repeat: -1,
	yoyo: true
});

document.getElementById('bounce').addEventListener('load', function() {

});

});