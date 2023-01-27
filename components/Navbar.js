import React from 'react'
import { useEffect } from 'react'
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from 'next/image'
import classes from './Navbar.module.css'
import { useState } from 'react'
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  //we use selector to retrieve current state of cart we from redux state object it manages retrive the quantity property value from cartSlice that what state.cart.quantity means
  //Go to [id].js for product therer we dispatch when we click add to cart
const [navbar,setNavbar]=useState(false)
useEffect(() => {
  const changeBackground = () => {
  
    if (window.scrollY >= 10) {
      setNavbar(true);
    } 
    else{
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground);
  return () => {
    window.removeEventListener("scroll", changeBackground);
  }
}, []);
 
 

  return (
    <div className={`${classes.container} ${navbar && classes.active}`}>


<div className={classes.item}>
  <ul className={classes.list}> 
    <li className={classes.listItem}>
    <Link href="/" passHref>
    <Image  src='/img/logo.jpg' alt=" image of logo" width='150' height='69' /> </Link>
    </li>
  
    

    </ul></div> <Link href="/cart" passHref><div className={classes.item}> <div className={classes.cart}><Image src='/img/cart.png' alt=" image of cart" width='32' height='32' /></div>
    
    
    <div className={classes.counter}>{quantity}</div>
    </div>  </Link>
  
<div className={classes.item}>
<div className={classes.callButton}>

<Image src='/img/telephone.png' alt=" image of phone" width='30' height='30' />

</div>
<div className={classes.texts}><div className={classes.text}>ORDER NOW!</div>
<div className={classes.text}>123 234 678</div></div>



</div>
    </div>
  )
}

export default Navbar
