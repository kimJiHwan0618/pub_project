const tbodyEl = document.querySelector(".gridjs-tbody").children;

const tableRowClick = (index) => {
  tbodyEl[index].onclick = function () {
    this.classList.add("on");
  };
};

for (let i = 0; i < tbodyEl.length; i++) {
  tbodyEl[i].classList.remove("on");
  tableRowClick(i);
}
