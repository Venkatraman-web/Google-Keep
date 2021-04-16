const addBtn = document.getElementById('addBtn');
const deleteAll = document.getElementById('deletall');


addBtn.addEventListener('click', addNote);
function addNote(){
   let note = document.createElement('div');
   note.classList.add('note');
   let htmlData = `<iframe src="textarea.html" frameborder="0" class="notes">
   </iframe>
 <div class="operation">
 <img src="../img/del.jpeg" alt="" id="delBtn"/>
</div>`;

note.setAttribute(
   'style',
   'display:flex, flexDirection:row; justifyContent:space-around;'
)

note.insertAdjacentHTML('afterbegin', htmlData);

document.body.appendChild(note);
const delBtn = note.querySelector('#delBtn');
delBtn.addEventListener('click', function(){
   note.remove();
    
});
deleteAll.addEventListener('click', () => {
  note.remove();
 
});
}


