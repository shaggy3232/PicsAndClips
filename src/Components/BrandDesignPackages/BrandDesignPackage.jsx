/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";

import MenuItems from "./Components/MenuItems";
import MenuData from "./Components/MenuData";
import Navbar from "./Components/Navbar";
import imessage from "../../Assets/chat3dmodel.png"
import "./BrandDesignPackage.css"

function BrandDesignMenu() {
  // const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);

  return (
    <div>
       <img src={imessage} className="chat3d"/>
      <Navbar
        // setAll={setAll}
        setBreakfast={setBreakfast}
        setLunch={setLunch}
        setShakes={setShakes}
      />
      <MenuItems
        items={MenuData}
        // all={all}
        breakfast={breakfast}
        lunch={lunch}
        shakes={shakes}
      />
    </div>
  )
}

export default BrandDesignMenu;