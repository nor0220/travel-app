/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

window.addEventListener('DOMContentLoaded', (event) => {

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navUL = document.getElementById('navbar__list');
const menuItems = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function nearTopofViewport( element ){  
    let boundingBox = element.getBoundingClientRect();
    return (boundingBox.top < 150 && boundingBox.top > -150);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/* Navigation bar */

for (let i = 0; i < menuItems.length; i++) {
    const newLI = document.createElement('li');
    newLI.innerHTML = '<a id="nav-'+ menuItems[i].id +'" class="menu__link">' + menuItems[i].dataset.nav + '</a>';
    navUL.appendChild(newLI);

    document.addEventListener( 'scroll', event => {
        if( nearTopofViewport( menuItems[i] ) ){
            menuItems[i].classList.add('your-active-class');
        } else {
            menuItems[i].classList.remove('your-active-class');
        }
    })
    newLI.addEventListener( 'click', function(){
        window.scrollTo({ top: menuItems[i].offsetTop-50 , behavior: 'smooth'});
    })
}

// Add class 'active' to section when near top of viewport
for (let i = 0; i < menuItems.length; i++) {
    document.addEventListener( 'scroll', event => {
        if( nearTopofViewport( menuItems[i] ) ){
            menuItems[i].classList.add('your-active-class');
            document.getElementById('nav-' + menuItems[i].id).classList.add('active');
        } else {
            menuItems[i].classList.remove('your-active-class');
            document.getElementById('nav-' + menuItems[i].id).classList.remove('active');
        }
    })
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


});