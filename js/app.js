const btn = document.getElementById("menuButton");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.style.outline = "none";
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
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
function scrolltp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let linksSet = document.querySelectorAll('a[href^="#"]');
linksSet.forEach((link) => {
  link.onclick = function (i) {
    i.preventDefault();

    let href = document.querySelector(this.hash);
    href.scrollIntoView({
      behavior: "smooth",
      duration: "3s",
    });
  };
});
