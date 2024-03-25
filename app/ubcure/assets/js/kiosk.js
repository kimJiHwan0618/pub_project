const pageInit = () => {
  const randomArr = [
    "에스프레소",
    "아메리카노",
    "라떼",
    "홍차",
    "녹차",
    "민트차",
    "아이스티",
    "오렌지 주스",
    "수박 주스",
    "블루베리 주스",
    "딸기 주스",
    "케일 주스",
    "당근 주스",
    "호밀빵",
    "참깨빵",
    "초코칩 쿠키",
    "아이싱 쿠키",
    "도넛",
  ];

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
  shuffle(randomArr);

  document.querySelector(".random__text").textContent = randomArr[0];

  // 테스트 06_22
  //  $(".random__text").text(randomArr[0]);

  var clickEvent = (function () {
    if ("ontouchstart" in document.documentElement === true) {
      return "touchstart";
    } else {
      return "click";
    }
  })();

  const el1 = document.querySelectorAll(".tab__title");
  const el2 = document.querySelectorAll(".item");
  const el3 = document.querySelector(".back__btn");

  for (let i = 0; i < el1.length; i++) {
    el1[i].addEventListener(clickEvent, function (evt) {
      $(".tab__title__list li").removeClass("on");
      el1[i].classList.add("on");

      $(".img__wrap").removeClass("on");
      $(".img__wrap").eq(i).addClass("on");
    });
  }

  for (let i = 0; i < el2.length; i++) {
    el2[i].addEventListener(clickEvent, function (evt) {
      $(".img__wrap").removeClass("on");
      $(".tab__title__list").removeClass("on");

      $(".result__title").text(el2[i].childNodes[3].childNodes[1].textContent);
      $(".result__amount").text(el2[i].childNodes[3].childNodes[3].textContent);

      if ($(".random__text").text() === $(".result__title").text()) {
        alert("성공");
        fn_callNative(true);
      } else {
        alert("실패");
        fn_callNative(false);
      }
    });
  }

  el3.addEventListener(clickEvent, function (evt) {
    $(".tab__title__list").addClass("on");
    let activeIndex = 0;
    for (let i = 0; i < $(".tab__title__list").children().length; i++) {
      if ($(".tab__title__list li").eq(i).hasClass("on")) {
        activeIndex = i;
      }
    }
    $(".img__wrap").eq(activeIndex).addClass("on");
  });
};

pageInit();
// 테스트 수정 06_22
// window.onpageshow = function () {};
