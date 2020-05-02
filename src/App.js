import React, {Component, useState} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id: 'lksn', name: 'Kunal', age: 19},   //id can be anything but must be unique
      {id: 'safs', name: 'ABC', age: 20}
    ], 
    otherState: 'XYZ',
    showPerson: false
  }

  nameChangeHandler = (newName) => {
    this.setState({            // this.setState merges with state so otherState will be accessible
      persons : [
        {id: 'lksn', name: 'Kunal', age: 19},
        {id: 'safs', name: newName, age: 20}
      ]
    })
  }

  switchNamesHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };  
    /// OR const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
    }

  togglePersonHandler = () => {
    const show = this.state.showPerson;
    this.setState({showPerson: !show})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();   OR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {

    const styles = {
      backgroundColor: 'green',          // or 'background-color'
      padding: '8px',
      color: 'white',
      border: '2px dashed darkgreen',
      cursor: 'pointer',
      font: 'inherit',
      margin: '16px'
    };

    let persons = null;

    if(this.state.showPerson) {
      persons = (
      <div> 
        {this.state.persons.map((person, index) => {
          return <Person 
                    click={() => this.deletePersonHandler(index)} 
                    name={person.name} 
                    age={person.age} 
                    key={person.id} 
                    changed={(event) => this.switchNamesHandler(event, person.id)} />
        })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} 
            changed={this.switchNamesHandler}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.nameChangeHandler('JKL')}>
              Children of Person
          </Person> */}
        </div> )
        
        styles.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <=  2) {
      classes.push('red');
    }

    if(this.state.persons.length <=  1) {
      classes.push('bold');
    }


    return (
        <div className="App">
          <h1>Hello there!, This is an React App</h1>
          <p className={classes.join(' ')}>Dynamic Styling (remove a person and see)</p>
          {persons}     
          {/* OR  */}   
          {/* { this.state.showPerso  n === true ?
          <div> 
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} 
              changed={this.switchNamesHandler}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={() => this.nameChangeHandler('JKL')}>
                Children of Person
            </Person>
          </div> : null
          } */}
          <button 
            style={styles}
            onClick={this.nameChangeHandler.bind(this, 'XYZ')} key='1'>Switch name</button>
            <br />
          <button style={styles} onClick={this.togglePersonHandler} key='2'>Toggle Person</button>
        </div>
    )
  }
}

// const App = (props) => {
  
//   const [personsState, setPersonsState] = useState({
//     persons : [
//       {name: 'Kunal', age: 19},
//       {name: 'ABC', age: 20}
//     ]
//   })
//   const [othersState, setOtherState] = useState({otherState: 'XYZ'})
//   //while using hooks (useState) the setPersonsState replaces persons object so otherState will be
//   //gone after using nameChangeHandler  if we define it in first useState , that's why we used another
//   // useState for otherState
//   console.log(othersState)

//   const nameChangeHandler = () => {
//     setPersonsState({
//         persons : [
//           {name: 'Kunal', age: 19},
//           {name: 'XYZ', age: 20}
//         ]
//     })
//   }
  
//   return (
//     <div className="App">
//       <h1>Hello there!, This is an React App</h1>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Children of Person</Person>
//       <button onClick={nameChangeHandler}>Switch name</button>
//     </div>
//   )npm 
// }

export default App;
