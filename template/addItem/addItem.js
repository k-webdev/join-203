let title;
let dueDate;
let department;
let urgency;
let description;
let assignedEmployees = [];

function addTaskOnInit() {
    setTodayInDatepicker();
}

function getInputValues() {
    title = document.getElementById('title').value
    dueDate = document.getElementById('date').value
    department = document.getElementById('department').value
    urgency = document.getElementById('urgency').value
    description = document.getElementById('description').value

    console.log(title, dueDate, department, urgency, description)
    // let employeesAssigned = document.getElementById('employeesAssi').value
}
function assignEmployee() {

}
function createTask() {

    resetInputFields();
}
function cancelTask() {

}

function getToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd
}
function setTodayInDatepicker() {
    dueDate = document.getElementById('date').value = getToday();
}

function resetInputFields() {
    title = document.getElementById('title').value = "";
    dueDate = document.getElementById('date').value = getToday();
    department = document.getElementById('department').value = "Management"
    urgency = document.getElementById('urgency').value = "High"
    description = document.getElementById('description').value = "";
}