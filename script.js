const menuIcon=document.getElementById('menuicon');
const navbar=document.querySelector('.navbar');
const navLinks=document.querySelectorAll('.navbar a');
menuIcon.addEventListener('click', () =>{
    navbar.classList.add('active');
    menuIcon.style.display='none';
});
 navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); 

        if (window.innerWidth <= 768) {
            menuIcon.style.display = 'block';
        }
    });
});