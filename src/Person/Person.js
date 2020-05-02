import React from 'react';

import classes from './Person.css';

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <h3 className={classes.he}>jbjk</h3>
        </div>
    )
}

export default Person;