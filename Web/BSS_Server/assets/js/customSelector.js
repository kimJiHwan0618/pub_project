window.addEventListener("load", function () {
  const selectorEl = document.querySelectorAll(".selector__label .list");

  const selectorClick = (idx) => {
    selectorEl[idx].onclick = () => {
      selectorEl[idx].parentNode.parentNode.childNodes[1].blur();
    };
  };

  for (var i = 0; i < selectorEl.length; i++) {
    selectorClick(i);
  }
});
