const toCommaString = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const randomArr = [30000, 50000, 100000, 150000, 200000, 250000, 300000];

var clickEvent = (function () {
  if ("ontouchstart" in document.documentElement === true) {
    return "touchstart";
  } else {
    return "click";
  }
})();

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
shuffle(randomArr);

document.querySelector(".random__text").textContent = toCommaString(
  randomArr[0]
);
// 테스트 수정 06_22
// $(".random__text").text(toCommaString(randomArr[0]));

const el1 = document.querySelectorAll(".step1Click");
const el2 = document.querySelectorAll(".step2Click");

for (let i = 0; i < el1.length; i++) {
  el1[i].addEventListener(clickEvent, function (evt) {
    if (evt.target.textContent === "예금인출") {
      $(".first__step__wrap").css("display", "none");
      $(".second__step__wrap").css("display", "flex");
    } else {
      alert("지문을 다시 읽고\n지시에 따라 행동하세요");
    }
  });
}

for (let i = 0; i < el2.length; i++) {
  el2[i].addEventListener(clickEvent, function (evt) {
    if (evt.target.textContent.trim() !== "취소") {
      if (evt.target.dataset["text"] === $(".random__text").text()) {
        alert("성공");
        fn_callNative(true);
      } else {
        alert("실패");
        fn_callNative(false);
      }
    } else {
      $(".first__step__wrap").css("display", "flex");
      $(".second__step__wrap").css("display", "none");
    }
  });
}

// 테스트 수정 06_22
// $(".first__step__wrap ul li").click(function () {});

// 테스트 수정 06_22
// $(".second__step__wrap ul li").click(function () {});
