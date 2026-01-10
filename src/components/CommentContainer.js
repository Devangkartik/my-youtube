import React from 'react'

import { CommentDataStructure } from './CommentData';
import { CommentList } from './CommentData';



const CommentContainer = () =>{

    return(
<<<<<<< HEAD
        <div className='m-3 p-2 '>
            <h1 className='m-3 p-2 font-extrabold'>comment Section : </h1>
=======
        <div className=' p-2 m-5 '>
            <h1 className='font-extrabold text-2xl'> Comment Section : </h1>
>>>>>>> 114c00d (Inicial commit after brach rename)
           <CommentList comments = {CommentDataStructure}/>
        </div>
    )
}

export default CommentContainer;