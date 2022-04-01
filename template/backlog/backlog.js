
let tasksForBacklog = [
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    },
    {
        name: 'Dennis Kemnade',
        mail: 'Dennis.Kemnade@live.de',
        image: './../../img/homer.jpg',
        cathegory: 'Developer',
        details:
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure itaque vitae! 
         Quia ipsam, culpa laudantium soluta molestiae qui,
         saepe possimus expedita itaque vel in a reprehenderit nostrum vero. Reiciendis.`,
        index: '0'
    }
];



function initBacklog() {/* inition by onclick="openBacklog(addBacklog())" at navigation.html */
    addBacklogs();
}

/**
 * Using the tasksForBacklog JSON to fill backlog content.
 * 
 * @param{ string } - JSON array 
 */

function addBacklogs() {
    document.getElementById('add-table-content').innerHTML = '';

    for (let i = 0; i < tasksForBacklog.length; i++) {

        document.getElementById('add-table-content').innerHTML += `
        
                <tr class="table-body-data-sort">
                    <td>
                        <img class="img-assigned" src="${tasksForBacklog[i]['image']}">
                    </td>
                    <td>
                        <div>
                            <h4>${tasksForBacklog[i]['name']}</h4>
                            <a class="link-design" href="mailto:${tasksForBacklog[i]['mail']}">${tasksForBacklog[i]['mail']}</a>
                        </div>
                    </td>
                    <td>
                        <p>${tasksForBacklog[i]['cathegory']}</p> 
                    </td>
                    <td>
                        ${tasksForBacklog[i]['details']}
                    </td>
                </tr>  
        
        `;

    }


}