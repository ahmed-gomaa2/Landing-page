//****************************
// Building the nav
//****************************
const navbar = document.querySelector('.navbar__menu')
const myDocFrag = document.createDocumentFragment();
const sectionsDocList = document.getElementsByClassName('sections');


// creating left nav
const leftList = document.createElement('ul');
leftList.setAttribute("class", "navbar__left");
leftList.innerHTML= '<li><a>Ahmed Gomaa</a></li>';

myDocFrag.appendChild(leftList);

// creating right nav
const rightList = document.createElement('ul');
rightList.setAttribute('class', 'navbar__right');

for(let i = 0; i < sectionsDocList.length; i++) {
    const navItem = document.createElement('li')
    navItem.innerHTML = `<a class="navbar__links" href=#${sectionsDocList[i].id}>${sectionsDocList[i].id}</a>`

    rightList.appendChild(navItem);
}

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
            section.classList.add('section__active');
        } else {
            navbarLinks[i].classList.remove("active");
            section.classList.remove('section__active');
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