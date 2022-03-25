/* ===================================== Navbar open close ========================================= */

let navbar = true;

/* === function to hide and show navbar === */
function openCloseMenu() {
    if (navbar) {
        document.getElementById('navbar-container').classList.add('d-none');
        navbar = false;
    } else if (!navbar) {
        document.getElementById('navbar-container').classList.remove('d-none');
        navbar = true;
    }
}

/* ===================================== Navbar open close end ===================================== */


/* ======================================= Navigate Join ======================================= */
let board = 'board';
let back_log = 'back-log';
let add_task = 'add-task';
let help = 'help';

/* 
template "DIV" at index.html needs a id:
    - template board = id="board"
    - template backLog = id="back-log"
    - template addTask = id="add-task"
    - template help = id="help"
*/

function openSites(site) {/* site becomes value of onclick  */

    if (site == board) {
        openBoard();
    }
    if (site == back_log) {
        openBackLog();
    }
    if (site == add_task) {
        openAddTask();
    }
    if (site == help) {
        openHelp();
    }

}

function openBoard() {
    document.getElementById('board').classList.remove('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('add-task').classList.add('d-none');
    document.getElementById('help').classList.add('d-none');
}

function openBackLog() {
    document.getElementById('back-log').classList.remove('d-none');
    document.getElementById('board').classList.add('d-none');
    document.getElementById('add-task').classList.add('d-none');
    document.getElementById('help').classList.add('d-none');
}

function openAddTask() {
    document.getElementById('add-task').classList.remove('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
    document.getElementById('help').classList.add('d-none');
}

function openHelp() {
    document.getElementById('help').classList.remove('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
    document.getElementById('add-task').classList.add('d-none');
}

/* ===================================== Navigate Join end ===================================== */