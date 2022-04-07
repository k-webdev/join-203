
// generate collumn-content for board
function generateSection(keySection, filterKey) {

    let visible = tasks.filter(t => t['visibleboard'] == true);
    

    // filter data depends on filterKey for the section/collumn on board
    let filteredList = visible.filter(t => t['section'] == filterKey);

    //erase html-content from section/collumn
    document.getElementById(keySection).innerHTML = '';


    for (let index = 0; index < filteredList.length; index++) {

        // put an element from filteredList and assign it to variable 'element'
        const element = filteredList[index];
        // add a generated html-content for section/collumn with content of variable 'element' 
        document.getElementById(keySection).innerHTML += generateTask(element);
    }

}


// genrates all section/collumn uses generateSection from above
function updateBoardHTML() {

    console.log('from updateBoardHTML()');
    console.log('TASKS.length= ',tasks.length);

    generateSection('todo-section', 'todo');
    generateSection('inprogress-section', 'inprogress');
    generateSection('testing-section', 'testing');
    generateSection('done-section', 'done');

    //console-log for testing
    // console.log('updateBoardHTML(); ...done');
}

// this function generates task-content 
function generateTask(element) {

    // hardcoded colors for color bar representing 'urgency' - used below
    let colourOptions = {
        'high': 'rgba(255,50,50,1)',
        'medium': 'rgba(255,255,50,1)',
        'low': 'rgba(50,255,50,1)',
    };

    // returns task-html-content called from generateSection() - used above
    return `
        <div draggable="true" ondragstart=" startDragging(${element['id']})" class="task d-flex my-1 bg-info">
            <div class="p-2 rounded-start m-0" style="background-color: ${colourOptions[element['urgency']]}"></div>      
            <div class="container m-0 p-0">

                <div class="d-flex justify-content-between m-1">
                    <div class="border border-dark border-top-0 px-1"> 
                        ${element['title']}
                    </div>

                    <div>
                        <div class="border border-dark justify-content-center align-items-center rounded-pill px-2"> 
                            ${element['date']}
                        </div>  
                    </div>
                    
                </div>
                <div class="d-flex m-1 justify-content-between">
                    <div> 
                        - ${element['department']} -
                    </div>
                    <div> 
                        by ${element['assigned-to']}
                    </div>
                </div>
                <div class="border border-dark m-1 px-1 rounded">
                    ${element['description']}
                </div>
            </div>

            <div class="d-flex align-items-end py-1">
                <div class="trash-icon">
                    <img onclick="deleteTask(${element['id']})" src="./img/basket.png">
                </div>  
            </div>
        </div>
    `
}


function deleteTask(id) {
    console.log('delete task with ID: ', id);
    tasks.splice(parseInt(id), 1);
    console.log("tasks__", tasks.length);
    freshupIDs();
    updateBoardHTML();
}

function freshupIDs() {
    for (let index = 0; index < tasks.length; index++) {
        tasks[index]['id'] = index;
        console.log(tasks[index]);
    }
}
