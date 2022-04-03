// generate collumn-content for board
function generateSection(keySection, filterKey) {

    // filter data depends on filterKey for the section/collumn on board
    let filteredList = tasks.filter(t => t['section'] == filterKey);

    //erase html-content from section/collumn
    document.getElementById(keySection).innerHTML = '';


    for (let index = 0; index < filteredList.length; index++) {

        // put an element from filteredList and assign it to variavle 'element'
        const element = filteredList[index];
        // add a generated html-content for section/collumn with content of variable 'element' 
        document.getElementById(keySection).innerHTML += generateTask(element);
    }

}


// genrates all section/collumn uses generateSection from above
function updateBoardHTML() {

    generateSection('todo-section', 'todo');
    generateSection('inprogress-section', 'inprogress');
    generateSection('testing-section', 'testing');
    generateSection('done-section', 'done');

    //console-log for testing
    console.log('updateBoardHTML(); ...done');
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
        <div draggable="true" ondragstart=" startDragging(${element['id']})" class="task d-flex my-1">
            <div class="p-2 rounded-start m-0" style="background-color: ${colourOptions[element['urgency']]}"></div>      
            <div class="container m-0">
                <div class="d-flex justify-content-between m-1">
                    <div class="border border-top-0 px-1"> 
                        ${element['title']}
                    </div>
                    <div class="border justify-content-center align-items-center rounded-pill px-2"> 
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
