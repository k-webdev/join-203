/* Variables and Arrays */

let addTasksAsJSON = [];// add tasks as array, local for single session
let addTasksToJSonAsString = [];// add tasks stringifyed, for localstorage
let tasksForBacklog = [];
let taskAsString = [];
let taskFromLocalStorage = [];

function loadArrayFromLocalStorage() {

    taskFromLocalStorage = localStorage.getItem('tasks');

    console.log(taskFromLocalStorage);

    tasksForBacklog.push(JSON.parse(JSON.stringify(taskFromLocalStorage)));

    console.log(tasksForBacklog);
    console.log(addTasksToJSonAsString);
    console.log(addTasksAsJSON);

}


/* ============================= Add tasks to backlog ============================= */


function initBacklog() {/* inition by onclick="openBacklog(addBacklog())" at navigation.html */
    loadArrayFromLocalStorage();
    addBacklogs();
}

/**
 * Using the tasksForBacklog JSON to fill backlog content.
 * 
 * @param{ string } - JSON array 
 */

function addBacklogs() { //img tag variable for changing images. ${tasksForBacklog[x][i]['image']}
    document.getElementById('add-table-content').innerHTML = '';

    


        for (let i = 0; i < tasksForBacklog.length; i++) {

            document.getElementById('add-table-content').innerHTML += `
        
                <tr class="table-body-data-sort">
                    <td>
                        <img class="img-assigned" src="./img/homer.jpg">
                    </td>
                    <td>
                        <div>
                            <h4>${tasksForBacklog[i]['title']}</h4>
                            <a class="link-design" href="mailto:${tasksForBacklog[i]['mail']}">${tasksForBacklog[i]['mail']}</a>
                        </div>
                    </td>
                    <td>
                        <p>${tasksForBacklog[i]['category']}</p> 
                    </td>
                    <td>
                        ${tasksForBacklog[i]['description']}
                    </td>
                </tr>  
        
            `;
        }
    
}
/* ============================= Add tasks to backlog end ============================= */

/* ================================== create Array for Backlog ================================== */


/**
 * Elements get stringifyed and saved in localstorage.
 * 
 * 
 * @param {} - 
 */
function createTask() {

    let title = document.getElementById('title').value; //Title from add Task
    let category = document.getElementById('category').value;
    let urgency = document.getElementById('urgency').value;
    let date = document.getElementById('date').value; //Date from Datepicker on add Task
    let description = document.getElementById('description').value; // description content from add task

    let task =
        [
            {
                'title': title,
                'category': category,
                'urgency': urgency,
                'date': date,
                'description': description
            }
        ];

    addTasksAsJSON.push(task);

    for (let i = 0; i < addTasksAsJSON.length; i++) {
        const task = addTasksAsJSON[i];

        /* console.log(task); */

        taskAsString.push(JSON.stringify(task)); //addTasksToJSonAsString is a JSON as String

        console.log(taskAsString);

        localStorage.setItem('tasks', taskAsString); //add tasks to local storage
    }
    removeInputs();
}

function removeInputs() {
    document.getElementById('title').value = ''; //Title from add Task
    document.getElementById('category').value = '';
    document.getElementById('urgency').value = '';
    document.getElementById('date').value = ''; //Date from Datepicker on add Task
    document.getElementById('description').value = ''; // description content from add task
}

/* ================================== create Array for Backlog end ================================== */