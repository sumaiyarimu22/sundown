const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function featuredAnimation() {
  const featuredWrapper = document.querySelector("#featured-wrapper");
  const fixedImage = document.querySelector("#fixed-image");

  featuredWrapper.addEventListener("mouseenter", function () {
    fixedImage.style.display = "block";
  });
  featuredWrapper.addEventListener("mouseleave", function () {
    fixedImage.style.display = "none";
  });

  const elements = document.querySelectorAll(".elem");

  elements.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      let image = el.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${image})`;
    });
  });
}

featuredAnimation();
