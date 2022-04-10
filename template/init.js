/**
 * This function do some init works and load the DB at first time. this function is called by a onload() directive when the web-app is fully loaded
 * 
 */
function init() {
    includeHTML(); // W3C Include 
    loadDB();
    responsivMenuUp();
    responsivMenuDown();
}

/**
 * This function stringify the tasks-JSON-Array and save it to a online storage
 * 
 */
function saveDB() {
    backend.setItem('tasks', JSON.stringify(tasks));
}

/**
 * This function load and parse an DB-String from online storage and assing the JSON-Array to a global varaible tasks
 *
 */
async function loadDB() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    updateBoardHTML();   // every change on 'tasks'-dataset needs a rebuild of board-site 
}


