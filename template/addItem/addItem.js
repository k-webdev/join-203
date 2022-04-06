//Felder sind required, assignedTo entwickeln(dropdown), derzeit dummy version
let tasks = [];
let title;
let dueDate;
let department;
let urgency;
let description;
let assignedEmployees = ['Homer'];
let allEmployees = ['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa']
let allEmployeePicture = [{
    'homer': "./../../img/homer.jpg",
    'marge': "",
    'maggie': '',
    'bart': "",
    'lisa': ""
}];

function addTaskOnInit() {
    setTodayInDatepicker();
    assignButtonInit();
}
function createTask() {
    getInputValues();
    getTask();
    pushTaskIntoTasks();
    saveDB();
    resetInputFields();
}

function getInputValues() {
    title = document.getElementById('title').value;
    dueDate = document.getElementById('date').value;
    department = document.getElementById('department').value;
    urgency = document.getElementById('urgency').value;
    description = document.getElementById('description').value;

    console.log(title, dueDate, department, urgency, description)
    // let employeesAssigned = document.getElementById('employeesAssi').value
}

function getTask() {
    let task = {
        'id': tasks.length,
        'title': title,
        'date': dueDate,
        'department': department,
        'urgency': urgency,
        'description': description,
        'assigned-to': assignedEmployees[0], //@param array
        'section': 'todo',
        'visibleboard': false
    };
    return task;
}

function assignButtonInit() {
    // let assignedEmployees = allEmployees;

    document.getElementById('assign-btn-container').innerHTML =
        `<select id="assign-options"
        class="btn btn-outline-secondary dropdown-toggle my-2 dropdown-style selection-colors" type="button"
        aria-expanded="false" placeholder="Select">
    </select>`;

    for (let i = 0; i < allEmployees.length; i++) {
        document.getElementById('assign-options').innerHTML +=
            `
        <option onclick="spliceAssignedEmployee(${i, allEmployees[i]})" class="selection-colors" value="${allEmployees[i]}">${allEmployees[i]}</option>
        `
    }
}
function repositionDropdown(){

}
// need to fix function
function assignEmployee() {
    // document.getElementById('button').addEventListener("click", onmousedown);
    onmousedown = function (e) {
        let x = e.x;
        let y = e.y;
        if (document.getElementById('assign-btn').clicked == true) {
            document.getElementById('assign-options').style.left = `${e.x / window.innerWidth * 100}%`
            document.getElementById('assign-options').style.top = `${e.y / window.innerHeight * 100}%`
        }
        console.log(x, y)
    }
}

function pushTaskIntoTasks() {
    return tasks.push(getTask());
}

function spliceAssignedEmployee(i, assignableEmployees) {
    return assignableEmployees.splice(i);
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
    urgency = document.getElementById('urgency').value = "high"
    description = document.getElementById('description').value = "";
}