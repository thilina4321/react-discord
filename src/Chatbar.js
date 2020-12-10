import React, { useEffect,useCallback } from 'react'
import ChatHeader from './ChatHeader'
import './Chatbar.css'
import Message from './Message'

import {useSelector, useDispatch} from 'react-redux'
import * as actionType from './store/actionTypes'
import db from './firebase'

const Chatbar = React.memo((props)=> {
  const messages = useSelector(state => state.channel
    .messages.filter(mgs=>mgs.channelId === props.id))
  const user = useSelector(state => state.user.user)

  const dispatch = useDispatch()

  const addMessages = useCallback(
    (val) => 
        dispatch({
          type: actionType.ADD_MESSAGES,
          value: val,
        }),
    [dispatch]
  ) 
    

   useEffect(()=>{
      if(props.id){
        console.log(props.id, 'idoo');
         db.collection('channels').doc(props.id).collection('messages')
        .onSnapshot(snapshot=>{
          if(snapshot.docs.length > 0){
            const msgs = snapshot.docs.map(doc=>{
              console.log(doc.data());
              return {
                id:doc.id,
                message:doc.data().message,
                channelId:doc.data().channelId,
                user:doc.data().user,
                image:doc.data().image
              }}
            )
            addMessages(msgs)
          }
        })


      }
  },[addMessages, props.id])

    

    const addMessage = useCallback(
      
        (e)=>{
          e.preventDefault()
           db.collection('channels').doc(props.id)
           .collection('messages')
            .add({
              user:user.name,
              channelId:props.id,
              message:e.target.elements.message.value,
              image:user.image,
            })
            e.target.elements.message.value = ''
        },
      
      [props.id, user.name, user.image]
    )
  
  
    

    

    return (
      
        <div className="chatbar">
            <ChatHeader name={props.name}/>

            <div className="chat__messages">
              {messages && messages.map(msg=>{
                return <Message key={msg.id} name={msg.user}
                message={msg.message}
                image={msg.image}
                />
              })}
            </div>

            <div className="chat__input">
                <form onSubmit={ addMessage }>
                    <input name="message" 
                    placeholder="Type Message"></input>
                    <button> Send Message </button>
                </form>

            </div>       
        </div>
    )
})


export default (Chatbar)
