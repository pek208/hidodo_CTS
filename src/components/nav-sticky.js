document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".global-nav-bar");
  const targetSection = document.querySelector(".step06");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navBar.classList.add("unsticky");
        } else {
          navBar.classList.remove("unsticky");
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px",
    }
  );

  observer.observe(targetSection);
});
