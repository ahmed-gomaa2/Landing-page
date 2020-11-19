const navbarLinks = document.getElementsByClassName('navbar__links');
const burger = document.querySelector('.header__menu');
const sidebar = document.querySelector('.navbar__right');

//****************************
//getting the section position from the top.
//****************************

const getPosition = (element) => {
    return element.getBoundingClientRect().y + window.scrollY;
}

//********************
//styling the nav links when its active.
//********************

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    for(let i = 0; i < navbarLinks.length; i++){
        let section = document.querySelector(navbarLinks[i].hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navbarLinks[i].classList.add("active");
        } else {
            navbarLinks[i].classList.remove("active");
        }
    }
})

//******************
// handling the navbar links clicks.
//******************

for(let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(`${navbarLinks[i].hash}`);
        window.scroll({top: getPosition(section), behavior: "smooth"});
    })
}

//******************
// handling the burger menu click.
//******************

burger.addEventListener('click', () => {
    sidebar.classList.toggle('navbar__out')
})