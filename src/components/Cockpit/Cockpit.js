import React from 'react';
import style from './Cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];
    if(props.persons.length <=  2) {
      assignedClasses.push(style.red);
    }

    if(props.persons.length <=  1) {
      assignedClasses.push(style.bold);
    }

    let btnClass = style.btn;

    if(props.showPerson) {
        btnClass = style.button_Red;
    }

    return (
        <div className={style.Cockpit}>
            <h1>{props.title}</h1>
            <h1>Hello there!, This is an React App</h1>
            <p className={assignedClasses.join(' ')}>Dynamic Styling (remove a person and see)</p>
            <button 
            className={btnClass}
            onClick={props.nameChange}>Switch name</button>
            <br />
          <button 
            className={btnClass}
            onClick={props.togglePerson} >Toggle Person</button>
        </div>
    );
};

export default cockpit;