includeHTML(function () {
  const swipeData = {
    screenHalfWidth: Number,
    touchStartPosition: Number,
    activeIndex: 0,
    beforeActiveIndex: 0,
    slideActiveMoving: 0,
    touchEndPosition: Number,
    screenWidth: Number,
  };
  const swiperBtnEl = document.querySelector(".sub__page__nav").children;
  const swiperListEl = document.querySelectorAll(".swipe_info_wrap");
  swipeData.screenWidth = window.innerWidth;
  swipeData.screenHalfWidth = window.innerWidth / 2;

  // 메뉴 클릭
  const swiperBtnClick = (index) => {
    swiperBtnEl[index].onclick = function () {
      removeAni();
      swipeData.activeIndex = index;

      if ((swipeData.activeIndex === swipeData.beforeActiveIndex) === false) {
        swipeAni();
        scrollMove();
      } else {
        swiperListEl[index].classList.add("ani");
        return false;
      }
    };
  };
  for (let i = 0; i < swiperBtnEl.length; i++) {
    swiperBtnClick(i);
  }
  // 메뉴 클릭

  const swipeAni = () => {
    swiperBtnEl[swipeData.beforeActiveIndex].classList.remove("on");
    swiperBtnEl[swipeData.activeIndex].classList.add("on");

    setTimeout(function () {
      for (let i = 0; i < swiperListEl.length; i++) {
        swiperListEl[i].classList.remove("on");
      }
      swiperListEl[swipeData.activeIndex].classList.add("on");
      swiperListEl[swipeData.activeIndex].classList.add("ani");
    }, 300);
  };

  const scrollMove = () => {
    screenWidth = window.innerWidth;
    if (screenWidth > 1280) {
      window.scrollTo(504, 504);
    } else if (screenWidth > 980 && screenWidth < 1280) {
      window.scrollTo(467, 467);
    } else {
      window.scrollTo(307, 307);
    }
  };

  const swipeStart = (evt) => {
    swipeData.touchStartPosition = evt.changedTouches[0].clientX;
  };

  const swipeMove = (evt) => {
    swipeData.slideActiveMoving =
      (swipeData.touchStartPosition - evt.changedTouches[0].clientX) / 1.5;
  };

  const swipeEnd = (evt) => {
    swipeData.touchEndPosition = evt.changedTouches[0].clientX;
    if (Math.abs(swipeData.slideActiveMoving) > swipeData.screenHalfWidth / 2) {
      removeAni();
      // 스와이프 오른쪽
      if (swipeData.touchEndPosition > swipeData.screenHalfWidth) {
        swipeData.activeIndex = swipeData.activeIndex - 1;
        swipeData.beforeActiveIndex = swipeData.activeIndex + 1;
        if (swipeData.activeIndex === -1) {
          swipeData.activeIndex = swiperListEl.length - 1;
          swipeData.beforeActiveIndex = 0;
        }
      }
      // 스와이프 왼쪽
      else {
        swipeData.activeIndex = swipeData.activeIndex + 1;
        swipeData.beforeActiveIndex = swipeData.activeIndex - 1;
        if (swipeData.activeIndex === swiperListEl.length) {
          swipeData.activeIndex = 0;
          swipeData.beforeActiveIndex = swiperListEl.length - 1;
        }
      }
      swipeAni();
      scrollMove();
    }
    swipeData.slideActiveMoving = 0;
  };

  const removeAni = () => {
    for (let i = 0; i < swiperListEl.length; i++) {
      swiperListEl[i].classList.remove("ani");
      if (swiperBtnEl[i].className === "on") {
        swipeData.beforeActiveIndex = i;
      }
    }
  };

  window.addEventListener("touchstart", swipeStart, false);
  window.addEventListener("touchmove", swipeMove, false);
  window.addEventListener("touchend", swipeEnd, false);

  const pageSection = (key) => {
    return new URLSearchParams(location.search).get(key);
  };
  swipeData.activeIndex = pageSection("section") - 1;
  console.log(swipeData.activeIndex);
  swiperBtnEl[swipeData.activeIndex].classList.add("on");
  swiperListEl[swipeData.activeIndex].classList.add("on");
  swiperListEl[swipeData.activeIndex].classList.add("ani");
});
