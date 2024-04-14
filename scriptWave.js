const letterB = document.getElementById("LetterB");
const letterO = document.getElementById("LetterO");
const letterU = document.getElementById("LetterU");
const letterN = document.getElementById("LetterN");
const letterC = document.getElementById("LetterC");
const letterE = document.getElementById("LetterE");

const elements = [letterB, letterO, letterU, letterN, letterC, letterE];

elements.forEach((element, index) => {
	gsap.to(element, {
		y: "+=45", 
		ease: "power1.inOut",
		duration: 0.5,
		repeat: -1,
		yoyo: true,
		delay: index * 0.1 
	});
});
elements.forEach((element, index) => {
	gsap.to(element, {
		y: "-=45", 
		ease: "power1.inOut",
		duration: 0.5,
		repeat: -1,
		yoyo: true,
		delay: index * 0.1
	});
});
