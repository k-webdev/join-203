function openBoardHelp() {
    document.getElementById('get-help-content').innerHTML = '';

    document.getElementById('get-help-content').innerHTML = `
    
    <span>

        
    The colored markings to the left of the tasks mean: RED =
    important, YELLOW = medium, GREEN = if it fits

    </span>

    `;
}

function openBackLogHelp() {
    document.getElementById('get-help-content').innerHTML = '';

    document.getElementById('get-help-content').innerHTML = `
    
    <span>

    <p><b>Backlog:</b></p>
    Here you will find an overview of all the tasks.

    </span>

    `;
}

function openAddTask() {
    document.getElementById('get-help-content').innerHTML = '';

    document.getElementById('get-help-content').innerHTML = `
    
    <span>

    <b>Title:</b> Title that is as meaningful as possible.<br><br>
    
    <b>Department/Urgency:</b> Drop-down to select the relevant area.<br><br>

    <b>Date:</b> Set the start date for the task.<br><br>
    
    <b>Description:</b> Description of the activity as detailed as possible.<br><br>
    
    <b>Assigned To:</b> Clicking on + leads to a dropdown, which after selection adds the picture of the selected employee. 
    To delete the employee, click on the employee's picture. <br><br>
    
    <b>Create Task:</b> Passes the entered data to the backlog, where the data is presented in an overview. <br><br>
    
    <b>Cancel:</b> Leads to the closing of the add-task dialog window and deletes all entries that have been made so far.

    </span>

    `;
}