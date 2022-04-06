//Felder sind required, assignedTo entwickeln(dropdown), derzeit dummy version
let tasks = [];
let title;
let dueDate;
let department;
let urgency;
let description;
let assignedEmployees = [];
let allEmployees = ['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa']
let assignableEmployees = allEmployees;
let allEmployeePicture = [{
    'homer': "./../../img/homer.jpg",
    'marge': "",
    'maggie': '',
    'bart': "",
    'lisa': ""
}];
// let mousePosition_x;
// let mousePosition_y;


function addTaskOnInit() {
    setTodayInDatepicker();
    assignButtonInit();
    onmousedown;
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


    document.getElementById('assign-btn-container').innerHTML =
        `<select id="assign-options" onchange="selectAssignableEmployee()" 
        class="btn btn-outline-secondary dropdown-toggle my-2 dropdown-style selection-colors" type="button"
        aria-expanded="false" placeholder="Select">
        <option selected disabled>Choose employee</option>
    </select>`;

    for (let i = 0; i < assignableEmployees.length; i++) {
        document.getElementById('assign-options').innerHTML +=
            `
        <option onclick="selectAssignableEmployee(${assignableEmployees[i]})" class="selection-colors" value="${assignableEmployees[i]}">${assignableEmployees[i]}</option>
        `
    }
    document.getElementById('assign-options').innerHTML += `<option id="dd-close-btn" value="close">Close dropdown</option>`;
    
}
function repositionAssignToDropdown() {
    document.getElementById('assign-options').style.left = `${mousePosition_x / window.innerWidth * 100}%`
    document.getElementById('assign-options').style.top = `${mousePosition_y / window.innerHeight * 100}%`
}

onmousedown = function (e) {
    mousePosition_x = e.x;
    mousePosition_y = e.y;

    console.log(mousePosition_x, mousePosition_y)
}

function openAssignEmployeeDropdown() {
    if (assignableEmployees == 0) { return }
    document.getElementById('assign-btn-container').style.display = '';
    repositionAssignToDropdown();
}

function selectAssignableEmployee() {
    var dropdownMenu = document.getElementById('assign-options');
    var selectedEmployee = dropdownMenu.options[dropdownMenu.selectedIndex].value;
    if (selectedEmployee == "close") { return document.getElementById('assign-btn-container').style.display = 'none'; }
    assignedEmployees.push(selectedEmployee);
    spliceAssignedEmployee(assignableEmployees.indexOf(selectedEmployee));
    document.getElementById('assign-btn-container').style.display = 'none';
    assignButtonInit();
}

function pushTaskIntoTasks() {
    return tasks.push(getTask());
}

function spliceAssignedEmployee(i) {
    assignableEmployees.splice(i, 1);
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

function closeAddTasks() {
    resetInputFields();
    document.getElementById('addTask').classList.add('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
}