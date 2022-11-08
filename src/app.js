/* Navbar Toggle */

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

/* let, if, else, alert, prompt */
alert("Hi! Welcome to my website!\nYou get a virtual cookie🍪");

var name = prompt("What is your name?");
if (name == null || name == "") {
  txt = "I see that you have not responded... Welcome then Anonymous";
} else {
  txt = "Hello, " + name + "!";
}
alert(txt);

/* My Event is on my blog page */
