// global for drag&drop function
let currentDraggedElement;

// from Junus-Example (module 10 - Drag&Drop-Video)- is halt so
function startDragging(id) {
    currentDraggedElement = id;
}

// from Junus-Example (module 10 - Drag&Drop-Video)- is halt so
function allowDrop(ev) {
    ev.preventDefault();
}

// from Junus-Example (module 10 - Drag&Drop-Video)- is halt so
function moveTo(section) {
    // console.log(section);
    tasks[currentDraggedElement]['section'] = section; // change 
    updateBoardHTML(); // every change on 'tasks'-dataset needs a rebuild of board-site 
}

