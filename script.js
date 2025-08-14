const addElement=document.querySelector('.add-btn');
const notesContainer=document.querySelector('.notes-container');
const inputElement=document.querySelector('.add-input');

const deleteSpan=document.createElement('span').innerText='X'
addElement.addEventListener('click',()=>{
    addNote();
});

inputElement.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        addNote();
    }
});


function addNote(){
    const note=inputElement.value.trim();
    if(note){
        const noteDiv=document.createElement('div');
        noteDiv.className='note';
        noteDiv.innerHTML=`
                <textarea name="" id="">${note} </textarea>
                <span class='s'>X</span>
        `;

        notesContainer.appendChild(noteDiv);
        noteDiv.querySelector('.s').addEventListener('click',()=>{
            notesContainer.removeChild(noteDiv);
        })

    }else{
        alert('cant add null NOTE');
    }
    inputElement.value='';

}
