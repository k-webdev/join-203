/**
 * Global variable needet for the darg and drop functionality
 */
let currentDraggedElement;

/**
 * This function stores the id of dragged task-item to a global variable needet for drag and drop functionality 
 * 
 * @param {String} id - This variable contains the ID of the task-item to be dragged. The value of ID should equal to index-position in tasks-variable.
 */
function startDragging(id) {
    currentDraggedElement = id;
}

// from Junus-Example (module 10 - Drag&Drop-Video)- is halt so

/**
 * not a clue what this function do. Copied from Junus-Tutorail (module 10 - Drag&Drop-Video)
 * 
 * @param {Event} ev - i think it is an eventhandler
 */
function allowDrop(ev) {
    ev.preventDefault();
}

// from Junus-Example (module 10 - Drag&Drop-Video)- is halt so
/**
 * This function change the value of a task-item which are dragged to a new section and refreshes the board-site
 * 
 * @param {String} section - contains the name of the new section where the task-iten is to move to
 */
function moveTo(section) {
    tasks[currentDraggedElement]['section'] = section; // change 
    saveDB();
    updateBoardHTML(); // every change on 'tasks'-dataset needs a rebuild of board-site 
    
}

