import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import employee_data from './employeeData.js'
import Department from './components/Department.jsx'
import AgeRange from './components/AgeRange.jsx'
import EmployeeRender from './components/EmployeeRender.jsx'

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

  searchTerm(e) {
    this.setState({
      [e.target.id]: e.target.value
    }, () => this.dynamicSearch()
    )
  }

  dynamicSearch() {
    event.preventDefault()
    let employeeList = this.state.employees
    let filtered = employeeList.filter(this.filterSearch)
    this.setState({
      employeesToRender: filtered
    })
  }

  filterSearch(person) {
    let checkName = person.name.toLowerCase();
    let checkDept = person.department;
    let checkAge = person.age;
    let ageRange = this.state.age.split('-')
    if (checkName.includes(this.state.name.toLowerCase()) || this.state.name === '') {
      if ((checkAge >= ageRange[0] && checkAge <= ageRange[1]) || this.state.age === '') {
        if (checkDept.includes(this.state.dept) || this.state.dept === '') {
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
              placeholder={'start typing a name...'}
            />
          </div>
        </nav>
        <br></br>
        <Department
          dept={this.state.dept}
          searchTerm={this.searchTerm}
        />
        <br></br>
        <AgeRange
          age={this.state.age}
          searchTerm={this.searchTerm}
        />
        <EmployeeRender
          employeesToRender={this.state.employeesToRender}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
