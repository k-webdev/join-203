let navbar = true;

function openCloseMenu() {
    if (navbar) {
        document.getElementById('navbar-container').classList.add('d-none');
        navbar = false;
    } else if (!navbar) {
        document.getElementById('navbar-container').classList.remove('d-none');
        navbar = true;
    }
}