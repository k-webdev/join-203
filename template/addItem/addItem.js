let tasks = [];
let title;
let dueDate;
let department;
let urgency;
let description;
let allEmployeePicture = [{
    'Homer': "./../../img/homer.jpg",
    'Marge': "./../../img/marge.png",
    'Maggie': "./../../img/maggie.jpg",
    'Bart': "./../../img/bart.png",
    'Lisa': "./../../img/lisa.jpg"
}];
let assignableEmployees;
let assignedEmployees = [];

//mouseclick eventlistener
onmousedown = function (e) {
    mousePosition_x = e.x;
    mousePosition_y = e.y;
}

function addTaskOnInit() {
    assignableEmployees=['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa'];
    setTodayInDatepicker();
    updateAssignableEmployeeList();
    onmousedown;
}
// today function
function setTodayInDatepicker() {
    dueDate = document.getElementById('date').value = getToday();
}

//cancel or finished creating task functions
function createTask() {
    getInputValues();
    //if title or description is empty function stops
    if (title == '' || description == '' || assignedEmployees.length==0) { return }
    getTask();
    pushTaskIntoTasks();
    saveDB();
    resetInputFields();
    updateAssignableEmployeeList();
    renderAssignedEmployees();
    alert('Task created!')
}

function resetInputFields() {
    title = document.getElementById('title').value = "";
    dueDate = document.getElementById('date').value = getToday();
    department = document.getElementById('department').value = "Management"
    urgency = document.getElementById('urgency').value = "high"
    description = document.getElementById('description').value = "";
    assignedEmployees = [];
    assignableEmployees = ['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa'];
}

function closeAddTasks() {
    resetInputFields();
    document.getElementById('addTask').classList.add('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
}
//update functions
function updateAssignableEmployeeList() {

    document.getElementById('assign-btn-container').innerHTML =
        `<select id="assign-options" onchange="selectAssignableEmployee()" 
        class="btn btn-outline-secondary dropdown-toggle my-2 dropdown-style selection-colors" type="button"
        aria-expanded="false" placeholder="Select">
        <option selected disabled value="choose" class="selection-colors">Choose employee</option>
        </select>`;

    for (let i = 0; i < assignableEmployees.length; i++) {
        document.getElementById('assign-options').innerHTML +=
            `
        <option onclick="selectAssignableEmployee(${assignableEmployees[i]})" class="selection-colors" value="${assignableEmployees[i]}">${assignableEmployees[i]}</option>
        `
    }
    document.getElementById('assign-options').innerHTML += `<option  value="close" class="selection-colors">Close dropdown</option>`;
}

function repositionAssignToDropdown() {
    document.getElementById('assign-options').style.left = `${mousePosition_x / window.innerWidth * 100}%`
    document.getElementById('assign-options').style.top = `${mousePosition_y / window.innerHeight * 100}%`
}

function removeAssignedEmployee(indexOfRemovedEmployee){
    //update arrayLists
    assignableEmployees.push(assignedEmployees[indexOfRemovedEmployee]);
    assignedEmployees.splice(indexOfRemovedEmployee, 1);
    renderAssignedEmployees();
    updateAssignableEmployeeList();
}

function renderAssignedEmployees() {
    document.getElementById('assigned-to-container').innerHTML = '';
    for (let i = 0; i < assignedEmployees.length; i++) {
        document.getElementById('assigned-to-container').innerHTML += `<img onclick="removeAssignedEmployee(${i})" src=${allEmployeePicture[0][assignedEmployees[i]]} class="add-assignment mx-3">`;
    }
}

//dropdown handle functions
function openAssignEmployeeDropdown() {
    if (assignableEmployees == 0) { return }
    document.getElementById('assign-btn-container').style.display = '';
    repositionAssignToDropdown();
}

function selectAssignableEmployee() {
    var dropdownMenu = document.getElementById('assign-options');
    var selectedEmployee = dropdownMenu.options[dropdownMenu.selectedIndex].value;
    //catch bug if "close" was selected before
    if (selectedEmployee == "close") {
        dropdownMenu.selectedIndex = 0;
        document.getElementById('assign-btn-container').style.display = 'none';
        return;
    }
    //update arrayLists
    assignedEmployees.push(selectedEmployee);
    spliceAssignedEmployee(assignableEmployees.indexOf(selectedEmployee));
    //close hide dropdown
    document.getElementById('assign-btn-container').style.display = 'none';
    //update displayed list
    updateAssignableEmployeeList();
    renderAssignedEmployees();
}

//getter functions
function getToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd
}

function getInputValues() {
    title = document.getElementById('title').value;
    dueDate = document.getElementById('date').value;
    department = document.getElementById('department').value;
    urgency = document.getElementById('urgency').value;
    description = document.getElementById('description').value;
}

function getTask() {
    let task = {
        'id': tasks.length,
        'title': title,
        'date': dueDate,
        'department': department,
        'urgency': urgency,
        'description': description,
        'assigned-to': assignedEmployees, //@param array
        'section': 'todo',
        'visibleboard': false
    };
    return task;
}

//array manipulation functions
function pushTaskIntoTasks() {
    return tasks.push(getTask());
}

function spliceAssignedEmployee(i) {
    assignableEmployees.splice(i, 1);
}