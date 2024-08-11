function burgerToggler() {
   
   let showNav = document.getElementById("showNav");
   let burger = document.getElementById("burger");
   let xIcon = document.getElementById("xIcon");
   let burgerToggler = document.getElementById("burgerToggler");

   showNav.classList.toggle("goLeft");
   burger.classList.toggle("hideBurger");
   xIcon.classList.toggle("showX");
   burgerToggler.classList.toggle("zindexReset");

}

function showHome() {

   let homepage = document.getElementById("homepage");

   homepage.classList.add("showSlide");
}

function showAbout2() {

   let aboutPage = document.getElementById("aboutPage");
   let aboutPage3 = document.getElementById("aboutPage3");
   let homepage = document.getElementById("homepage");

   aboutPage3.classList.add("showSlide");
   aboutPage.classList.add("hideSlide");
   homepage.classList.add("hideSlide");

}


function toWhite() {

   let burger = document.getElementById("burger");
   let xIcon = document.getElementById("xIcon");

   burger.classList.remove("toGray");
   xIcon.classList.remove("toGray");
   burger.classList.add("toWhite");
   xIcon.classList.add("toWhite");

   // section show
   let home = document.getElementById("home");
   let about = document.getElementById("about");
   home.style.display = "flex";
   about.style.display = "flex";

   // disable scroll
   let html = document.getElementById("html");
   let body = document.getElementById("body");
   html.style.overflow = "hidden";
   body.style.overflow = "hidden";
}

function toWhite2() {

   let burger = document.getElementById("burger");
   let xIcon = document.getElementById("xIcon");

   burger.classList.remove("toGray");
   xIcon.classList.remove("toGray");
   burger.classList.add("toWhite");
   xIcon.classList.add("toWhite");

   // section show
   let home = document.getElementById("home");
   let about = document.getElementById("about");
   let contact = document.getElementById("contact");
   let portfolio = document.getElementById("portfolio");


   home.style.display = "flex";
   about.style.display = "flex";
   contact.style.display = "flex";
   portfolio.style.display = "none";


   // disable scroll
   html.style.overflow = "hidden";
   body.style.overflow = "hidden";
   contact.style.overflow = "hidden";

}


function toGray() {

   let burger = document.getElementById("burger");
   let xIcon = document.getElementById("xIcon");

   burger.classList.add("toGray");
   xIcon.classList.add("toWhite");

   // section show/hide
   let home = document.getElementById("home");
   let about = document.getElementById("about");
   
   home.style.display = "flex";
   about.style.display = "flex";
   let portfolio = document.getElementById("portfolio");
   portfolio.style.display = "none";



   // disable scroll
   let html = document.getElementById("html");
   let body = document.getElementById("body");
   html.style.overflow = "hidden"
   body.style.overflow = "hidden"

   
}

function portfolio() {

   let burger = document.getElementById("burger");
   let xIcon = document.getElementById("xIcon");

   burger.classList.add("toGray");
   xIcon.classList.add("toWhite");

   // enablerscroll
   let html = document.getElementById("html");
   let body = document.getElementById("body");
   html.style.overflow = "visible"
   body.style.overflow = "visible"

   // section show/hide
   let home = document.getElementById("home");
   let about = document.getElementById("about");
   let contact = document.getElementById("contact");

   home.style.display = "none";
   about.style.display = "none";
   contact.style.display = "none";

   let portfolio = document.getElementById("portfolio");
   portfolio.style.display = "flex";


}


let portfolio_nav = document.getElementById("portfolio_nav").children;

for (let i = 0; i < portfolio_nav.length; i++) {
   portfolio_nav[i].addEventListener('click', detectButton);
}




function detectButton(ev) {
   let currentButton = ev.target.textContent;
   let webDevItem = document.querySelectorAll(".webDevItem");
   let webDessignItem = document.querySelectorAll(".webDessignItem");
   let photographyItem = document.querySelectorAll(".photographyItem");



   if (currentButton ===  portfolio_nav[0].innerHTML) {
      for(let i = 0; i < webDessignItem.length; i++) {
         webDessignItem[i].style.display = "flex";
      }
      for(let i = 0; i < webDevItem.length; i++) {
         webDevItem[i].style.display = "none";
      }
      for(let i = 0; i < photographyItem.length; i++) {
         photographyItem[i].style.display = "none";
      }
   }

   else if (currentButton ===  portfolio_nav[1].innerHTML) {
      for(let i = 0; i < webDessignItem.length; i++) {
         webDessignItem[i].style.display = "none";
      }
      for(let i = 0; i < webDevItem.length; i++) {
         webDevItem[i].style.display = "flex";
      }
      for(let i = 0; i < photographyItem.length; i++) {
         photographyItem[i].style.display = "none";
      }
   }

   else {
      for(let i = 0; i < webDessignItem.length; i++) {
         webDessignItem[i].style.display = "none";
      }
      for(let i = 0; i < webDevItem.length; i++) {
         webDevItem[i].style.display = "none";
      }
      for(let i = 0; i < photographyItem.length; i++) {
         photographyItem[i].style.display = "flex";
      }
   }

}












