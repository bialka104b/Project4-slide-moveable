import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const imagesContainerElement = document.querySelector(".slider__images-container");
  const img1Element = document.querySelector(".slider__image-container--first img");
  const img2Element = document.querySelector(".slider__image-container--second img");


  function adjustImagesSize() {
    const imagesContainerWidth = imagesContainerElement.offsetWidth;
    img1Element.style.width = imagesContainerWidth + "px";
    img2Element.style.width = imagesContainerWidth + "px";
  }
  window.addEventListener("resize", addjustImageSize());
  addjustImageSize();
  
});
