import React from "react";
import './YoutubeVideo.css'

function YoutubeVideo() {
          
let url = "https://www.youtube.com/embed/wS8R5Bq9aFg?cc_load_policy=1"    
  return (
<div className="container" id="youtube">

<iframe 
    width="560" 
    height="315" 
    src= {url}
    frameBorder="0" 
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
</div>

  );
}

export default YoutubeVideo;