const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
  ];

const findStudent = student =>student.grade==='A'||student.scholarship===true;
// console.log(findStudent({ name: "John", grade: "C", scholarship: true }))

console.log(students.find(findStudent));