const ShowMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId),
    sections = document.querySelector("section")

  if (headerToggle && navbarId) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      toggleBtn.classList.toggle("bx-x");
      sections.classList.toggle("section__active")
    })
  }
}
ShowMenu("header-toggle", "navbar");

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll(".nav__link");
//const sections = document.querySelector("section")
function colorLink() {
  linkColor.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  //sections.classList.toggle("section__active")
}
linkColor.forEach(item => item.addEventListener("click", colorLink));
