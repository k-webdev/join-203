let currentDraggedElement;

function generateSection(keySection, filterKey){
     
     let inprogress = tasks.filter(t => t['section'] == filterKey);   

     document.getElementById(keySection).innerHTML = '';  
        
     for (let index = 0; index < inprogress.length; index++) {
         const element = inprogress[index];
         document.getElementById(keySection).innerHTML += generateTask(element);
     }

}


function updateBoardHTML() {

    generateSection('todo-section','todo');
    generateSection('inprogress-section','inprogress');
    generateSection('testing-section','testing');
    generateSection('done-section','done'); 

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


function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(section) {
    // console.log(section);
    tasks[currentDraggedElement]['section'] = section;
    updateBoardHTML();
}


