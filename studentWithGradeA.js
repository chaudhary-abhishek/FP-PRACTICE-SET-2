const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
  ];

const studentWithGradeA = student =>student.grade==='A';
//console.log(studentWithGradeA({ name: "John", grade: "A" }));
console.log(students.find(studentWithGradeA))
