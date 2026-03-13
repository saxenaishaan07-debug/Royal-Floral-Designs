const elements = document.querySelectorAll(".review, .grid img, .gallery-preview img");

function reveal(){
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
