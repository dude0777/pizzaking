import React from 'react'
import PizzaCard from './PizzaCard'
import classes from './PizzaList.module.css'
const PizzaList = ({ pizzaList }) => {
  return (
    <div className={classes.container}>

    <p className={classes.text2}>Our Menu Product</p>
    <h1 className={classes.text}>The best tasting pizza in town</h1>
{/* we mapped the pizza list list using datat we got from props from the index .js file */}
<div className={classes.wrapper}>
  {/*we again pass data to the card component   */}
{pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}

</div>    
    </div>
  )
}

export default PizzaList