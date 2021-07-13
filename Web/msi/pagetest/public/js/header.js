includeHTML(function () {
  const menuBarState = {
    active: false,
    pageNum: 0,
  };
  const modalBgEl = document.querySelector(".modal__bg");
  const menuIconEl = document.querySelector("#menuIcon");
  const headerEl = document.querySelector("header");
  const navEl = document.querySelector(".nav__list");
  const mainPageName = document.querySelector("body").getAttribute("id");
  const navListEl = document.querySelectorAll(".nav__list__title");

  menuIconEl.onclick = () => {
    navActive();
  };

  modalBgEl.onclick = () => {
    navActive();
  };

  const navActive = () => {
    menuBarState.active
      ? (menuBarState.active = false)
      : (menuBarState.active = true);

    menuBarState.active
      ? headerEl.classList.add("active")
      : headerEl.classList.remove("active");
  };

  const pageActive = (index) => {
    navEl.children[index].id = "active";
    menuBarState.pageNum = index;
  };

  // 메인메뉴 액티브
  for (let i = 0; i < navEl.children.length; i++) {
    navEl.children[i].children[0].innerText === mainPageName && pageActive(i);
  }
  // 메인메뉴 액티브

  // 메뉴 클릭
  const navListclick = (index) => {
    navListEl[index].onclick = function () {
      this.classList.toggle("on");
      for (let i = 0; i < navListEl.length; i++) {
        if (navListEl[i].children[0].innerText !== this.children[0].innerText) {
          navListEl[i].classList.remove("on");
        }
      }
    };
  };
  for (let i = 0; i < navListEl.length; i++) {
    navListclick(i);
  }
  // 메뉴 클릭

  // includeRouter(function () {});
});
