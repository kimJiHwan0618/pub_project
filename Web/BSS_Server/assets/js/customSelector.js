window.addEventListener("load", function () {
  const selectorEl = document.querySelectorAll(".selector__label .list");
  const list = document.querySelectorAll(".list a");
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = (e) => {
      e.preventDefault();
    };
  }

  const selectorClick = (idx) => {
    selectorEl[idx].onclick = () => {
      console.log(selectorEl[idx].parentNode.parentNode.childNodes[1]);
      selectorEl[idx].parentNode.parentNode.childNodes[1].blur();
    };
  };

  for (var i = 0; i < selectorEl.length; i++) {
    selectorClick(i);
  }
});
