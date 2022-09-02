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
