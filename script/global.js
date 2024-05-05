document.addEventListener("DOMContentLoaded", () => {

  /* Links */
  const menuLinks = document.querySelectorAll(".nav__main--a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      menuLinks.forEach((link) => {
        link.classList.remove("nav__link--active");
        link.removeAttribute("aria-current");
      });

      this.classList.add("nav__link--active");
      this.setAttribute("aria-current", "page");
    });
  });
});
