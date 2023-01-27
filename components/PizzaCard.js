import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Checked from './Checked'
import classes from './PizzaCard.module.css'
import ViewIcon2 from './ViewIcon2'
import CartIcon from './CartIcon'
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
const variants = {
  hover: {
    y: -120,
    scale: [1.1, 1],
    transition:{duration:0.1}
  },
  initial: {
    x: 0,
    scale: 1,
    y:-90,
    opacity:0
  }
};
const PizzaCard = ({ pizza }) => {
  const [isTicked, setIsTicked] = useState(false);

  const handleClick = () => {
    setIsTicked(true);
    setTimeout(() => setIsTicked(false), 3000);
  };
  
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
   < motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   className={classes.card}>
       <Image   className={classes.image} width='200' height='250' src={pizza.img}/>
       
    <motion.button    variants={variants}    whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
            animate={isHovered ? "hover" : "initial"}
            className={classes.button}>
              
              {isTicked ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Checked />
        </motion.div>
      ) : (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
              
              
              
              
              
              
              
              <CartIcon/>
              </motion.div>
      )}
            
            
            
            
            
            
            
            
            
            
            
            
            </motion.button>
              <Link href={`/product/${pizza._id}`} passHref>
        <motion.button    variants={variants}
            animate={isHovered ? "hover" : "initial"}
            className={classes.button2}><ViewIcon2/></motion.button></Link>
        <div className={classes.content}> <h1  className={classes.text}>{pizza.title}</h1>
          {/*we have prices array belwo from the model we created in mongoose model product.js there is prices array describing prices for differnent pizza prices small medium large  */}
      <span  >${pizza.prices[0]}</span>
      <p >{pizza.desc}</p></div> 
       </motion.div>
  )
}

export default PizzaCard