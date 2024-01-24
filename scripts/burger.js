const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-nav");
export function burgerMenu() {
  function toggleScroll() {
    if (
      burger.classList.contains("is-active") &&
      mobileMenu.classList.contains("is-active") &&
      window.innerWidth < 1024
    ) {
      if (document.querySelector(".contact__heading")) {
        document.querySelector(".contact__heading").style.display = "none";
      }
      
      document.body.style.overflow = "hidden";
    } else {
      if (document.querySelector(".contact__heading")) {
        document.querySelector(".contact__heading").style.display = "block";
      }
      
      document.body.style.overflow = "";
    }
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
    toggleScroll();
  });

  window.addEventListener("resize", () => {
    
    toggleScroll();
  });
}
