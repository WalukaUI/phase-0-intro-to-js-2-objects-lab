// Write your solution in this file!
const employee ={name:"Luka",
                 streetAddress:"122 Normandy"
                };

              
function updateEmployeeWithKeyAndValue( employee, key ,street){
    for (const key in employee) {
        delete employee[key];}
        employee.name = 'Sam';
        const newEmployee={...employee}
        newEmployee[key]=street;
        return newEmployee;
}
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key ,street){
    for (const key in employee) {
        delete employee[key];}
        employee.name = 'Sam';
       
        employee[key]=street;
        return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, name){
    for (const key in employee) {
        delete employee[key];}
        employee.name = 'Sam';

        const newEmployee={...employee}
        delete newEmployee.name;
        return newEmployee;
}
deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, name){
    for (const key in employee) {
        delete employee[key];}
        employee.name = 'Sam';

        delete employee.name;
        return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, "name")