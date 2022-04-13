const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const digitalMenu = document.querySelector('#digital-page');
  const facialMenu = document.querySelector('#facial-page');
  const ocularMenu = document.querySelector('#ocular-page');
  const aboutMenu = document.querySelector('#about-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    digitalMenu.classList.remove('highlight');
    facialMenu.classList.remove('highlight');
    ocularMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1050) {
    digitalMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    facialMenu.classList.remove('highlight');
    ocularMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1650) {
    facialMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    digitalMenu.classList.remove('highlight');
    ocularMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2400) {
    ocularMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    digitalMenu.classList.remove('highlight');
    facialMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
  return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
  aboutMenu.classList.add('highlight');
  homeMenu.classList.remove('highlight');
  digitalMenu.classList.remove('highlight');
  facialMenu.classList.remove('highlight');
  ocularMenu.classList.remove('highlight');
  return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark_theme");
  if(document.body.classList.contains("dark_theme")){
    icon.src = "./sun.png";
  } else {
    icon.src = "./lua.png"
  }
}

const resDiv = document.querySelector("#results");
const resBtn = document.querySelector("#getData");

resBtn.addEventListener('click', () => {
  getAdvice();
})

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const AdviceObjt = adviceData.slip;
    resDiv.innerHTML = `<p>${AdviceObjt.advice}</p>`
  });
}

