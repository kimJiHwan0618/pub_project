// https://gridjs.io/docs/examples/import-json
let gridSelectedRow = {};

$(function () {
  const fn_gridInit = () => {
    gridInit();
  };

  const gridInit = () => {
    const grid = new gridjs.Grid({
      columns: [
        { name: "날짜", id: "date" },
        { name: "병록번호", id: "patientRegistrationNumber" },
        { name: "이름", id: "name" },
        { name: "성별", id: "male" },
        { name: "나이", id: "age" },
        { name: "초재진", id: "firstReDiagnosis" },
        { name: "담당의", id: "doctorInCharge" },
        { hidden: true, id: "img" }, // 데이터바인딩 뒤 컬럼 숨김
        { hidden: true, id: "email" }, // 데이터바인딩 뒤 컬럼 숨김
        { hidden: true, id: "phone" }, // 데이터바인딩 뒤 컬럼 숨김
        { hidden: true, id: "address" }, // 데이터바인딩 뒤 컬럼 숨김
      ],
      pagination: true,
      sort: true,
      resizable: true,
      data: gridData,
      language: {
        pagination: {
          results: () => {
            $(".patient__detail__notice__txt").removeClass("hide");
            $(".patient__info__top").removeClass("on");
            $(".patient__info__bottom").removeClass("on");
          },
        },
      },
    }).render(document.getElementById("gridEl"));

    grid.on("rowClick", (...args) => {
      // 그리드 js
      $(".gridjs-tr").removeClass("on");
      $(args[0].path[1]).addClass("on");
      gridSelectedRow = args[1].cells;
      // 환자 detail js
      $(".patient__detail__notice__txt").addClass("hide");
      $(".patient__info__top").addClass("on");
      $(".patient__info__bottom").addClass("on");
      $(".patient__profile__name").text(gridSelectedRow[2].data);
      $(".patient__profile__age").text(gridSelectedRow[4].data);
      $(".patient__profile__doctor").text(gridSelectedRow[6].data);
      $(".patient__profile__male").text(gridSelectedRow[3].data);
      $(".patient__registratio__number").val(gridSelectedRow[1].data);
      $(".patient__profile__email").val(gridSelectedRow[8].data);
      $(".patient__profile__phone").val(gridSelectedRow[9].data);
      $(".patient__profile__address").val(gridSelectedRow[10].data);
      $("#calendar02Input").val("");
      $("#calendar03Input").val("");
      $(".custom_calendar_table").remove();
      $(".drug__list li").removeClass("on");
      // console.log(args[1].cells);
    });
  };

  fn_gridInit();
});

$(".search__btn").click(function () {});

$(".custom__btn.modify").click(function () {
  const flag = $(".gridjs-tr.on").length > 0 ? false : true;
  if (flag) {
    alert("환자를 선택해주세요.");
  } else {
    $(".popup__wrap").addClass("on");
    $("#calendar01Input").val(gridSelectedRow[0].data);
    $(".regnum__input").val(gridSelectedRow[1].data);
    $(".name__input").val(gridSelectedRow[2].data);
    $(".male__input").val(gridSelectedRow[3].data);
    $(".age__input").val(gridSelectedRow[4].data);
    $(".fristdoctor__input").val(gridSelectedRow[5].data);
    $(".designated__input").val(gridSelectedRow[6].data);
  }
});

$(".custom__btn.delete").click(function () {
  const flag = $(".gridjs-tr.on").length > 0 ? false : true;
  if (flag) {
    alert("환자를 선택해주세요.");
  } else {
  }
});

$(".pop__close__btn").click(function () {
  $(".popup__wrap").removeClass("on");
});

$("#calendar01").click(function () {
  $(".custom_calendar_table").remove();
  calendarInit(
    $(".calendar01"),
    gridSelectedRow[0].data,
    $("#calendar01Input")
  );
  fn_nowDaySelect(
    $(".calendar01"),
    new Date($("#calendar01Input").val()).getDate()
  );
});

$("#calendar02").click(function () {
  $(".custom_calendar_table").remove();
  calendarInit(".calendar02", "2022-02-14", $("#calendar02Input"));
});

$("#calendar03").click(function () {
  $(".custom_calendar_table").remove();
  calendarInit(".calendar03", "2022-02-14", $("#calendar03Input"));
});

$(".pop__close__btn").click(function () {
  $(".custom_calendar_table").remove();
});

$(".drug__list li").click(function () {
  $(this).toggleClass("on");
});

$(".prescription__btn").click(function () {
  location.href = "/patientCare/prescription.html";
});

$(".treatmentStatus__btn").click(function () {
  location.href = "/treatmentStatus/";
});
