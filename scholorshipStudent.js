const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
  ];

const getStudent = student => student.grade==='B'&&student.scholarship===true;
// console.log(getStudent({ name: "John", grade: "B", scholarship: true }))

console.log(students.find(getStudent))