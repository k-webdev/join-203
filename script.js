



/**
 * function addBacklogs()
 * 
 * Using the tasksForBacklog JSON to fill backlog content.
 * 
 * @param{ string } - JSON array 
 */

function addBacklogs() { //img tag variable for changing images. ${tasksForBacklog[x][i]['image']}
    document.getElementById('add-table-content').innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {

            document.getElementById('add-table-content').innerHTML += `
        
                <tr class="table-body-data-sort" onclick="openActionForBacklogElements(${i})">
                    <td class="img-assigned-sort">
                        <img class="img-assigned" src="./img/homer.jpg">
                    </td>
                    <td>
                        <div>
                            <h4>${tasks[i]['assigned-to']}</h4>
                        </div>
                    </td>
                    <td>
                        <p>${tasks[i]['department']}</p> 
                    </td>
                    <td class="description-design">
                        <p>${tasks[i]['description']}</p>
                    </td>
                </tr>  
        
            `;
        }
}

function openActionForBacklogElements(index){
    document.getElementById('details-content').classList.remove('d-none');
    document.getElementById('title-details').innerHTML = ` ${tasks[index]['title']}`;
    document.getElementById('assigned-to-details').innerHTML = ` ${tasks[index]['assigned-to']}`;
    document.getElementById('department-details').innerHTML = ` ${tasks[index]['department']}`;
    document.getElementById('description-details').innerHTML = ` ${tasks[index]['description']}`;
    document.getElementById('change-department').innerHTML = `
    
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input onclick="changeDepartment('management', ${index})" type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio1">Managment</label>
              
                <input onclick="changeDepartment('finance', ${index}))" type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio2">Finance</label>
              
                <input onclick="changeDepartment('it', ${index}))" type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio3">IT</label>
                
                <input onclick="changeDepartment('controlling', ${index}))" type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio4">Controlling</label>

                <input onclick="changeDepartment('web', ${index}))" type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio5">Web</label>
              </div>
    
    `;
    document.getElementById('add-to-backlog-btn').innerHTML = `

    
  

  <button onclick="addToBacklog(${index}); closeDetails()" type="button" class="btn btn-success">Show on Board</button>
  <button onclick="closeDetails()" type="button" class="btn btn-danger">Close</button>
  
    
    `;
    
}

function closeDetails(){
    document.getElementById('details-content').classList.add('d-none');
    document.getElementById('assigned-to-details').innerHTML = '';   
}

function changeDepartment(department, index){
    tasks[index]['department'] = department;
}


function addToBacklog(index){
    tasks[index]['visibleboard'] = true;
    saveDB();
}