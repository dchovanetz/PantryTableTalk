import React, { useEffect } from "react";
import './YoutubeVideo.css'

function YoutubeVideo(props) {
  //variable to check if youTUbe video is available--> for if/else statement
const youTube = props.video
useEffect(()=> {
  console.log(youTube)
}, [])
 
if (youTube) {
  return (
      <iframe 
          width="600" 
          height="375" 
          src= {youTube}
          frameBorder="0" 
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title={`Video of ${props.name}`}>
      </iframe>
  )
} else {
  return (
  <p className="p-noVideo">Cooking demonstration video coming soon!</p>
  )
};
}

export default YoutubeVideo;