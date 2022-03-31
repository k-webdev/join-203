
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
    }
];



function initBacklog(){/* inition by onclick="openBacklog(addBacklog())" at navigation.html */
    addBacklog();
}

/**
 * Using the tasksForBacklog JSON to fill backlog content.
 * 
 * @param{ string } - JSON array 
 */

function addBacklog(){
    document.getElementById('add-backlogs').innerHTML = '';

    document.getElementById('add-backlogs').innerHTML += `
    
        <div class="backlog-headlines">
            <h5>ASSIGNED TO</h5><h5>CATEGORY</h5><h5>DETAILS</h5>
        </div>

    `;

    for (let i = 0; i < tasksForBacklog.length; i++) {
        
    
        document.getElementById('add-backlogs').innerHTML += `
        
        <div class="backlogs-design">
            <div class="backlog-image">
                <img src="${tasksForBacklog[i]['image']}">
            </div>
            <div class="assigned-to">
                <h4>${tasksForBacklog[i]['name']}</h4>
                <a href="mailto:${tasksForBacklog[i]['mail']}">${tasksForBacklog[i]['mail']}</a>
            </div>
            <div class="backlog-cathegory">
                <p>${tasksForBacklog[i]['cathegory']}</p>
            </div>
            <div class="backlog-details">
                <span>
                    ${tasksForBacklog[i]['details']}
                </span>
            </div>
        </div>

        `;
    }
}