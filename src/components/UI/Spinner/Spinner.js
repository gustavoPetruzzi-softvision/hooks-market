import React from 'react';
import classes from './Spinner.module.css'

const Spinner = (props) =>{
    console.log()
    return(
        <div className={classes.ring}>
            <div className={classes[props.color]} ></div>
            <div className={classes[props.color]} ></div>
            <div className={classes[props.color]} ></div>
            <div className={classes[props.color]} ></div>
        </div>
    )
}

export default Spinner;