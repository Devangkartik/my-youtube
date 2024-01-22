import React from 'react'

import { CommentDataStructure } from './CommentData';
import { CommentList } from './CommentData';



const CommentContainer = () =>{

    return(
        <div className='m-3 p-2 '>
            <h1 className='m-3 p-2 font-extrabold'>comment Section : </h1>
           <CommentList comments = {CommentDataStructure}/>
        </div>
    )
}

export default CommentContainer;