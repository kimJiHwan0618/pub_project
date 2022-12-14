includeHTML(function () {

  const selectorEl = document.querySelectorAll(".selector__label");

  const selectorClick = (idx) => {
    selectorEl[idx].onclick = () => {
      console.log(selectorEl[idx])
    }
  }

  for (var i = 0; i < selectorEl.length; i++) {
    selectorClick(i);
  }

})