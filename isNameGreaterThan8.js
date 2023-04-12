const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"];
const isNameGreaterThan8 = name =>name.length>8;
//console.log(isNameGreaterThan8('Abhishek'));

console.log(names.find(isNameGreaterThan8));