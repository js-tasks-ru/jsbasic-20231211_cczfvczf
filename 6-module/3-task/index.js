import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = slides;
  }

  set elem(slides) {
    let position = 0;

    let carousel = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>


    </div>`);
    let carouselInner = createElement(`<div class="carousel__inner"></div>`);

    slides.forEach(function (slide) {
      let slideElement = createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button" data-id="${slide.id}">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`);
      carouselInner.append(slideElement);
    });
    carousel.append(carouselInner);

    const right = carousel.querySelector(".carousel__arrow_right");
    const left = carousel.querySelector(".carousel__arrow_left");
    const carouselImg = carousel.querySelector(".carousel__inner");

    left.style.display = "none";
    carousel.addEventListener("click", (event) => {
      let target = event.target;

      if (right.contains(target)) {
        left.style.display = "";
        position++;
        if (position == slides.length - 1) {
          right.style.display = "none";
        }
        carouselImg.style.transform = `translateX(-${
          position * carouselImg.offsetWidth
        }px)`;
      } else if (left.contains(target)) {
        right.style.display = "";
        position--;
        if (position == 0) {
          left.style.display = "none";
        }
        carouselImg.style.transform = `translateX(-${
          position * carouselImg.offsetWidth
        }px)`;
      }
    });

    carousel.addEventListener("click", (event) => {
      let btnPlus = event.target.closest(".carousel__button");
      if (carousel.contains(btnPlus)) {
        let slideId = btnPlus.getAttribute("data-id");
        carousel.dispatchEvent(
          new CustomEvent("product-add", {
            detail: slideId,
            bubbles: true,
          })
        );
      }
    });
    this.carousel = carousel;
    return this.carousel;
  }

  get elem() {
    return this.carousel;
  }
}
