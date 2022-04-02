//Löschen


// list of tasks - data JSON-Array example
// let tasks = [{
//         'id': 0,        
//         'title': '',
//         'date': '',
//         'category': '',
//         'urgency': '',
//         'description': '',
//         'assignedto':'',
//         'section':''
//     }];


//list of tasks 
let tasks = [];

//hardcoded data - can be deleted later -maybe
let department = ['Managment','Controlling','Finance','IT','Web'];
let urgency = ['high','medium','low'];
let employee = ['Homer','Marge','Bart','Lisa','Maggie'];

//copied Task to addItem.js

//hardcoded init for testing - can be deleted later
function dummyInit() {
    tasks.push(addTaskToTasks(tasks.length,'go out','1.1.2011',department[0], urgency[0], 'drink a lot of beer',employee[0]));
    tasks.push(addTaskToTasks(tasks.length,'homework','2.1.2011',department[1], urgency[1], 'cleaning house',employee[1]));
    tasks.push(addTaskToTasks(tasks.length,'have fun','3.1.2011',department[2], urgency[2], 'prank Lisa after school',employee[2]));
    tasks.push(addTaskToTasks(tasks.length,'practice','4.1.2011',department[3], urgency[0], 'practise playing Saxolophon',employee[3]));
    tasks.push(addTaskToTasks(tasks.length,'self-discovery','5.1.2011',department[4], urgency[0], 'tornment her teddy',employee[4]));
    tasks.push(addTaskToTasks(tasks.length,'test long description','5.1.2011',department[4], urgency[0], 'What’s the best thing about Switzerland? -I don’t know, but the flag is a big plus.',employee[4]));
    
}

