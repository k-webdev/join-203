let tasks = [
    {
        'id': 0,
        'content': 'test1',
        'section': 'todo'
    }, {
        'id': 1,
        'content': 'test2',
        'section': 'todo'
    }, {
        'id': 2,
        'content': 'test3',
        'section': 'inprogress'
    }, {
        'id': 3,
        'content': 'test4',
        'section': 'testing'
    }, {
        'id': 4,
        'content': 'test5',
        'section': 'done'
    }];

let currentDraggedElement;    

function updateBoardHTML() {

    //console.log("in updateBoardHTML()");

    // filter tasks 4 "todo-section"
    let todo = tasks.filter(t => t['section'] == 'todo');

    // delete content of "todo-section"  
    document.getElementById('todo-section').innerHTML = '';

    // generate tasks 4 "todo-section"
    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo-section').innerHTML += generateTask(element)
    }


    // filter tasks 4 "inprogress-section"
    let inprogress = tasks.filter(t => t['section'] == 'inprogress');

    // delete content of "inprogress-section"  
    document.getElementById('inprogress-section').innerHTML = '';

    // generate tasks 4 "inprogress-section"
    for (let index = 0; index < inprogress.length; index++) {
        const element = inprogress[index];
        document.getElementById('inprogress-section').innerHTML += generateTask(element)
    }


    // filter tasks 4 "testing-section"
    let testing = tasks.filter(t => t['section'] == 'testing');

    // delete content of "testing-section"  
    document.getElementById('testing-section').innerHTML = '';

    // generate tasks 4 "testing-section"
    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing-section').innerHTML += generateTask(element)
    }

 
    // filter tasks 4 "done-section"
    let done = tasks.filter(t => t['section'] == 'done');

    // delete content of "done-section"  
    document.getElementById('done-section').innerHTML = '';

    // generate tasks 4 "done-section"
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done-section').innerHTML += generateTask(element)
    }
 
}

function startDragging(id) {
    currentDraggedElement = id;
}

function generateTask(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="task">${element['content']}</div>`
}

function allowDrop(ev) {
    ev.preventDefault();    
}

function moveTo(section) {
    console.log(section);
    tasks[currentDraggedElement]['section'] = section;
    updateBoardHTML();
}


