function initCarousel() {
  // ваш код...
  const right = document.querySelector('.carousel__arrow_right');
  const left = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel');
  const carouselImg = document.querySelector('.carousel__inner');

  let position = 0;
  left.style.display = 'none';
  carousel.addEventListener('click', event => {
    let target = event.target;

    console.log(position);
    if (right.contains(target)) {  
      left.style.display = '';
      position++;
      if (position == 3) {
        right.style.display = 'none';
      }
      carouselImg.style.transform = `translateX(-${position * carouselImg.offsetWidth}px)`;
    } else if (left.contains(target)) {
      right.style.display = '';
      position--;
      if (position == 0) {
        left.style.display = 'none';
      }
      carouselImg.style.transform = `translateX(-${position * carouselImg.offsetWidth}px)`;
    }
  });

}
