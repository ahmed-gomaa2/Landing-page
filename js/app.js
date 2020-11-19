//****************************
// Building the nav
//****************************
const navbar = document.querySelector('.navbar__menu')
const myDocFrag = document.createDocumentFragment();

// creating left nav
const leftList = document.createElement('ul');
leftList.setAttribute("class", "navbar__left");
leftList.innerHTML= '<li><a>Ahmed Gomaa</a></li>';

myDocFrag.appendChild(leftList);

// creating right nav
const rightList = document.createElement('ul');
rightList.setAttribute('class', 'navbar__right');

const aboutItem = document.createElement('li');
aboutItem.innerHTML = '<a id="about__btn" class="navbar__links" href="#about">about</a>';

rightList.appendChild(aboutItem);

const skillsItem = document.createElement('li');
skillsItem.innerHTML = '<a id="skills__btn" class="navbar__links" href="#skills">skills</a>';

rightList.appendChild(skillsItem);

const projectsItem = document.createElement('li');
projectsItem.innerHTML = '<a id="projects__btn" class="navbar__links" href="#projects">Projects</a>';

rightList.appendChild(projectsItem);

const contactsItem = document.createElement('li');
contactsItem.innerHTML = '<a id="contacts__btn" class="navbar__links" href="#contacts">Contacts</a>'

rightList.appendChild(contactsItem);

myDocFrag.appendChild(rightList);

// creating the burger.
const navBurger = document.createElement('div');
navBurger.setAttribute('class', 'header__menu');
navBurger.innerHTML = '<div></div> <div></div> <div></div>'

myDocFrag.appendChild(navBurger);

navbar.appendChild(myDocFrag);

//****************************
// The global variables.
//****************************

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