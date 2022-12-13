includeHTML(function () {
  const navChildrenEl = document.querySelectorAll(".sub.list__item");

  const click = (idx) => {
    navChildrenEl[idx].childNodes[1].onclick = () => {
      navChildrenEl[idx].classList.toggle("on");
    };
  };

  for (var i = 0; i < navChildrenEl.length; i++) {
    click(i);
  }
});
