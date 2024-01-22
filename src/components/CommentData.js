import React from "react"
import user from "../assets/img/profile-user.png"

export const CommentDataStructure = [
    {
        name : "Devang kartik",
        text : "I have never seen such kind of videos",
        replies : [
              {
                name : "Om jaiswal",
                text : "Its is best movie I never ever seen in my life "
              }
        ]
    }
]

 const CommentData = ({data}) =>{
    const {name,text,replies} = data
    return (
        <div className="flex shadow-sm bg-gray-200 p-2 m-3 rounded-sm col-span-11">
           <img className="w-12 h-12 rounded-full" src={user} alt="user" srcset="" />
            <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
            </div>
        </div>
    )
}

export const CommentList = ({comments}) =>{
      return comments.map((comment,index) =>(
       <div>
             <CommentData key={index} data={comment}/>
             <div className="pl-2 border border-l-black ml-5">
                {/* <CommentList key={index} comments = {comment?.replies} /> */}
             <CommentData key={index} data={comment}/>
             <CommentData key={index} data={comment}/>
             <CommentData key={index} data={comment}/>
             </div>
       </div>
    )  
 )    
     
}

export default CommentData ;