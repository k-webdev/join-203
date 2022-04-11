

/**
 * This function filter and generates content needed for the task-items which can be shown on the section-column
 * 
 * @param {String} keySection - contains the info where to render the task-item
 * @param {String} filterKey - contains the keyword to filter task-item
 */
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


/**
 * This function generates calls several other functions to render the whole borad-site. This function should be called whenever the Tasks variable has changed
 */
function updateBoardHTML() {

    // console.log('from updateBoardHTML()');
    // console.log('TASKS.length= ', tasks.length);

    generateSection('todo-section', 'todo');
    generateSection('inprogress-section', 'inprogress');
    generateSection('testing-section', 'testing');
    generateSection('done-section', 'done');   
}

/**
 * This function generates a HTML-content of task-item. 
 * 
 * @param {JSON-Array} element - is a JSON-Array stored in the global tasks-variable
 * @returns - String with HTML-content
 */
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
            <div class="m-0 p-0" style="width:100%;">

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

            <div class="d-flex flex-column justify-content-end align-items-center mx-1 py-2">
                <div class="trash-icon ">
                    <img onclick="showMoveToDialog(${element['id']})" src="./img/box-move-right.png">
                </div>
                
                    <div class="trash-icon">
                        <img onclick="showHideItemDialog(${element['id']})" src="./img/eye.png">
                    </div>
                
                <div class="trash-icon">
                    <img onclick="showDeleteDialog(${element['id']})" src="./img/basket.png">
                </div>  
            </div>
        </div>
    `
}

/**
 * This function change a property of the task-item to be hidden and refreshes the board-site
 * 
 * @param {String} id - This variable contains the ID of task-item to be hidden. The value of ID should equal to index-position in tasks-variable.
 */
function hideItem(id) {
    tasks[parseInt(id)]['visibleboard'] = false;
    // saveDB();
    updateBoardHTML();
}

/**
 * This function delete the task-item and refreshes the board-site
 * 
 * @param {String} id - This variable contains the ID of task-item to be deleted. The value of ID should equal to index-position in tasks-variable.
 */

function deleteTask(id) {    
    tasks.splice(parseInt(id), 1);    
    freshupIDs();
    // saveDB();
    updateBoardHTML();
}

/**
 * This works assigns correct values ​​to the ID. Needed after deleting a task-item
 */
function freshupIDs() {
    for (let index = 0; index < tasks.length; index++) {
        tasks[index]['id'] = index;
        console.log(tasks[index]);
    }
}


/**
 * This function chages a Property of an task-item to be moved to another section and refreshes the board-sit.
 * 
 * @param {String} id - id of a task-item
 * @param {String} section - contains the sectionname where task-item is be moved
 */
function changeSection(id, section) {
    tasks[parseInt(id)]['section'] = section;
    // saveDB();
    updateBoardHTML();
}

/**
 * Thisfunction adds an class to a DIV-container to highlight the backround of the component by draggingover
 * 
 * @param {String} id - of the DIV-container
 */
function doHighlight(id) {
    document.getElementById(id).classList.add('section-bg-color-highlighted');
}

/**
 * Thisfunction removes an class of a DIV-container to remove the highlight from backround of the component by draggingout
 * 
 * @param {String} id - ID of the DIV-container
 */
function doHighlightAway(id) {
    document.getElementById(id).classList.remove('section-bg-color-highlighted');
}


