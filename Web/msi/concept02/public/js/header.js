includeHTML(function () {
  const menuBarState = {
    active: false,
  };
  const menuIconEl = document.querySelector("#menuIcon");
  const headerEl = document.querySelector("header");
  const navListEl = document.querySelectorAll(".navi__menu__list");

  menuIconEl.onclick = () => {
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
