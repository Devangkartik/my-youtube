import React from 'react'

import { CommentDataStructure } from './CommentData';
import { CommentList } from './CommentData';



const CommentContainer = () =>{

    return(
        <div className=' p-2 m-5 '>
            <h1 className='font-extrabold text-2xl'> Comment Section : </h1>
           <CommentList comments = {CommentDataStructure}/>
        </div>
    )
}

export default CommentContainer;