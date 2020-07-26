import React from "react";
import './YoutubeVideo.css'
import { PromiseProvider } from "mongoose";

function YoutubeVideo(props) {
  return (
<div className="container" id="youtube">

<iframe 
    width="560" 
    height="315" 
    src= {props.video}
    frameBorder="0" 
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
</iframe>
</div>

  );
}

export default YoutubeVideo;