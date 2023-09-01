/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";

import AllItems from "./MenuAll";
import Breakfast from "./MenuBreakfast";
import Lunch from "./MenuLunch";
import Shakes from "./MenuShakes";

const MenuItems = ({ items, breakfast, lunch, shakes }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <motion.div
      className="MenuItems container"
      variants={container}
      initial="hidden"
      animate="visible"
      css={css`
        display: grid;
        z-index:1;
        position:relative;
        grid-template-columns: 1fr 1fr;
        ${mq[2]} {
          grid-template-columns: 1fr;
        }
        margin-top: 30px;
        margin-bottom: 30px:
        padding: 40px 20px;
        background: #eef0eb;
        border-radius: 50px;
        box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
        margin-bottom: 3rem;
        width:80%;
        .checkout-link{
          text-decoration:none;
          color: #143253;
          &:hover{
            text-decoration: underline;
          }
        }
        .menu-items {
          padding: 1rem 1.5rem;
          display: flex;
          border: #b4b8ab 1px solid;
          border-top: none;
          border-right:none;
          ${mq[0]} {
            display: grid;
            img {
              margin-bottom: 10px;
            }
          }

          &:last-child {
            border-bottom: none;
            margin-bottom: 10px;
          }

          &:nth-child(odd) {
            border-left: none;
            ${mq[2]} {
              border-right: none;
            }
          }

          &:nth-child(even) {
            border-right: none;
            ${mq[2]} {
              border-left: none;
            }
          }

          .item-content {
            display: grid;
            padding: 0 1rem;

            p {
              color: #0b3948;
              font-size: 0.8rem;
              ${mq[(0, 1)]} {
                font-size: 0.7rem;
                color: #0b3948;
              }
            }

            .item-title-box {
              display: flex;
              justify-content: space-between;

              .item-title,
              .item-price {
                font-size: 1rem;
                color: #0b3948;
                ${mq[(0, 1)]} {
                  font-size: 0.8rem;
                  color: #0b3948;
                }
              }
            }
          }
        }

        img {
          height: 85px;
          ${mq[(0, 1)]} {
            height: 75px;
          }
          cursor: pointer;
        }
      `}
    >
      {/* <AllItems all={all} items={items} /> */}
      <Breakfast breakfast={breakfast} items={items} />
      <Lunch lunch={lunch} items={items} />
      <Shakes shakes={shakes} items={items} />
    </motion.div>
  );
};

export default MenuItems;
