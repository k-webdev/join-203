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

/* 
template "DIV" at index.html needs a id:
    - template board = id="board"
    - template backLog = id="back-log"
    - template addTask = id="addTask"
    - template help = id="help"
*/



function openBoard() {
    document.getElementById('board').classList.remove('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('addTask').classList.add('d-none');
}

function openBackLog() {
    document.getElementById('back-log').classList.remove('d-none');
    document.getElementById('board').classList.add('d-none');
    document.getElementById('addTask').classList.add('d-none');
}

function openAddTasks(){
    document.getElementById('addTask').classList.remove('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
}


/* ===================================== Navigate Join end ===================================== */