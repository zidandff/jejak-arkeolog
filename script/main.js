const navbar = document.querySelector(".navbar")
document.addEventListener('scroll', ()=> {
    if( scrollY > 80 ){
        navbar.classList.add("scroll")
    }else {
        navbar.classList.remove("scroll")
    }
})
// change navbar color when toggler on click
const navToggler = document.querySelector(".navbar-toggler");
navToggler.addEventListener('click', ()=> {
    navbar.classList.add("scroll")
    navToggler.classList.toggle("active")
})
