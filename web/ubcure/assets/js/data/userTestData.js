//////////////////////////////////////
const testUserList = [
  {
    name: "박무명",
    rang: 1,
    gender: "남",
    age: 60,
    startStduy: "2022-01-22",
    pastDate: 12,
    pastDatePercent: 14.3,
  },
  {
    name: "김여자",
    rang: 2,
    gender: "여",
    age: 42,
    startStduy: "2022-02-22",
    pastDate: 10,
    pastDatePercent: 12.0,
  },
  {
    name: "홍길동",
    rang: 3,
    gender: "남",
    age: 35,
    startStduy: "2022-01-22",
    pastDate: 9,
    pastDatePercent: 10.7,
  },
  {
    name: "박과장",
    rang: 4,
    gender: "남",
    age: 38,
    startStduy: "2022-01-01",
    pastDate: 9,
    pastDatePercent: 10.6,
  },
  {
    name: "김철수",
    rang: 5,
    gender: "남",
    age: 45,
    startStduy: "2022-03-02",
    pastDate: 7,
    pastDatePercent: 8.6,
  },
];
//////////////////////////////////////

//////////////////////////////////////
const gridData = [
  {
    patientRegistrationNumber: "91221555",
    name: "박무명",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221556",
    name: "김무명",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "홍길동",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "최무명",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "이사모",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "김사모",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "김장인",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "이장인",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "박고수",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "김과장",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "이대리",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "이차장",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "김부장",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
  {
    patientRegistrationNumber: "91221555",
    name: "이부장",
    male: "남",
    age: "60",
    educationStartDate: "2021-01-03",
    elapsedDays: "12(14.3%)",
    attendanceRate: "83.3%",
    totalSingleWeek: "11",
    oneConsecutiveWeek: "5",
    longestSingleWeek: "6",
    drugIntake: "100",
  },
];
//////////////////////////////////////

let asdasd = [
  { age: 9, name: "심상덕" },
  { age: 15, name: "노이현" },
  { age: 12, name: "김지환" },
];

// console.log(asdasd);

// asdasd.sort(function (a, b) {
//   if (a.age < b.age) return 1;
//   if (a.age > b.age) return -1;

//   return 0;
// });

asdasd.sort(function (a, b) {
  a = a.name.toLowerCase();
  b = b.name.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
});

console.log(asdasd);
