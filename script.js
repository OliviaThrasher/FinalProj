
//Hamburger Menu
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigation") {
      x.className += " responsive";  // Add the "responsive" class to show the menu
      document.body.classList.add("responsive-content"); // Add padding to the body
    } else {
      x.className = "navigation"; // Remove the "responsive" class to hide the menu
      document.body.classList.remove("responsive-content"); // Remove padding from the body
    }
  }
  