const employees = [{name:'Radha',dept:'Finance'},{name:'Raj',dept:'R&D'},{name:'Abhishek',dept:'SDE'}];
const greetEmployee = ({name,dept}) =>`Hi ${name}, we are glad to have you as a ${dept}`;
// console.log(greetEmployee({name:'Radha',dept:'Finance'}));
console.log(employees.map(greetEmployee));