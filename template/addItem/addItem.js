let index=0;
let title;
let dueDate;
let department;
let urgency;
let description;
let assignedEmployee = [];
let allEmployees = ['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa']
let allEmployeePicture = [{
    'homer': "./../../img/homer.jpg",
    'marge': "",
    'maggie': '',
    'bart': "",
    'lisa': ""
}];
let tasks=[];


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

function assignButton() {
    let assignableEmployees = allEmployees;

    for (let i = 0; i < assignableEmployees.length; i++) {
        document.getElementById('assign-options').innerHTML +=
            `
        <option onclick="sliceAssignedEmployee(${i, assignableEmployees})" class="selection-colors" value="${assignableEmployees[i]}">${assignableEmployees[i]}</option>
        `
    }
}
function pushTaskIntoTasks(){
tasks.push(createTask())
}
function createTask(title, date, department, urgency, description, employee) {
    
    let task = {
        'id': index,
        'title': title,
        'date': date,
        'department': department,
        'urgency': urgency,
        'description': description,
        'assignedto': employee, //bug : more than 1 possible
    };
    index++;
    return task;
}


function spliceAssignedEmployee(i, assignableEmployees) {
    return assignableEmployees.splice(i);
}

function assignEmployee() {
    //<img class="img-item" src="./../../img/homer.jpg">
    //splice assignedEmployees from chooseable employees
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