import React from "react"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const SideBar = () =>{
   const isMenuOpen = useSelector(store => store.app.isMenuOpen);
   //early Return
   if(!isMenuOpen) return null;
    return (
        <div className='p-5 shadow-lg col-span-1 '>
             <ul>
                 <li> <Link to="/"> Home </Link>  </li>
                 <li>Shorts</li>
                 <li>videos</li>
                 <li>Live</li>
             </ul>
             <hr/>

             <h1 className="font-bold pt-5">Subscriptions</h1>
             <ul>
                 <li>Music</li>
                 <li>Sports</li>
                 <li>Gaming</li>
                 <li>Movies</li>
             </ul>
             <hr/>
             <h1 className="font-bold pt-5">Watch Later</h1>
               <ul>
                   <li>Library</li>
                   <li>History</li>
                   <li>Liked videos</li>
               </ul>
               <hr/>

               <h1 className="font-bold pt-5">Explore</h1>
               <ul>
                   <li>Trending</li>
                   <li>Music</li>
                   <li>Movies</li>
                   <li>Live</li>
                   <li>Gaming</li>
                   <li>News</li>
                   <li>Sports</li>
                   <li>Learning</li>
                   <li>Fashion & Beauty</li>
               </ul>
        </div>
    )
}

export default SideBar;