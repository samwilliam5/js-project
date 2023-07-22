// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const updatName = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const chatrooms =document.querySelector('.chat-rooms');
// add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  console.log(message);
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});


updatName.addEventListener('submit', e => {
  e.preventDefault();
  const Updatename = updatName.name.value.trim();
 chatroom.updateName(Updatename);
 updatName.reset();
 updateMsg.innerText = `Your name was updated ${Updatename}`;

 setTimeout(()=>{
  updateMsg.innerText = '';
 },3000)
});

chatrooms.addEventListener('click', e => {
   console.log(e.target.tagName);
   if(e.target.tagName === 'BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(data => chatUI.render(data));
   }
});

const username = localStorage.username ? localStorage.username : 'anon';
// class instances  
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats & render
chatroom.getChats(data => chatUI.render(data));