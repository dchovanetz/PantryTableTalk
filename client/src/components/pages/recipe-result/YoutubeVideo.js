import React, { useEffect } from "react";
import './YoutubeVideo.css'

function YoutubeVideo(props) {
  //variable to check if youTUbe video is available--> for if/else statement
const video = (
  <iframe 
  width="600" 
  height="375" 
  src= {props.video}
  frameBorder="0" 
  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
  title={`Video of ${props.name}`}/>
)

const noVidMessage = (
  <p className = "p-noVideo">Cooking demonstration video coming soon!</p>
)
return (
  <div className="container" id="youtube">
      {props.video ? video : noVidMessage}
  </div>
    );
  }

export default YoutubeVideo;