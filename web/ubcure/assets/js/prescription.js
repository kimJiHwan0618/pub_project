$(function () {
  $("#calendar01").click(function () {
    $(".custom_calendar_table").remove();
    calendarInit(".calendar01", "2022-02-14", $("#calendar01Input"));
  });

  // 12주 템플릿 만들기
  const templateInit = () => {
    for (let i = 0; i < 12; i++) {
      $(".prescription__bottom").append(`
        <div class="week__list__item">
          <div class="title__wrap">
            <h4>${i + 1}주차</h4>
            <button class="custom__btn delete small">
              <span>
                <img src="../assets/images/icon/ic-remove.svg" alt="삭제 아이콘"></img>
              </span>
              <p>비우기</p>
            </button>
          </div>
          <ul>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_01"
            >
              <p class="day__num">1</p>
            </li>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_02"
            >
              <p class="day__num">2</p>
            </li>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_03"
            >
              <p class="day__num">3</p>
            </li>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_04"
            >
              <p class="day__num">4</p>
            </li>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_05"
            >
              <p class="day__num">5</p>
            </li>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_06"
            >
              <p class="day__num">6</p>
            </li>
            <li class="box__shadow__03" 
                ondrop="drop(event, 'add')"
                ondragover="allowDrop(event)"
                id="drageItem${i}_07"
            >
              <p class="day__num">7</p>
            </li>
          </ul>
        </div>
      `);
    }
    $(".custom__btn.delete").click(function () {
      $(".week__list__item").remove()
      templateInit()
    })
  }
  // // 12주 템플릿 만들기

  $(".category__list li").click(function () {
    $(this).toggleClass("on");

    if ($(".category__list li.on").length !== $(".category__list li").length) {
      $('input:checkbox[id="checkbox01"]').attr("checked", false);
    }
    if ($(".category__list li.on").length === $(".category__list li").length) {
      $('input:checkbox[id="checkbox01"]').attr("checked", true);
    }
  });

  $("#checkbox01").change(function () {
    if ($(this).is(":checked")) {
      $(".category__list li").addClass("on");
    } else {
      $(".category__list li").removeClass("on");
    }
  });

  templateInit()
  $(".custom__btn.delete").click(function () {
    $(".week__list__item").remove()
    templateInit()
  })
});
