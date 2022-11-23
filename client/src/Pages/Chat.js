/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import useSocket from 'use-socket.io-client';
import { useImmer } from 'use-immer';

// import './index.css';

const Messages = props => props.data.map(m => m[0] !== '' ? (<li><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>) : (<li className="update">{m[1]}</li>) );

const Online = props => props.data.map(m => <li id={m[0]}>{m[1]}</li>);

function Chat() {
  const [id, setId] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [room, setRoom] = useState('');
  const [input, setInput] = useState('');

  const [socket] = useSocket('https://desolate-island-83244.herokuapp.com/');
  socket.connect();
  console.log(socket);

  const [messages, setMessages] = useImmer([]);
  const [online, setOnline] = useImmer([]);

  useEffect(()=>{
    socket.on('message que',(nick,message) => {
      setMessages(draft => {
        draft.push([nick,message])
      })
    });

    socket.on('update',message => setMessages(draft => {
      draft.push(['',message]);
    }));

    socket.on('people-list',people => {
      let newState = [];
      for(let person in people){
        newState.push([people[person].id,people[person].nick]);
      }
      setOnline(draft=>{draft.push(...newState)});
      console.log(online)
    });

    socket.on('add-person',(nick,id)=>{
      setOnline(draft => {
        draft.push([id,nick])
      })
    });

    socket.on('remove-person',id=>{
      setOnline(draft => draft.filter(m => m[0] !== id))
    });

    socket.on('chat message',(nick,message)=>{
      setMessages(draft => {draft.push([nick,message])})
    });
  },0);

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    setId(name);
    socket.emit("join", name,room);
  };

  const handleSend = e => {
    e.preventDefault();
    if(input !== ''){
      socket.emit('chat message',input,room);
      setInput('');
    }
  };

  return id ? (
    <section style={{display:'flex',flexDirection:'row'}} >
      <ul id="messages"><Messages data={messages} /></ul>
      <ul id="online"> &#x1f310; : <Online data={online} /> </ul>
      <div id="sendform">
        <form onSubmit={e => handleSend(e)} style={{display: 'flex'}}>
            <input id="m" onChange={e=>setInput(e.target.value.trim())} /><button style={{width:'75px'}} type="submit">Send</button>
        </form>
      </div>
    </section>
  ) : (
    <div style={{ textAlign: 'center', margin: '30vh auto', width: '70%' }}>
      <form onSubmit={event => handleSubmit(event)}>
        <input id="name" onChange={e => setNameInput(e.target.value.trim())} required placeholder="What is your name .." /><br />
        <input id="room" onChange={e => setRoom(e.target.value.trim())} placeholder="What is your room .." /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default Chat;






















// import React, { useEffect, useState } from 'react';

// import useSocket from 'use-socket.io-client';
// import { useImmer } from 'use-immer';
// import {
//   Box,
//   Input,
//   FormControl,
//   Button,
//   ButtonGroup,
//   Container,
//   Flex,
//   Text,
//   Textarea,
// } from "@chakra-ui/react";
// import { ChevronRightIcon } from "@chakra-ui/icons";

// const Messages = props => props.data.map(m => m[0] !== '' ? (<li><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>) : (<li className="update">{m[1]}</li>) );

// const Online = props => props.data.map(m => <li id={m[0]}>{m[1]}</li>);

// export default () => { // sets id for each user in chat room
//   const [id, setId] = useState(''); 
  
//   const [usernameInput, setUsernameInput] = useState('');

//   // handles state of
//   const [input, setInput] = useState('');

//     // uses socket APIs and react hooks version of socket.io library (https://socket.io/docs/v4/)
//   // TO DO @cassandrakise @iamjoyfulgirl talk with Mark about whether this is necessary? (server calls in chat vs on app.js )
//   // make this a link to external repo heroku app
//   const [socket] = useSocket('<https://desolate-island-83244.herokuapp.com/>');
//   socket.connect();

//   //sets messages and online status per user in chat feed -- message History
//   // the useImmer hook manages state of arrays and objects w/o mutating the original state -- combine useState and Immer to give immutable state management -- this is helpful for managing lists of ppl who are online and messages that need to be displayed
//   const [messages, setMessages] = useImmer([]);
//   const [online, setOnline] = useImmer([]);
  
  
//   useEffect(() => {
//     socket.on('message feed', (user, message) => {
//       setMessages(draft => {
//         draft.push([nick, message]) // user replaces "nick???" in example
//       })
//     });

//     socket.on('update', message => setMessages (draft => {
//       draft.push(['', message]);
//     }));

//     socket.on('people-list', people => {
//       let newState = [];
//       for (let person in people){
//         newState.push([people[person].id, people[person].nick]);
//       }
//       setOnline(draft=>{draft.push(...newState)});
//       console.log(online)
//     });

//     socket.on('add-person', (nick, id) => {
//       setOnline(draft => {
//         draft.push([id, nick])
//       })
//     });

//     socket.on('remove-person',id => {
//       setOnline(draft => draft.filter (m => m[0] !== id))
//     });

//     socket.on('chat-message', (nick, message) => {
//       setMessages(draft => {draft.push([nick, message])})
//     });
//   },0);

  
//   // intended to handle message input
//   // Mark suggests api call -- useEffect every 15 secs 
//   // TO-DO: @cassandrakise @iamjoyfulgirl @Luan-Pham will need to invoke functions below to ensure user is logged infunction formSubmitHandler() {

//   // will check if the user has an account (with name form field complete), necessary to send chat message
//   const handleSubmit = e => {
//     // if user has an account, it will set an id for user
//     e.preventDefault();
//       // checks to see if logged in
//       if (!loggedIn) {
//         return alert ('You must have account to use the chat. Please log in.')
//       }
//       setId(userName);
//       useSocket.emit('join', userName);
//   };


//   const handleSend = e => {
//     e.preventDefault();
//     if(input !== ''){
//       socket.emit('chat message', input, room);
//       setInput('');
//     }
//   };


// // TO-DO @cassandrakise @iamjoyfulgirl merge example with chakra component shell, starting on line 132

// return id ? (
//   <section style={{display:'flex',flexDirection:'row'}} >
//     <ul id="messages"><Messages data={messages} /></ul>
//     <ul id="online"> &#x1f310; : <Online data={online} /> </ul>
//     <div id="sendform">
//       <form onSubmit={e => handleSend(e)} style={{display: 'flex'}}>
//           <input id="m" onChange={e=>setInput(e.target.value.trim())} /><button style={{width:'75px'}} type="submit">Send</button>
//       </form>
//     </div>
//   </section>
// ) : (
//   <div style={{ textAlign: 'center', margin: '30vh auto', width: '70%' }}>
//     <form onSubmit={event => handleSubmit(event)}>
//       <input id="name" onChange={e => setNameInput(e.target.value.trim())} required placeholder="What is your name .." /><br />
//       <input id="room" onChange={e => setRoom(e.target.value.trim())} placeholder="What is your room .." /><br />
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// )
// };
// // }

//   // return id ? (
//   //   <>
//   //     <Box
//   //       maxW={"sm"}
//   //       maxH={"sm"}
//   //       borderWidth={"1px"}
//   //       borderRadius={"lg"}
//   //       overflow="hidden"
        
//   //     >
//   //       <Box
//   //         d={"flex"}
//   //         justifyContent={"space-between"}
//   //         w={"100%"}
//   //         h={"91.5vh"}
//   //         p={"10px"}
//   //       >
//   //         <Textarea
//   //           maxW={'flex'}
//   //           border="1px"
//   //           borderColor="gray.200"
//   //           boxShadow="xl"
//   //           isDisabled
//   //           placeholder="Here is a sample placeholder" // pass feed ie Chat Feed Component in through here -- will need to be updated
//   //         />
//   //       <Box p="6">
//   //       <Box display={"flex"} alignItems={"baseline"}></Box>
//   //         <form onSubmit={formSubmitHandler}>
//   //         <FormControl>
//   //             <Box>
//   //               <Input 
//   //                 placeholder={"Enter Message"}
//   //                 name='message'
//   //                 value={messages}
//   //                 onChange={(e) => setMessages(e.target.value)} 
//   //                 mb={3} 
//   //                 _hover={{ fontWeight: 'semibold' }}
//   //               />
//   //               <Button
//   //                 type='submit'
//   //                 rightIcon={<ChevronRightIcon />}
//   //                 colorScheme={"red"}
//   //                 variant={"solid"}
//   //               ></Button>
//   //             </Box>
//   //           </FormControl>
//   //           </form>
//   //         </Box>
//   //       </Box>
//   //     </Box>
//   //   </>
//   // );
// // }

