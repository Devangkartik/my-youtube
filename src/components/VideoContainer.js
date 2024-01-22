import React, { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoItems from "./VideoIteams";
import { Link } from "react-router-dom";


const VideoContainer = () => {

    const [videos,setVideos] =useState([]);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async() =>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json);
        // console.log(json.items);
        setVideos(json.items);
    }
    return(
        <div className="flex flex-wrap justify-center">
            {videos.map((video) =>(
              <Link key={video.id} to={"/watch?v=" + video.id} >
               <VideoItems  info={video}/>
               </Link>
                ))}
             {/* <VideoItems info={ videos[0] }/> */}
        </div>
    )
}

export default VideoContainer;