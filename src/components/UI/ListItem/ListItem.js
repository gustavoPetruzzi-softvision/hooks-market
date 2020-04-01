import React from 'react';
import classes from './ListItem.module.css';

const ListItem = (props) =>{

    return(
        <div className={classes.listItem} onClick={props.clicked}>
            <div className={classes.listItem__img}>
                <img src={props.image} alt={props.name} />
                <p>x {props.amount} </p>
            </div>

            <p> {props.name} </p>
            <p> ${props.price} </p>
        </div>
    )
}

export default ListItem