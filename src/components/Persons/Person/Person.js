import React, { Component } from 'react';

import style from './Person.module.css';

class Person extends Component {
    render() {
        return (
                <div className={style.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <h3 className={style.heading}>Heading</h3>
                </div>
            )
    }
}

// const Person = (props) => {

//     return (
//         <div className={style.Person}>
//             <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//             <h3 className={style.heading}>Heading</h3>
//         </div>
//     )
// }

export default Person;