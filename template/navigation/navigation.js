/* ===================================== Navbar open close ========================================= */

let navbar = true;

/* === function to hide and show navbar === */
function openCloseMenu() {
    if (navbar) {
        document.getElementById('navbar-container').classList.add('navbar-sort-in');
        document.getElementById('navbar-container').classList.remove('navbar-sort-out');
        navbar = false;
    } else if (!navbar) {
        document.getElementById('navbar-container').classList.remove('navbar-sort-in');
        document.getElementById('navbar-container').classList.add('navbar-sort-out');
        navbar = true;
    }
}

function responsivMenuUp() {
    
    let test = setInterval(()=>{
        if (window.innerWidth <= 1300) {
            navbar = false;
            openCloseMenu();
            clearInterval(test);
            responsivMenuDown();
        } 
    },100);
}

function responsivMenuDown() {

    let test2 = setInterval(()=>{
        if(window.innerWidth > 1300) {
            navbar = true;
            openCloseMenu();
            clearInterval(test2);
            responsivMenuUp();
        }
    },100);
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
    document.getElementById('start-screen').classList.add('d-none');
}

function openBackLog() {
    document.getElementById('back-log').classList.remove('d-none');
    document.getElementById('board').classList.add('d-none');
    document.getElementById('addTask').classList.add('d-none');
    document.getElementById('start-screen').classList.add('d-none');
}

function openAddTasks() {
    document.getElementById('addTask').classList.remove('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
    document.getElementById('start-screen').classList.add('d-none');
}

function openStartScreen() {
    document.getElementById('start-screen').classList.remove('d-none');
    document.getElementById('addTask').classList.add('d-none');
    document.getElementById('back-log').classList.add('d-none');
    document.getElementById('board').classList.add('d-none');
}





/* ===================================== Navigate Join end ===================================== */