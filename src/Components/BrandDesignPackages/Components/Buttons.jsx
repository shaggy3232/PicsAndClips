/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setBreakfast, setLunch, setShakes }) => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Buttons"
      css={css`
        display: flex;
        button {
          background: #eef0eb;
          margin: 0 2rem;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: 0.3s linear;
          outline: none;
          ${mq[2]} {
            margin: 0 1rem;
          }
          ${mq[0]} {
            margin: 0;
            margin-top: 2rem;
          }
          &::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #152243;
            transition: width 0.3s ease-in;
          }
          &:hover::after {
            width: 100%;
          }
          span {
            padding: 0 5px;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            color: #0b3948;
            margin: auto;
            ${mq[2]} {
              padding: 0;
            }
            ${mq[0]} {
              font-size: 0.7rem;
            }
          }
        }
      `}
    >
      {/* <button
        onClick={() => {
          // setAll(true);
          setBreakfast(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span>All</span>
      </button> */}

      <button
        onClick={() => {
          setBreakfast(true);
          // setAll(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span>One man army</span>
      </button>

      <button
        onClick={() => {
          setLunch(true);
          // setAll(false);
          setBreakfast(false);
          setShakes(false);
        }}
      >
        <span>Dream team</span>
      </button>

      <button
        onClick={() => {
          setShakes(true);
          // setAll(false);
          setBreakfast(false);
          setLunch(false);
        }}
      >
        <span>Dynasty</span>
      </button>
    </div>
  );
};

export default Buttons;
