const togglebutton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

togglebutton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

