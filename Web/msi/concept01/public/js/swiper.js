const historyTextList = document.querySelector(".historyList");
const yearBtnWrap = document.querySelector(".year__btn__wrap");
const yearText = document.querySelector(".yearText");
const historyList = [
  ["“TE”社 Laser Demo. Test System", "“E”社 ​ Inkjet Printing System"],
  [
    "2018 history list1",
    "2018 history list2",
    "2018 history list3",
    "2018 history list4",
  ],
  ["2020 history list1", "2020 history list2", "2020 history list3"],
];

const yearArray = ["2017", "2018", "2020"];

const moveSwiper = (index) => {
  yearText.innerHTML = yearArray[index];
  for (let i = 0; i < yearBtnWrap.children.length; i++) {
    yearBtnWrap.children[i].classList.remove("on");
  }
  yearBtnWrap.children[index].classList.add("on");

  historyTextList.innerHTML = "";
  historyList[index].map((result, index) => {
    historyTextList.innerHTML += `
    <li>
      <span>0${index + 1}ㆍ</span> 
      <span>${result}</span>
    </li>
    `;
  });
};

const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    activeIndexChange: function () {
      moveSwiper(this.realIndex);
    },
  },
});

const swipeYearClick = (ev) => {
  const clickIndex = yearArray.indexOf(ev);
  const swipePlayTime = Math.abs(clickIndex - swiper.realIndex);

  const slideNext = () => {
    for (let i = 0; i < swipePlayTime; i++) {
      swiper.slideNext();
    }
  };
  const slidePrev = () => {
    for (let i = 0; i < swipePlayTime; i++) {
      swiper.slidePrev();
    }
  };

  moveSwiper(clickIndex);

  clickIndex > swiper.realIndex ? slideNext() : slidePrev();
};
