import heatData from "./musicData";
import React, { useState } from 'react';
import Tabs from "./Components/Tabs";
import { css, jsx, Global } from "@emotion/react";
import PlaylistItems from "./Components/PlaylistItemms";

function Heatlist() {

    const [applemusic, setApplemusic] = useState(true);
    const [spotify, setSpotify] = useState(false);
    
    return(
        <div
        className="App"
        css={css`
          background: #f0eff1;
          height: 100%;
          padding: 70px 0;
        `}
      >
      
        <Tabs setApplmusic ={setApplemusic} setSpotify= {setSpotify}/>
        <PlaylistItems
          items={heatData}
          applemusic={applemusic}
          spotify={spotify}
        />

      </div>
    )
}

export default Heatlist