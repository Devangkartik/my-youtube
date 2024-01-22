
import React from "react";

import Logo from "../assets/img/YouTube-Logo.wine.png";
import user from "../assets/img/profile-user.png"
import humburger from "../assets/img/yuotubeMenu.png"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () =>{
  const dispatch = useDispatch();
  
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
 }

  return(
<div className='grid grid-flow-col p-5 m-2 shadow-lg h-28 '>
        <div className="flex h-20 col-span-1 ">
            <img  className='cursor-pointer'onClick={()=>toggleMenuHandler()} src={humburger}  alt="hamburger..." />
            <img className='pl-8' src={Logo} alt="youtube..." />
         </div>
         <div className='col-span-10 text-center'>
              <div>
               <input className='w-1/2 p-3 rounded-l-full border border-black visible' type="text" />
               <button className='p-3   rounded-r-full border border-gray-500 bg-gray-200' >Search</button>
           </div>
        </div>
        <div className='col-span-1'>
        <img className='h-12' src={user} alt="User...."  />
        </div> 
    </div>
  )

}
 export default Head;






































































 
// import React, { useEffect, useState } from 'react'
// import Logo from "../assets/img/YouTube-Logo.wine.png";
// import humburger from "../assets/img/yuotubeMenu.png"
// import user from "../assets/img/profile-user.png"
// import { useDispatch } from 'react-redux'
// import { toggleMenu } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_API } from '../utils/constants';
// import { chacheResults } from '../utils/searchSlice';
// import { useSelector } from 'react-redux';


// const Head = () => {

  // const [searchQuery,setSearchQuery] = useState(" ")
  // const [suggestions , setSuggestions] = useState([])
  // const [showSuggestions ,setShowSuggestions] = useState(false)
  
  // const searchChache = useSelector(store => store.searchChache);
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   const timer =  setTimeout(() => {
  //     if(chacheResults){
  //       setSuggestions(searchChache[searchQuery]);
  //     }else{
  //       getSearchSuggestions();
  //     }
  //    }, 200);
  //     return () =>{ clearTimeout(timer);  }
  
  //   },[searchQuery])
    
  //   const getSearchSuggestions = async () =>{
  //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
  //     const json = data.json();
  //     console.log(json[1]);
  //     setSuggestions(json[1])

  //     dispatch(chacheResults({
  //       [searchQuery] : json[1]
  //     }))
  //   }
  
 

  // const toggleMenuHandler = () =>{
  //    dispatch(toggleMenu());
  // }
  
//   return (
//     <div className='grid grid-flow-col p-5 m-2 shadow-lg h-28 '>
//         <div className="flex h-20 col-span-1 ">
//             <img onClick={()=>toggleMenuHandler()} className='cursor-pointer' src={humburger}  alt="hamburger..." />
//             <img className='pl-8' src={Logo} alt="youtube..." />
//         </div>
//         <div className='col-span-10 text-center'>
//              <div>
//               <input className='w-1/2 p-3 rounded-l-full border border-black visible' type="text" 
//               value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)}
//               onBlur={()=>setShowSuggestions(false)}/>
//                <button className='p-3   rounded-r-full border border-gray-500 bg-gray-200' >Search</button>
//            </div>
//          { showSuggestions && <div className='fixed bg-white  py-2 px-2 w-[37rem] shadow-lg rounded-lg border'>
//             <ul>
//               {suggestions?.map((s)=>(
//               <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
//                 {s}
//               </li>
//               ))}
//             </ul>
//            </div> }
//         </div>
//         <div className='col-span-1'>
//         <img className='h-12' src={user} alt="User...."  />
//         </div>
       
//     </div>
   
   
//   )
// }

// export default Head ;