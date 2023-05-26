const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
 const nav = document.getElementById('nav');
 nav.classList.toggle('active');
 const active = nav.classList.contains('active');
 event.currentTarget.setAttribute('aria-expanded', active);
 if (active) {
     event.currentTarget.setAttribute('aria-label', "Fechar Menu");
 }else{
     event.currentTarget.setAttribute('aria-label', "Abrir Menu");
 }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


//active
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const activeMenu = () => {
    let len = sections.length;
    while (--len && window.scrollY + 105 < sections[len].offsetTop) { }
    links.forEach(link => link.classList.remove("active"));
    links[len].classList.add("active");
};
activeMenu();
window.addEventListener("scroll", activeMenu);
