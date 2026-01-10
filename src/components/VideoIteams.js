import React from 'react'

const  VideoItems = ({info}) => {

<<<<<<< HEAD
        console.log(info);

=======
>>>>>>> 114c00d (Inicial commit after brach rename)
    const { snippet , statistics } = info;
    const {channelTitle , title , thumbnails  } = snippet;

  return ( 
        <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails" />
        <ul>
            <li className="font-bold">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}
<<<<<<< HEAD

=======
  
export const AdVideoCard = ({info}) =>{
 const { snippet , statistics } = info;
    const {channelTitle , title , thumbnails  } = snippet;
  return(
    <div className='bg-black-500 p-1 m-1 border border-red-800 hover:bg-black-700'>
      <VideoItems info={info}/>
    </div>
  )
}
>>>>>>> 114c00d (Inicial commit after brach rename)
export default VideoItems;