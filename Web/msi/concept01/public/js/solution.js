const tabBox = document.querySelector(".tab__box");
const tabTitle = document.querySelector(".tab__title");
const tabSubTitle = document.querySelector(".tab__sub__title");
const tabList = document.querySelector(".tab__list");
const tabImg = document.querySelector(".tab__img");
const tabIcon = document.querySelector(".tab__icon");
const tabImgText = document.querySelector(".tab__img__text");
const imgAniBox = document.querySelector(".solution__box__ani");
const tabArray = [
  "제조 실행 자동화",
  "통합 설비 관리 시스템",
  "설비 운영 시스템",
  "임베디드 솔루션",
];
const tabHtmlArray = [
  {
    title: "제조실행 자동화 (MES)",
    subTitle:
      "ERP와 연동하여 생산계획에 따른 자재, 품질, 생산실행, 자동 반송의 통합 관리/제어",
    list: [
      "장비의 상태/동작을 Digital Twin으로 Solution내에 구현",
      "장비 Modeling만으로 기능/운영 Logic 구현",
      "WorkFlow로 장비별로 다른 운영 Logic을 최적화​",
      "ervice 기능으로 장비 운영 / 관리 최적화",
    ],
    imgText: "Automation",
  },
  {
    title: "통합 설비 관리 시스템",
    subTitle: "통합 설비 관리 시스템 sub title",
    list: [
      "통합 설비 관리 시스템 list 1",
      "통합 설비 관리 시스템 list 2",
      "통합 설비 관리 시스템 list 3",
    ],
    imgText: "Management",
  },
  {
    title: "설비 운영 시스템",
    subTitle: "설비 운영 시스템 sub title",
    list: [
      "설비 운영 시스템 list 1",
      "설비 운영 시스템 list 2",
      "설비 운영 시스템 list 3",
      "설비 운영 시스템 list 4",
      "설비 운영 시스템 list 5",
    ],
    imgText: "Service",
  },
  {
    title: "임베디드 솔루션",
    subTitle: "임베디드 솔루션 sub title",
    list: [
      "임베디드 솔루션 list 1",
      "임베디드 솔루션 list 2",
      "임베디드 솔루션 list 3",
      "임베디드 솔루션 list 4",
    ],
    imgText: "Embedded",
  },
];
const tabClick = (ev) => {
  const clickIndex = tabArray.indexOf(ev);

  const indexChange = () => {
    imgAniBox.classList.remove("ani");
    setTimeout(function () {
      imgAniBox.classList.add("ani");
    }, 000);

    tabTitle.innerText = tabHtmlArray[clickIndex].title;
    tabSubTitle.innerText = tabHtmlArray[clickIndex].subTitle;
    tabImgText.innerText = tabHtmlArray[clickIndex].imgText;
    tabImg.src = `public/img/solution/img_${clickIndex + 1}.jpg`;
    tabIcon.src = `public/img/solution/ic_${clickIndex + 1}.svg`;
    tabList.innerHTML = "";
    tabHtmlArray[clickIndex].list.map((result, index) => {
      tabList.innerHTML += `
        <li class="notosansKr">
        <span>${index + 1}</span>
        <span>${result}</span>
      `;
    });

    for (let i = 0; i < tabBox.children.length; i++) {
      tabBox.children[i].classList.remove("on");
    }
    tabBox.children[clickIndex].classList.add("on");
  };

  tabBox.children[clickIndex].classList.length === 3 && indexChange();
};
