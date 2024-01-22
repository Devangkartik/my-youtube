import React,{useEffect} from 'react'
import ChatMessage from './ChatMessage';
import { addMessages } from '../utils/chatSlice';
import { useDispatch } from 'react-redux';
import { generateRandomName } from '../utils/helper';
import { useSelector } from 'react-redux';
import { generateRandomText } from '../utils/helper';
import { useState } from 'react';

const LiveChat = () =>{
     const [liveMessage , setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);
   

  useEffect (() => {

  const timer = setInterval(()=>{

         dispatch(addMessages({
            name : generateRandomName(),
            message : generateRandomText(30)+'🚀'
         })  
       );
     },2000)

     return () => clearInterval(timer)

  },[])

 return (
      <>  <div>
            <div className='flex w-full h-[420px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
                 <p className='m-2 font-extrabold shadow-lg m-2 p-4 border rounded '> 🔴 LiveChat </p> 
                 {/* <ChatMessage name = 'Akshay Saini' message = 'Lorem ipsum dolor site Amet 🚀'/>
                 <ChatMessage name = 'Akshay Saini' message = 'Lorem ipsum dolor site Amet 🚀'/>
                 <ChatMessage name = 'Akshay Saini' message = 'Lorem ipsum dolor site Amet 🚀'/> */}
                 { chatMessages?.map((c,i) => (
                     <ChatMessage key={i} name={c.name} message={c.message} />) )} 
            </div> 
           </div>

              <form className=' w-full p-2 m-2 border border-black rounded-lg' onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addMessages({
                      name : "Devangkartik ",
                      message : liveMessage
                    }))
                    setLiveMessage("");
              }}>

               <input className="px-2 w-96 border border-black " type="text" value={liveMessage} onChange={(e)=>{
                    setLiveMessage(e.target.value)
                  }}/>
               <button className='px-2 mx-2 bg-green-400 rounded-lg'>Send</button>
              </form>
       </>
    )
}

export default LiveChat;