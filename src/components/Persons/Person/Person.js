import React from 'react';

import style from './Person.module.css';

const Person = (props) => {

    return (
        <div className={style.Person}>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <h3 className={style.heading}>Heading</h3>
        </div>
    )
}

export default Person;