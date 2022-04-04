function init() {
    includeHTML(); // W3C Include 
    loadDB();    
}

function saveDB() {
    backend.setItem('tasks', JSON.stringify(tasks));
}

async function loadDB() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    updateBoardHTML();   // every change on 'tasks'-dataset needs a rebuild of board-site 
}


