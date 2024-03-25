const top5ElArr = [
  $(".treatment__course__top5__list"),
  $(".attendance__top5__list"),
  $(".abstinence__top5__list"),
  $(".taking__medicine__top5__list"),
];
for (let j = 0; j < top5ElArr.length; j++) {
  for (let i = 0; i < testUserList.length; i++) {
    top5ElArr[j].append(`
    <li>
      <dl>
        <dt>
          <ul>
            <li class="rang__num f__bold">${testUserList[i].rang}</li> 
            <li>
              <dl>
                <dt>${testUserList[i].name} (${testUserList[i].gender}, ${testUserList[i].age}세)</dt>
                <dd class="f__medium">
                  <dl>
                    <dt>교육시작일 :</dt>
                    <dd>${testUserList[i].startStduy}</dd>
                  </dl>
                </dd>
              </dl>
            </li> 
          </ul>
        </dt>
        <dd>
          <dl>
            <dt>치료경과</dt>
            <dd>
              <span>${testUserList[i].pastDate}일</span>
              <span>(${testUserList[i].pastDatePercent}%)</span>
            </dd>
          </dl>
        </dd>
      </dl>
    </li>
  `);
  }
}

// //////////////// grid Init
const fn_gridInit = () => {
  gridInit();
};

const gridInit = () => {
  new gridjs.Grid({
    columns: [
      { name: "병록번호", id: "patientRegistrationNumber" },
      { name: "이름", id: "name" },
      { name: "성별", id: "male" },
      { name: "나이", id: "age" },
      { name: "교육시작일", id: "educationStartDate" },
      { name: "치료경과일수", id: "elapsedDays" },
      { name: "출석율(%)", id: "attendanceRate" },
      { name: "총단주일", id: "totalSingleWeek" },
      { name: "연속단주일", id: "oneConsecutiveWeek" },
      { name: "나이", id: "longestSingleWeek" },
      { name: "약복용률(%)", id: "drugIntake" },
    ],
    pagination: true,
    sort: true,
    resizable: true,
    data: gridData,
  }).render(document.getElementById("gridEl"));
};

fn_gridInit();
// //////////////// grid Init
console.log(gridData);
// ////////////////엑셀 파일 변환
$(document).ready(function () {
  $(".custom__btn").click(function () {
    exportExcel();
  });

  $(".gridjs-table").attr("id", "gridJsTable");
});

function s2ab(s) {
  var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  var view = new Uint8Array(buf); //create uint8array as viewer
  for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
  return buf;
}
function exportExcel() {
  // step 1. workbook 생성
  var wb = XLSX.utils.book_new();

  // step 2. 시트 만들기
  var newWorksheet = excelHandler.getWorksheet();

  // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.
  XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

  // step 4. 엑셀 파일 만들기
  var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // step 5. 엑셀 파일 내보내기
  saveAs(
    new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
    excelHandler.getExcelFileName()
  );
}

const excelHandler = {
  getExcelFileName: function () {
    const today = new Date();
    const month =
      today.getMonth() + 1 < 10
        ? "0" + String(today.getMonth() + 1)
        : today.getMonth() + 1;
    const date =
      today.getDate() < 10 ? "0" + String(today.getDate()) : today.getDate();
    return `${month}-${date} 진료환자 리스트.xlsx`;
  },
  getSheetName: function () {
    return "Table Test Sheet";
  },
  getExcelData: function () {
    return document.getElementById("gridJsTable");
  },
  getWorksheet: function () {
    return XLSX.utils.table_to_sheet(this.getExcelData());
  },
};
// ////////////////엑셀 파일 변환

function filterItems(items, searchVal) {
  return items.filter((item) => Object.values(item).includes(searchVal));
}
let data = [
  { name: "apple", type: "fruit", id: 123234 },
  { name: "cat", type: "animal", id: 98989 },
  { name: "something", type: "other", id: 656565 },
];

console.log("Filtered by name: ", filterItems(data, "apple"));
