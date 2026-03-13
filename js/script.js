const elements = document.querySelectorAll(".review, .grid img");

function reveal(){

const windowHeight = window.innerHeight;

elements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", reveal);
