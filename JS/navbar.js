//This code is to actuate the hamburger menu at the top of the page

const menu = document.querySelector(".menu");

//Here comes the instruction to hide the options for the menu once one of them is selected
const menuItems = document.querySelectorAll(".menuItem");

const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburger.style.color = "black";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburger.style.color = "#F2F4FC";
  }
}

hamburger.addEventListener("click", toggleMenu);


//A click on any of the options should close the menu, calling the function in that case will close the hamburger menu, since it must be open for the clicking in the first place

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
