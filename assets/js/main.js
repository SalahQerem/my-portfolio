const nav = document.querySelector("nav");
const header = document.querySelector("header");
const navlinks = document.querySelectorAll("ul li .nav-link");
const sayHelloLink = document.querySelector(".say-hello");
const submitBtn = document.querySelector(".form-container button");
const personalInfoSection = document.querySelector(".personal-info");
const backToTop = document.querySelector("#back-to-top");
const mainSections = document.querySelectorAll(
  "nav, body > section:not(#personal-links, #back-to-top)"
);
const personalImg = document.querySelector(".personal-img");
const personalInfo = document.querySelector(".personal-info");
const personalImgSlider = document.querySelector(".personal-img-slider");
const personalInfoSlider = document.querySelector(".personal-info-slider");

personalImgSlider.style.width = `${personalImg.clientWidth}px`;
personalImgSlider.style.height = `${personalImg.clientHeight}px`;
personalInfoSlider.style.width = `${personalInfo.clientWidth}px`;
personalInfoSlider.style.height = `${personalInfo.clientHeight}px`;

console.log(personalImg.clientWidth);

window.addEventListener("DOMContentLoaded", function () {
  personalImg.style.right = "0";
  personalImg.style.opacity = "1";
  personalInfo.style.top = "0";
  personalInfo.style.opacity = "1";
});

window.addEventListener("scroll", function () {
  if (this.window.scrollY > header.offsetTop) {
    nav.style.backgroundColor = "#fff";
  } else {
    nav.style.backgroundColor = "transparent";
  }

  if (this.window.scrollY > personalInfoSection.offsetTop) {
    backToTop.style.bottom = "3%";
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.bottom = "-20px";
    backToTop.style.opacity = "0";
  }

  mainSections.forEach((section) => {
    if (this.window.scrollY > section.offsetTop - 300) {
      const targetLink = document.querySelector(
        `a[href="#${section.getAttribute("id")}"]`
      );
      document.querySelector(".nav-link.active").classList.remove("active");
      targetLink.classList.add("active");
    }
  });
});

backToTop.addEventListener("click", function () {
  window.scroll({ top: 0, behavior: "smooth" });
});

submitBtn.addEventListener("click", function () {
  e.preventDefault();
});

navlinks.forEach((navlink) =>
  navlink.addEventListener("click", function (e) {
    e.preventDefault();
    let targetSection = document.querySelector(this.getAttribute("href"));
    document.querySelector(".nav-link.active").classList.remove("active");
    navlink.classList.add("active");
    window.scroll({ top: targetSection.offsetTop - 90, behavior: "smooth" });
  })
);

sayHelloLink.addEventListener("click", function (e) {
  e.preventDefault();
  let targetSection = document.querySelector(sayHelloLink.getAttribute("href"));
  window.scroll({ top: targetSection.offsetTop - 90, behavior: "smooth" });
});
