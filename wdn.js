function expandSearch(){
    document.getElementById("search-box").style.width="12rem";
    document.getElementById("search-close-btn").style.display="block";
  }
  function collapseSearch(){
    document.getElementById("search-box").style.width="1.8rem";
    document.getElementById("search-close-btn").style.display="none";
}
    const inputElement = document.getElementById("search-box");
    inputElement.addEventListener('focus', () => {
      inputElement.style.animation = 'blink 1.5s infinite';
    });
    inputElement.addEventListener('input',() => {
      inputElement.style.animation = 'none';
    });
    inputElement.addEventListener('blur',() => {
      inputElement.style.animation = 'none';
    });
  function toggleDropdown(id,value){
var dropDown= document.getElementById(id);

if (value=="show") {
  dropDown.style.display="block";
} else {
  dropDown.style.display="none";
  
}
}

function toggleDropOnclick(id) {
    var dropDown= document.getElementById(id);
    if (dropDown.style.display=="block") {
      dropDown.style.display="none";
    } else {
      dropDown.style.display="block";
    }
  
}
 
  function showTheme(){
    var theme= document.getElementById("theme-box");
    if (theme.style.display=="flex") {
      theme.style.display="none";
    } else {
      theme.style.display="flex";
    }
    var themeBtn=document.getElementById("theme-btn");
    if (themeBtn.style.backgroundColor=="black"){
      themeBtn.style.backgroundColor="#1b1b1b";
      themeBtn.style.border="none";
      themeBtn.style.boxShadow="none";
    } else {
      themeBtn.style.backgroundColor="black";
      themeBtn.style.border=".1rem solid #ff9860";
    themeBtn.style.boxShadow="0rem 0rem .2rem 0rem #ff9860";
    }
  }
  function setTheme(theme) {
    var header = document.getElementById("header");
    var mainPage = document.querySelector('.main-page');
    var spotLight = document.querySelector('.cont-spotlight');
    var themeBtn = document.getElementById("theme-icon");
    if (theme === "light") {
      header.classList.add('light-mode');
      mainPage.classList.add('light-mode');
      spotLight.classList.add('light-mode');
      themeBtn.classList.remove('fa-solid', 'fa-moon');
      themeBtn.classList.remove('fa', 'fa-adjust');
      themeBtn.classList.add('fa-solid', 'fa-sun-bright');
    } else {
      header.classList.remove('light-mode');
      mainPage.classList.remove('light-mode');
      spotLight.classList.remove('light-mode');
      themeBtn.classList.remove('fa-solid', 'fa-sun-bright');
      themeBtn.classList.add('fa-solid', 'fa-moon');
    }
    // Store the user's preferred theme in local storage
    localStorage.setItem('theme', theme);
  }
  // Check if the user has a preferred theme saved in local storage
  var savedTheme = localStorage.getItem('theme');
  // If a saved theme exists, use that theme, otherwise use the default (light mode)
  if (savedTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
  // Add event listeners to the theme buttons to toggle the theme
  document.getElementById('dark-mode-btn').addEventListener('click', function() {
    setTheme('dark');
  });
  document.getElementById('light-mode-btn').addEventListener('click', function() {
    setTheme('light');
  });
function logoAnimation(value){
var logo = document.getElementById("logo-w");
if (value=='start') {
  logo.classList.add('animate__jello');
} else {
  logo.classList.remove('animate__jello');
}
}

function showMenu() {
  var links = document.querySelector('.q-links');
  var icons = document.querySelector('.icon-container');
  var buttons = document.querySelector('.button-container');

  links.classList.toggle('header-box');
  icons.classList.toggle('header-box');
  buttons.classList.toggle('header-box');
 
  
  
}

