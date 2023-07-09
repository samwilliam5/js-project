console.log(db.collection('recepie'));
const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const RecepieList = (lists,ids) =>{
    const html = `<li data-id = '${ids}'>
    <div>${lists.title}</div>
    <div>${lists.created_at.toDate()}</div>
    <button class='btn-danger py-1 px-2'>Delete</button>
    </li>`;

    console.log(html);

    list.innerHTML += html;
  
};
list.addEventListener('click',(e)=>{
    console.log(e.target);

    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recepie').doc(id).delete()
        .then(()=>{
         console.log('deleted successfully');
        })
        .catch(err =>console.error(err));
    }
});

form.addEventListener('submit',(e)=>{
 e.preventDefault(); 

 const now = new Date();
 const documents = {
     title : form.recipe.value.trim(),
     created_at : firebase.firestore.Timestamp.fromDate(now),
 };

 db.collection('recepie').add(documents)
 .then(() =>console.log('recepie added successfully'))
 .catch(err => console.log(err));
});




const deleteRecepie = (id)=> {
    const recepie = document.querySelectorAll('li');
    recepie.forEach((recepie)=>{
        if(recepie.getAttribute('data-id') === id){
            recepie.remove();
        }
      });
  };

const unsub = db.collection('recepie').onSnapshot((snapshot)=>{
console.log(snapshot.docChanges());
snapshot.docChanges().forEach((snap)=>{
    const doc =snap.doc;
    console.log(snap);
    if(snap.type === 'added'){
        RecepieList(doc.data(),doc.id);
    }
    else if(snap.type === 'removed'){
        deleteRecepie(doc.id);
    }

});
});



button.addEventListener('click',()=>{
   unsub();
   console.log('unsubscribe from changes');
});