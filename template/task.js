// global for 
let tasks = [];

//hardcoded data - can be deleted later -maybe
let category = ['Managment', 'Controlling', 'Finance', 'IT', 'Web'];
let urgency = ['high', 'medium', 'low'];
let employee = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];

function addTaskToTasks(arraylength, title, date, departmanet, urgency, description, employee) {
    let task = {
        'id': arraylength,
        'title': title,
        'date': date,
        'departmanet': departmanet,
        'urgency': urgency,
        'description': description,
        'assignedto': employee,
        'section': 'todo',
        'visiblebacklog': true,
        'visibleboard': false
    };
    return task;
}

function saveDB() {
    backend.setItem('tasks', JSON.stringify(tasks));
}

async function loadDB() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    updateBoardHTML();   // every change on 'tasks'-dataset needs a rebuild of board-site 
}

//hardcoded init for testing - can be deleted later
function dummyInit() {

    // loadDB();

    // tasks.push(addTaskToTasks(tasks.length, 'go out', '1.1.2011', category[0], urgency[0], 'drink a lot of beer', employee[0]));
    // tasks.push(addTaskToTasks(tasks.length, 'homework', '2.1.2011', category[1], urgency[1], 'cleaning house', employee[1]));
    // tasks.push(addTaskToTasks(tasks.length, 'have fun', '3.1.2011', category[2], urgency[2], 'prank Lisa after school', employee[2]));
    // tasks.push(addTaskToTasks(tasks.length, 'practice', '4.1.2011', category[3], urgency[0], 'practise playing Saxolophon', employee[3]));
    // tasks.push(addTaskToTasks(tasks.length, 'self-discovery', '5.1.2011', category[4], urgency[0], 'tornment her teddy', employee[4]));
    // tasks.push(addTaskToTasks(tasks.length, 'test long description', '5.1.2011', category[4], urgency[0], 'What’s the best thing about Switzerland? -I don’t know, but the flag is a big plus.', employee[4]));

    // updateBoardHTML();

    // saveDB();
}

