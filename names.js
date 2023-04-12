const persons = [{name:'Rahul',age:23},{name:'prithvi',age:26},{name:'prakash',age:24}];
const onlyName = ({name,age}) =>age;

// console.log(onlyName({name:'Rahul',age:23}));

console.log(persons.map(onlyName));