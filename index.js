const ratio = 0.7;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      entry.target.classList.add("left-visible");
      //   entry.target.classList.add("anim-card-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".left").forEach(function (r) {
  observer.observe(r);
});
// document.querySelector(".anim-card").forEach(function (r) {
//   observer.observe(r);
// });

//CUNTER

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 58, 1000);
  counter("count2", 0, 100, 1000);
  counter("count3", 0, 20, 1000);
});
