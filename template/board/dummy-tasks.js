// let tasks = [
//     {
//         'id': 0,
//         'content': 'test1',
//         'section': 'todo'
//     }, {
//         'id': 1,
//         'content': 'test2',
//         'section': 'todo'
//     }, {
//         'id': 2,
//         'content': 'test3',
//         'section': 'inprogress'
//     }, {
//         'id': 3,
//         'content': 'test4',
//         'section': 'testing'
//     }, {
//         'id': 4,
//         'content': 'test5',
//         'section': 'done'
//     }];

let currentDraggedElement;

function updateBoardHTML() {

    // console.log("in updateBoardHTML()");    

    // filter tasks 4 "todo-section"    
    let todo = tasks.filter(task => task['section'] == 'todo');
    // console.log(tasks);
    // console.log(todo);
    // console.log(date());

    //test
    // let todo =[];
    // for (let index = 0; index < tasks.length; index++) {
    //     console.log(tasks[index]['title']);

    // }


    // delete content of "todo-section"  
    document.getElementById('todo-section').innerHTML = '';

    // generate tasks 4 "todo-section"
    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo-section').innerHTML += generateTask(element);
    }


    // filter tasks 4 "inprogress-section"
    let inprogress = tasks.filter(t => t['section'] == 'inprogress');

    // delete content of "inprogress-section"  
    document.getElementById('inprogress-section').innerHTML = '';

    // generate tasks 4 "inprogress-section"
    for (let index = 0; index < inprogress.length; index++) {
        const element = inprogress[index];
        document.getElementById('inprogress-section').innerHTML += generateTask(element);
    }


    // filter tasks 4 "testing-section"
    let testing = tasks.filter(t => t['section'] == 'testing');

    // delete content of "testing-section"  
    document.getElementById('testing-section').innerHTML = '';

    // generate tasks 4 "testing-section"
    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing-section').innerHTML += generateTask(element);
    }


    // filter tasks 4 "done-section"
    let done = tasks.filter(t => t['section'] == 'done');

    // delete content of "done-section"  
    document.getElementById('done-section').innerHTML = '';

    // generate tasks 4 "done-section"
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done-section').innerHTML += generateTask(element);
    }

}

function startDragging(id) {
    currentDraggedElement = id;
}

function generateTask(element) {   

    // hardcoded colors for testing used below
    let colourOptions ={
        'high': 'rgba(255,50,50,1)',
        'medium': 'rgba(255,255,50,1)',
        'low': 'rgba(50,255,50,1)',
    };    
    //${element['urgency']}

    return `
        <div draggable="true" ondragstart=" startDragging(${element['id']})" class="task d-flex my-1">
            <div class="p-2 rounded-start m-0" style="background-color: ${colourOptions[element['urgency']]}"></div>      
            <div class="container m-0">
                <div class="d-flex justify-content-between m-1">
                    <div class="border border-top-0 px-1"> 
                        ${element['title']}
                    </div>
                    <div class="border rounded-pill px-2"> 
                        ${element['date']}
                    </div>
                </div>
                <div class="d-flex m-1 justify-content-between">
                    <div> 
                        - ${element['category']} -
                    </div>
                    <div> 
                        by ${element['assignedto']}
                    </div>
                </div>
                <div class="border m-1 px-1 rounded">
                    ${element['description']}
                </div>
            </div>
        </div>
    `
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(section) {
    // console.log(section);
    tasks[currentDraggedElement]['section'] = section;
    updateBoardHTML();
}


