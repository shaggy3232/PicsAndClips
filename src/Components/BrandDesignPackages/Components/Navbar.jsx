/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import Buttons from "./Buttons";

const Navbar = ({ setAll, setBreakfast, setLunch, setShakes }) => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Navbar"
      css={css`
        display: flex;
        justify-content: space-around;
        .logo {
          font-size: 1.8rem;
          color: #0b3948;
        }
        
      `}
    >
      <h3 className="logo">Virtual Office</h3>
      <Buttons
        className="Buttons"
        // setAll={setAll}
        setBreakfast={setBreakfast}
        setLunch={setLunch}
        setShakes={setShakes}
      />
    </div>
  );
};

export default Navbar;
