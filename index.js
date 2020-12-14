// look for my document
const navToggle = document.querySelector('.nav-toggle');

// need each individual link
// querySelectorAll create a nodelist of all matching .nav__link
const navLinks = document.querySelectorAll('.nav__link ')


navToggle.addEventListener('click', () => {
    // everytime its clicked it should add this class
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})