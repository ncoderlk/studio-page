const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");
const l5 = document.querySelector(".l5");
//Text Viwer
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");

l1.addEventListener("click", () => {
  t1.style.display = "block";
  t2.style.display = "none";
  t3.style.display = "none";
  t4.style.display = "none";
  t5.style.display = "none";
});
l2.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "block";
  t3.style.display = "none";
  t4.style.display = "none";
  t5.style.display = "none";
});
l3.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "none";
  t3.style.display = "block";
  t4.style.display = "none";
  t5.style.display = "none";
});
l4.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "none";
  t3.style.display = "none";
  t4.style.display = "block";
  t5.style.display = "none";
});
l5.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "none";
  t3.style.display = "none";
  t4.style.display = "none";
  t5.style.display = "block";
});
