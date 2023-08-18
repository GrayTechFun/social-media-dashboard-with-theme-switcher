const number1 = document.querySelectorAll(".number1");
const number2 = document.querySelectorAll(".number2");
const btn = document.querySelector(".label");
const rects = document.querySelectorAll(".rect");
const fbs = document.querySelectorAll(".fb");
const title = document.querySelectorAll(".title");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");
const titles = document.querySelectorAll(".title");
const subs = document.querySelectorAll(".sub");

btn.addEventListener("click", () => {
  number1.forEach((number) => number.classList.toggle("white"));
  number2.forEach((number) => number.classList.toggle("white"));
  rects.forEach((rect) => rect.classList.toggle("rect-bgc"));
  fbs.forEach((fb) => fb.classList.toggle("rect-bgc"));
  wrapper.classList.toggle("wrapper-bgc");
  header.classList.toggle("wrapper-bgc");
  titles.forEach((title) => title.classList.toggle("white"));
  subs.forEach((sub) => sub.classList.toggle("grayy"));
});
