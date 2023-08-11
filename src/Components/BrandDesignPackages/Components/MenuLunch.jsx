import { motion } from "framer-motion";


const MenuLunch = ({ lunch, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {lunch &&
        items
          .filter((item) => item.category === "main")
          .map((item, i) => (
            <motion.div
              className="menu-items"
              key={item.id}
              variants={itemContainer}
              transition={{ delay: i * 0.2 }}
            >
              {/* <img src={imgLunchMenu} alt="food burger" /> */}
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5 className="item-title">{item.title}</motion.h5>
                  <motion.h5  className="item-price">{item.fileFormat}</motion.h5>
                </motion.div>
                <motion.p className="item-desc">{item.desc}</motion.p>
                <motion.a className="checkout-link"href="https://professional.youshouldgetpluggedin.io/professional-6506">Check it out now</motion.a>
              </motion.div>
            </motion.div>
          ))}
    </>
  );
};

export default MenuLunch;
