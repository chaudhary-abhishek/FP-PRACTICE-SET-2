const studentNames = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here
const getstudentNames = studentName =>studentName.charAt(0)==='A';
//console.log(getstudentNames("Aman"));
console.log(studentNames.filter(getstudentNames));
// Output: ["Anjali", "Arpit", "Ankit"]