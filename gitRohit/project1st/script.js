const btn = document.querySelector(".mobile1");
const btn1 = document.querySelector(".mobile2");
btn.addEventListener("click", () => {
  //   document.querySelector(".parent").classList.add("transit");
  document.querySelector(".parent").style.display = "flex";
});
btn1.addEventListener("click", () => {
  //   document.querySelector(".parent").classList.remove("transit");

  document.querySelector(".parent").style.display = "none";
});

// Sliding effect
let trans = 0;
const slide_next = document.querySelector(".slide-next");
const slide_prev = document.querySelector(".slide-prev");
slide_next.addEventListener("click", () => {
  let slides = Array.from(document.querySelectorAll(".slide-img"));
  trans -= 100;
  if (trans == -400) trans = 0;
  slides.forEach((key) => {
    key.style.transform = `translateX(${trans}%)`;
  });
});

slide_prev.addEventListener("click", () => {
  let slides = Array.from(document.querySelectorAll(".slide-img"));
  trans += 100;
  if (trans == 100) trans = -300;

  slides.forEach((key) => {
    key.style.transform = `translateX(${trans}%)`;
  });
});
