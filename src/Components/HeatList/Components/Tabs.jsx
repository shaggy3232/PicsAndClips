import TabButtons from "./TabButtons";
import { css, jsx } from "@emotion/react";

const Tabs = ({ setApplemusic,setSpotify}) => {
  
    return (
      <div
        className="Navbar"
      >
        <h3 className="logo">Exper.</h3>
        <TabButtons
          className="TabButtons"
          setApplemusic={setApplemusic}
          setSpotify={setSpotify}
        />
        <h3 className="dwu">Listen with us.</h3>
      </div>
    );
  };
  
  export default Tabs;

  