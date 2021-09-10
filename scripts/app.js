// // DOM queries

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-message');
const rooms = document.querySelector('.chat-rooms');

// add a new chat

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

// update username

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //update naem in chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset form
    newNameForm.reset();
    //Show then hide update mssg
    updateMssg.innerHTML = `your name was updated to ${newName}`
    setTimeout(() => {
    updateMssg.innerText = '';
    }, 3000);
});



//  // add a new chat
//  newChatForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const message = newChatForm.message.value.trim();
//     chatroom.addChat(message)
//       .then(() => newChatForm.reset())
//       .catch(err => console.log(err));
//   });



//Update the chat room
rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }    
});


//check local storage for name

const username = localStorage.username ? localStorage.username: 'anon'  ;
  

//Class instances

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats and render
chatroom.getChats(data => chatUI.render(data));

// 






// dom queries
// const chatList = document.querySelector('.chat-list'); 

// // class instances
// const chatUI = new ChatUI(chatList);
// const chatroom = new Chatroom('gaming', 'shaun');

// get chats & render
// chatroom.getChats(data => chatUI.render(data));