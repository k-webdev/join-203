

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
/**
 * This function sets @var {array} assignableEmployees - to default value of all assignableEmployees,
 * calls @function setTodayInDatepicker() and
 * calls @function setTodayInDatepicker() and
 * calls @function onmousedown to setup first opening of addTask
 * 
 */
function addTaskOnInit() {
    assignableEmployees=['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa'];
    setTodayInDatepicker();
    updateAssignableEmployeeList();
    onmousedown;
}
/**
 * Function sets @var {string} dueDate to todays date by assigning
 * @function getToday() to 
 * @var {string} dueDate
 */
function setTodayInDatepicker() {
    dueDate = document.getElementById('date').value = getToday();
}

/**
 * This function gets input values, check if there are empty fields,
 * push values into an JSON Array and then get it into the backend 
 * after that it cleans up and sets everything to default
 * @returns 
 */
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
    alert('Task created!');
}

/**
 * This sets all input fields to default
 */
function resetInputFields() {
    title = document.getElementById('title').value = "";
    dueDate = document.getElementById('date').value = getToday();
    department = document.getElementById('department').value = "Management"
    urgency = document.getElementById('urgency').value = "high"
    description = document.getElementById('description').value = "";
    assignedEmployees = [];
    assignableEmployees = ['Homer', 'Marge', 'Maggie', 'Bart', 'Lisa'];
}
/**
 * This closes @template AddTaks 
 */
function closeAddTasks() {
    resetInputFields();
    document.getElementById('addTask').classList.add('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
}
//update functinos
/**
 * This updates and render dropdown menu of assignable employee for that task
 */
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
/**
 * reposition dropdown menu at position 
 * @var {number} mousePosition_x and 
 * @var {number} mousePosition_x 
 */
function repositionAssignToDropdown() {
    document.getElementById('assign-options').style.left = `${mousePosition_x / window.innerWidth * 100}%`
    document.getElementById('assign-options').style.top = `${mousePosition_y / window.innerHeight * 100}%`
}
/**
 * This adds assigned employee to 
 * @var {array} assignedEmployees and removes assigned employee at position 
 * @param {number} indexOfRemovedEmployee from 
 * @var {array} assignableEmployees 
 */
function removeAssignedEmployee(indexOfRemovedEmployee){
    //update arrayLists
    assignableEmployees.push(assignedEmployees[indexOfRemovedEmployee]);
    assignedEmployees.splice(indexOfRemovedEmployee, 1);
    renderAssignedEmployees();
    updateAssignableEmployeeList();
}
/**
 * This renders img of assigned employees
 */
function renderAssignedEmployees() {
    document.getElementById('assigned-to-container').innerHTML = '';
    for (let i = 0; i < assignedEmployees.length; i++) {
        document.getElementById('assigned-to-container').innerHTML += `<img onclick="removeAssignedEmployee(${i})" src=${allEmployeePicture[0][assignedEmployees[i]]} class="add-assignment mx-3">`;
    }
}

//dropdown handle functions
/**
 * This opens dropdown menu and reposition it if 
 * @var {array} assignableEmployees is not empty
 */
function openAssignEmployeeDropdown() {
    if (assignableEmployees == 0) { return }
    document.getElementById('assign-btn-container').style.display = '';
    repositionAssignToDropdown();
}

/**
 * This selects an assignable employee from dropdown menu and calls functions to update and render
 * @var {array} assignableEmployees 
 */
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
/**
 * This function gets todays date
 * @returns {string}
 */
function getToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd
}
/**
 * This gets input values by document id and assigns it to its variable
 */
function getInputValues() {
    title = document.getElementById('title').value;
    dueDate = document.getElementById('date').value;
    department = document.getElementById('department').value;
    urgency = document.getElementById('urgency').value;
    description = document.getElementById('description').value;
}
/**
 * This summarizes the necessary variables (
 * @var {number} tasks.length
 * @var {string} title
 * @var {string} dueDate
 * @var {string} department
 * @var {string} urgency
 * @var {string} description
 * @var {array} assignedEmployees
 * ) + "section" and if it should be visible on board and
 * @returns {JSON}
 */
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
/**
 * This pushes
 * @returns {JSON} into @var {JSONArray} tasks
 */
function pushTaskIntoTasks() {
    return tasks.push(getTask());
}
/**
 * This splice assigned Employees from 
 * @var {array} assignableEmployees at position
 * @param {number} i 
 */
function spliceAssignedEmployee(i) {
    assignableEmployees.splice(i, 1);
}