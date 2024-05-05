document.addEventListener("DOMContentLoaded", () => {
  /* Jump to content */
  const jumpToContent = document.getElementById("jumpToContent");
  jumpToContent.addEventListener("focus", () => {
    this.classList.remove("visually__hidden");
  });

  jumpToContent.addEventListener("blur", () => {
    this.classList.add("visually__hidden");
  });

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
