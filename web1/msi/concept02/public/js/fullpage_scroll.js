let moveCnt = null;
let moveIndex = 0;
let moveCntTop = 0;
let winH = 0;
let winW = 0;
let time = false; // 새로 만든 변수
const $cnt = $(".onepage__wrap");

$(document).ready(function () {
  initEvent();
});

const initEvent = function () {
  $("html ,body").scrollTop(0);
  winResize();
  $(window).resize(function () {
    winResize();
  });
  $cnt.on("mousewheel", function (e) {
    if (time === false) {
      // time 변수가 펄스일때만 휠 이벤트 실행
      990 <= winW && wheel(e);
      console.log(winW);
    }
  });
};

const winResize = function () {
  let winH = $(window).height();
  winW = $(window).width();
  $cnt.children("section").height(winH - 80);
  $cnt.children(".mySwiper").height(winH);
  $("html ,body").scrollTop(
    $cnt.children(".section").eq(moveIndex)[0].offsetTop
  );
};

const wheel = function (e) {
  if (e.originalEvent.wheelDelta < 0) {
    if (moveIndex < 3) {
      moveIndex += 1;
      moving(moveIndex);
    }
  } else {
    if (moveIndex > 0) {
      moveIndex -= 1;
      moving(moveIndex);
    }
  }
};

const moving = function (index) {
  time = true; // 휠 이벤트가 실행 동시에 true로 변경
  moveCnt = $cnt.children(".section").eq(index);
  moveCntTop = moveCnt[0].offsetTop - 80;
  $("html,body")
    .stop()
    .animate(
      {
        scrollTop: moveCntTop,
      },
      1000,
      function () {
        time = false; // 휠 이벤트가 끝나면 false로 변경
      }
    );
};
