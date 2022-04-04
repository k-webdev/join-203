/**
 * Using the tasksForBacklog JSON to fill backlog content.
 * 
 * @param{ string } - JSON array 
 */

function addBacklogs() { //img tag variable for changing images. ${tasksForBacklog[x][i]['image']}
    document.getElementById('add-table-content').innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {

            document.getElementById('add-table-content').innerHTML += `
        
                <tr class="table-body-data-sort">
                    <td>
                        <img class="img-assigned" src="./img/homer.jpg">
                    </td>
                    <td>
                        <div>
                            <h4>${tasks[i]['title']}</h4>
                        </div>
                    </td>
                    <td>
                        <p>${tasks[i]['department']}</p> 
                    </td>
                    <td>
                        ${tasks[i]['description']}
                    </td>
                </tr>  
        
            `;
        }
}