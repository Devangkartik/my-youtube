import React from 'react'
import user from "../assets/img/profile-user.png"

const ChatMessage = ({name,message}) =>{
    return(
        <div className='w-full h-12 m-2 bg-gray-200 rounded-lg flex'>
            <img className='h-12  ' src={user} alt="user" />
            <span className='font-bold px-2'>{name} </span>
            <span> : { message?message:"This is video one of the best video 🚀"}</span>
        </div>
    )
}

export default ChatMessage;