function doCancel() {
   document.getElementById('board-dialog').classList.add('d-none');
}

function showDeleteDialog(id) {
   generateDeleteDialog(id);
   document.getElementById('board-dialog').classList.remove('d-none');

}

function generateDeleteDialog(id) {
   document.getElementById('board-dialog').innerHTML = `
    <div class="dialog-content d-flex flex-column justify-content-between">

      <div id="dialog-headline">
         <div class="d-flex justify-content-start border px-1 rounded-top border-warning bg-warning text-black">
           WARNING
         </div>
      </div>

      <div id="dialog-text" class="px-3">
         <div>Do You realy want to delete this item?</div>
         
      </div>

      <div class="dialog-button-area d-flex justify-content-around " >
         <div class="cancel-button d-flex border border-dark py-1 px-4 m-2 rounded" id="button-cancel" onclick="doCancel()">Cancel</div>
         <div class="do-button d-flex border border border-dark py-1 px-4 m-2 rounded" id="do-button" onclick="deleteTask(${id})">YES, DO IT</div>
      </div>
      
    </div> `
}

function showHideItemDialog(id) {
   generateHideItemDialog(id);
   document.getElementById('board-dialog').classList.remove('d-none');

}

function generateHideItemDialog(id) {
   document.getElementById('board-dialog').innerHTML = `
    <div class="dialog-content d-flex flex-column justify-content-between">

      <div id="dialog-headline">
         <div class="d-flex justify-content-start border px-1 rounded-top border-warning bg-warning text-black">
           WARNING
         </div>
      </div>
      <div id="dialog-text" class="px-3">
         <div>Do You realy want to hide this item at board-site? You can change your choice on the backlog-site later</div>         
      </div>
      <div class="dialog-button-area d-flex justify-content-around " >
         <div class="cancel-button d-flex border border-dark py-1 px-4 m-2 rounded" id="button-cancel" onclick="doCancel()">Cancel</div>
         <div class="do-button d-flex border border border-dark py-1 px-4 m-2 rounded" id="do-button" onclick="hideItem(${id})">YES, DO IT</div>
      </div>      
    </div> `
}

function showMoveToDialog(id) {
   generateMoveToDialog(id);
   document.getElementById('board-dialog').classList.remove('d-none');
}

function generateMoveToDialog(id) {
   document.getElementById('board-dialog').innerHTML = `  
    
   <div class="dialog-content d-flex flex-column justify-content-between">

      <div id="dialog-headline">
         <div class="d-flex justify-content-start border px-1 rounded-top border-info bg-info text-black">
           MOVE TO
         </div>
      </div>      

      <div class="dialog-button-area d-flex flex-column justify-content-around py-2" >
         <div class="cancel-button d-flex border border-dark py-2 px-4 m-2 rounded" id="button-cancel" onclick="changeSection(${id},'todo')">TO DO</div>      
         <div class="cancel-button d-flex border border-dark py-2 px-4 m-2 rounded" id="button-cancel" onclick="changeSection(${id},'inprogress')">IN PROGRESS</div>      
         <div class="cancel-button d-flex border border-dark py-2 px-4 m-2 rounded" id="button-cancel" onclick="changeSection(${id},'testing')">TESTING</div>               
         <div class="cancel-button d-flex border border-dark py-2 px-4 m-2 rounded" id="button-cancel" onclick="changeSection(${id},'done')">DONE</div>     
         <div class="cancel-button d-flex border border-dark py-2 px-4 m-2 rounded" id="button-cancel" onclick="doCancel()">Cancel</div>      
      </div>
      
    </div>

 `
}