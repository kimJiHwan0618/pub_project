includeHTML(function () {
  // 메뉴리스트 클릭
  const navChildrenEl = document.querySelectorAll(".sub.list__item");

  const subMenuClick = (idx) => {
    navChildrenEl[idx].childNodes[1].onclick = () => {
      navChildrenEl[idx].classList.toggle("on");
    };
  };

  for (var i = 0; i < navChildrenEl.length; i++) {
    subMenuClick(i);
  }
  ////  메뉴리스트 클릭

  // 메뉴바 활성화 토클
  const onBtn = document.querySelector("#menuOn")
  const offBtn = document.querySelector("#menuOff")
  const nav = document.querySelector(".main__nav")
  const modelBg = document.querySelector(".modal__bg")

  onBtn.onclick = () => {
    nav.classList.remove("hide")
    onBtn.classList.add("hide")
  }
  modelBg.onclick = () => {
    nav.classList.add("hide")
    onBtn.classList.remove("hide")
  }
  offBtn.onclick = () => {
    nav.classList.add("hide")
    onBtn.classList.remove("hide")
  }
  // // 메뉴바 활성화 토클

});
