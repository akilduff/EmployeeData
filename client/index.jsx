import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import employee_data from './employeeData.js'

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      employees: employee_data,
      name: '',
      age: '',
      dept: '',
      employeesToRender: employee_data
    };

    this.searchTerm= this.searchTerm.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  searchTerm(event) {
    this.setState({
      [event.target.id]: event.target.value.toLowerCase()
    }, () => this.dynamicSearch()
    )
  }

  dynamicSearch() {
    event.preventDefault()
    let filtered = this.state.employees.filter(this.filterSearch)
    this.setState({
      employeesToRender: filtered
    })
  }

  filterSearch(person) {
    let checkName = person.name.toLowerCase();
    let checkDept = person.department.toLowerCase();
    let checkAge = person.age;
    let ageRange = this.state.age.split('-')
    if (checkName.includes(this.state.name) || this.state.name === '') {
      if (checkDept.includes(this.state.dept) || this.state.dept === '') {
        if ((checkAge >= ageRange[0] && checkAge <= ageRange[1]) || this.state.age === '') {
          return true
        }
      }
    }
  }


  render() {
    return (
      <div>
        <h1>Employee Data</h1>
        <nav>
          <div>Employee Name:
            <input
              type='text'
              id='name'
              value={this.state.name}
              onChange={this.searchTerm}
              placeholder={'search for a name...'}
            />
          </div>
        </nav>
        <br></br>
        <label>
          Filter By Dept:
          <select id='dept' value={this.state.dept} onChange={this.searchTerm}>
            <option value=''>All Depts</option>
            <option value='Sports'>Sports</option>
            <option value='Film'>Film</option>
            <option value='Music'>Music</option>
          </select>
        </label>
        <br></br>
        <label>
          Filter By Age Range:
          <select id='age' value={this.state.age} onChange={this.searchTerm}>
            <option value=''>All Ages</option>
            <option value='0-20'>0 - 20 yrs</option>
            <option value='21-30'>21 - 30 yrs</option>
            <option value='31-40'>31 - 40 yrs</option>
            <option value='41-50'>41 - 50 yrs</option>
            <option value='51-Infinity'>51+ yrs</option>
          </select>
        </label>
        <div>
          <div>{this.state.employeesToRender.map((employee) => (
            <div>
              <h3>{employee.name}</h3>
              <br></br>
              <div>Department: {employee.department},  Age: {employee.age}</div>
              <br></br>
            </div>
          ))}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
