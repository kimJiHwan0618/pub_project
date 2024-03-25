const calendarInit = (calendarEl, date, inputEl) => {
  (function () {
    calendarMaker(calendarEl, new Date(date));
  })();

  var nowDate = new Date();
  function calendarMaker(target, date) {
    let selectedYear = "";
    let selectedMonth = "";

    if (date == null || date == undefined) {
      date = new Date();
    }
    nowDate = date;
    if ($(target).length > 0) {
      let year = nowDate.getFullYear();
      let month = nowDate.getMonth() + 1;
      $(target).empty().append(assembly(year, month));
    } else {
      console.error("custom_calendar Target is empty!!!");
      return;
    }

    let thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    let thisLastDay = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth() + 1,
      0
    );

    let tag = "<tr>";
    let cnt = 0;
    //빈 공백 만들어주기
    for (i = 0; i < thisMonth.getDay(); i++) {
      tag += "<td></td>";
      cnt++;
    }

    //날짜 채우기
    for (i = 1; i <= thisLastDay.getDate(); i++) {
      if (cnt % 7 == 0) {
        tag += "<tr>";
      }

      tag += "<td>" + i + "</td>";
      cnt++;
      if (cnt % 7 == 0) {
        tag += "</tr>";
      }
    }
    $(target).find("#custom_set_date").append(tag);
    calMoveEvtFn();

    function assembly(year, month) {
      selectedYear = year;
      selectedMonth = month;

      let calendar_html_code =
        "<table class='custom_calendar_table'>" +
        "<colgroup>" +
        "<col style='width:81px'/>" +
        "<col style='width:81px'/>" +
        "<col style='width:81px'/>" +
        "<col style='width:81px'/>" +
        "<col style='width:81px'/>" +
        "<col style='width:81px'/>" +
        "<col style='width:81px'/>" +
        "</colgroup>" +
        "<thead class='cal_date'>" +
        "<th><button type='button' class='prev'><</button></th>" +
        "<th colspan='5'><p><span>" +
        year +
        "</span>년 <span>" +
        month +
        "</span>월</p></th>" +
        "<th><button type='button' class='next'>></button></th>" +
        "</thead>" +
        "<thead  class='cal_week'>" +
        "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
        "</thead>" +
        "<tbody id='custom_set_date'>" +
        "</tbody>" +
        "</table>";
      return calendar_html_code;
    }

    function calMoveEvtFn() {
      //전달 클릭
      $(".custom_calendar_table").on("click", ".prev", function () {
        nowDate = new Date(
          nowDate.getFullYear(),
          nowDate.getMonth() - 1,
          nowDate.getDate()
        );
        calendarMaker($(target), nowDate);
      });
      //다음날 클릭
      $(".custom_calendar_table").on("click", ".next", function () {
        nowDate = new Date(
          nowDate.getFullYear(),
          nowDate.getMonth() + 1,
          nowDate.getDate()
        );
        calendarMaker($(target), nowDate);
      });
      //일자 선택 클릭
      $(".custom_calendar_table").on("click", "td", function () {
        if ($(this).removeClass("select_day").text() !== "") {
          $(".custom_calendar_table .select_day").removeClass("select_day");
          $(this).removeClass("select_day").addClass("select_day");
          selectedMonth < 10
            ? (selectedMonth = "0" + String(selectedMonth))
            : (selectedMonth = selectedMonth);
          let selectedDate =
            $(this).text() < 10 ? "0" + String($(this).text()) : $(this).text();
          inputEl.val(`${selectedYear}-${selectedMonth}-${selectedDate}`);
          $(".custom_calendar_table").remove();
        }
      });
    }
  }
};

const fn_nowDaySelect = (calendarEl, day) => {
  const trEl = calendarEl.children().children("#custom_set_date").children();
  for (let i = 0; i < trEl.length; i++) {
    for (let j = 0; j < $(trEl[i]).children().length; j++) {
      if ($(trEl[i]).children().eq(j).text() === String(day)) {
        $(trEl[i]).children().eq(j).addClass("select_day");
      }
    }
  }
};
