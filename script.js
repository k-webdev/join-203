/**
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

function openActionForBacklogElements(){
    document.getElementById('back-log').innerHTML += `
    
    <div class="action-for-backlog">
        <div class="action-for-backlog-content">
        test
        </div>
    </div>

    `;
}

