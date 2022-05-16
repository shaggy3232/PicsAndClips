/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";

import MenuItems from "./Components/MenuItems";
import MenuData from "./Components/MenuData";
import Navbar from "./Components/Navbar";

function BrandDesignMenu() {
  // const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);

  return (
    <div>
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
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
          ::selection {
            background: #0b3948;
            color: #0b3948;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            --webkit-tap-highlight-color: transparent;
          }
          body::-webkit-scrollbar {
            width: 12px; /* width of the entire scrollbar */
          }
          body::-webkit-scrollbar-track {
            background: #0b3948; /* color of the tracking area */
          }
          body::-webkit-scrollbar-thumb {
            background-color: #444444; /* color of the scroll thumb */
            border-radius: 20px; /* roundness of the scroll thumb */
            border: 3px solid #0b3948; /* creates padding around scroll thumb */
          }
          body {
            background: d9dbf1;
          }
          .container {
            width: 80%;
            margin: auto;
          }
        `}
      />
    </div>
  )
}

export default BrandDesignMenu;