/**
 * This function is for changeing help section content to board.
 */
function openBoardHelp() {
    document.getElementById('get-help-content').innerHTML = '';

    document.getElementById('get-help-content').innerHTML = `
    
    <h5>Move Task-Items</h5>
    <p> There are two ways to move task-items around within sections. The first way: just drag chosen item and drop it to
      a collumn you want.
      The second way: by pressing the <span><img src="./img/box-move-right-small.png"></span>-button in a
      task-item a 'MOVE TO'-Dialog apears. Choose as you wish ;)
    </p>

    <h5>Hide Task-Items</h5>
    <p>
      Use <span><img src="./img/eye-small.png"></span>-button to hide the task-item. The task can become visible again by handle it in the back log.     
    </p>

    <h5>Delete Task-Items</h5>
    <p>
      Use <span><img src="./img/basket-small.png"></span>-button to delete the task-item. Caution! This action is irreversible. The dataset will be deleted in the hole application.
    </p>

    <h5>Color Code</h5>
    <p>
       On the left site of the task-item represents a colored vertical bar the urgency of the task:
    </p>
    <div>
       <div class="d-flex align-items-center">
          <div class="ltl-field urgency-color-high border border-dark rounded"></div>
          <div> = high</div>
       </div>
 
       <div class="d-flex align-items-center">
          <div class="ltl-field urgency-color-medium border border-dark rounded"></div>
          <div> = medium</div>
       </div>
 
       <div class="d-flex align-items-center">
          <div class="ltl-field urgency-color-low border border-dark rounded"></div>
          <div> = low</div>
       </div>
 
    </div>

    `;
}

/**
 * This function is for changeing help section content to backlog.
 */
function openBackLogHelp() {
    document.getElementById('get-help-content').innerHTML = '';

    document.getElementById('get-help-content').innerHTML = `
    
    <span>

    <p><b>Backlog:</b></p>
    Here you will find an overview of all the tasks.

    </span>

    `;
}

/**
 * This function is for changeing help section content to add task.
 */
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