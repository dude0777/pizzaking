




import React from 'react'
import Image from 'next/image'
import classes from './Featured.module.css'
import { useState } from 'react';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image
         className={classes.imagess} src="/img/arrowl.png" alt="" fill objectFit="contain"/>
      </div>
      <div className={classes.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={classes.imgContainer} key={i}>
            <Image src={img} alt="" fill objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={classes.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" fill alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
