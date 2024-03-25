$(function () {
  for (let i = 0; i < testData.length; i++) {
    $(".abstinence__progress .progress__list").append(`
      <dl>
        <dt>${i + 1}</dt>
        <dd>
          <ul id="abstinenceRawWeek${i}"></ul>
        </dd>
      </dl>
    `);
    $(".medicine__progress .progress__list").append(`
    <dl>
      <dt>${i + 1}</dt>
      <dd>
        <ul id="medicineRawWeek${i}"></ul>
      </dd>
    </dl>
  `);
    for (let j = 0; j < testData[i].length; j++) {
      const activeFlag =
        testData[i][j].flag === "suc" ? "<li class='on'></li>" : "<li></li>";
      $(`#abstinenceRawWeek${i}`).append(`
        ${activeFlag}
      `);
      $(`#medicineRawWeek${i}`).append(`
        ${activeFlag}
      `);
    }
  }
  ////////////////////////////////
  for (let i = 0; i < testData2.length; i++) {
    lineChartInit(
      `chart0${i + 1}`,
      testData2[i].name,
      testData2[i].colors,
      testData2[i].colorIndex,
      testData2[i].data
    );
  }
  ////////////////////////////////
  $(".page__section__state__wrap .button__wrap button").click(function () {
    $(".contents__train").css("left", $(this).index() * -100 + "%");
    $(".page__section__state__wrap .button__wrap button").addClass("off");
    $(this).removeClass("off");
  });
  // ////////////////////////////
  for (let i = 0; i < testData3.length; i++) {
    $(".week__status__wrap").append(`
      <dl>
        <dt>${i + 1}주차</dt>
        <dd>
          <ul class="education__status__item__${i}"></ul>
        </dd>
      </dl>
    `);
    for (let j = 0; j < testData3[i].length; j++) {
      let itemState = "";
      switch (testData3[i][j].state) {
        case "":
          itemState = "";
          break;
        case false:
          itemState = "ing";
          break;
        case true:
          itemState = "complete";
          break;
      }
      $(`.education__status__item__${i}`).append(`
        <li class="${itemState}"></li>
      `);
    }
  }
  // /////////////////////////////
  lineChartInit(
    `quizChart`,
    testData4.name,
    testData4.colors,
    testData4.colorIndex,
    testData4.data
  );
});
