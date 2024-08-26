const { averageExams } = require("./gradeCalculations");

const listValueOfExams = [80, 100, 100, 80];
let ave = averageExams(listValueOfExams);

console.log(ave);