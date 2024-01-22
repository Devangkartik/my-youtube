import React from 'react'

const  VideoItems = ({info}) => {

        console.log(info);

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

export default VideoItems;