const btn = document.getElementById("menuButton");
const menu = document.getElementById("menu");
// const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  btn.style.outline = "none";
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
// nav.addEventListener("click", () => {
//   nav.classList.toggle("sticky");
//   nav.classList.toggle("relative");
// });
// // Define selector for selecting
// // anchor links with the hash
// let anchorSelector = 'a[href^="#"]';

// // Collect all such anchor links
// let anchorList =
//   document.querySelectorAll(anchorSelector);

// // Iterate through each of the links
// anchorList.forEach(link => {
//   link.onclick = function (e) {

//     // Prevent scrolling if the
//     // hash value is blank
//     e.preventDefault();

//     // Get the destination to scroll to
//     // using the hash property
//     let destination =
//       document.querySelector(this.hash);

//     // Scroll to the destination using
//     // scrollIntoView method
//     destination.scrollIntoView({
//       behavior: 'smooth'
//     });
//   }
// });
