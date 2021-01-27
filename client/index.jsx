import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import employee_data from './employeeData.js'

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      employees: employee_data,
      searchName: '',
      searchAge: '',
      employeesToRender: employee_data
    };

    this.handleSubmitSearchName = this.handleSubmitSearchName.bind(this);
    this.handleSubmitSearchAge = this.handleSubmitSearchAge.bind(this);
    this.handleSearchName= this.handleSearchName.bind(this);
    this.handleSearchAge= this.handleSearchAge.bind(this);
    this.handleSubmitDept = this.handleSubmitDept.bind(this);

  }

  handleSearchName(event) {
    this.setState({
      searchName: event.target.value
    })
  }

  handleSubmitSearchName(event) {
    event.preventDefault()
    var matchingEmployees = [];
    for (var index of this.state.employeesToRender) {
      if (index.name.includes(this.state.searchName)) {
        matchingEmployees.push(index)
      }
    }
    if (matchingEmployees.length === 0) {
      alert('That employee isn\'t in our library')
    } else {
      this.setState({
        employeesToRender: matchingEmployees
      })
    }
  }

  handleSearchAge(event) {
    this.setState({
      searchAge: event.target.value
    })
  }

  handleSubmitSearchAge(event) {
    event.preventDefault()
    var matchingEmployees = [];
    for (var index of this.state.employeesToRender) {
      console.log("index.age", index.age)
      console.log(this.state.searchAge)
      if (index.age === Number(this.state.searchAge)) {
        matchingEmployees.push(index)
      }
    }
    if (matchingEmployees.length === 0) {
      alert('That employee isn\'t in our library')
    } else {
      this.setState({
        employeesToRender: matchingEmployees
      })
    }
  }

  handleSubmitDept(event) {
    event.preventDefault();
    let deptSearch = event.target.value;
    var matchingEmployees = [];
    for (var index of this.state.employeesToRender) {
      var inspectingName = index.name
      var stringToCheck = this.state.search
      if (index.department.includes(deptSearch)) {
        matchingEmployees.push(index)
      }
    }
    if (matchingEmployees.length === 0) {
      alert('That employee isn\'t in our library')
    } else {
      this.setState({
        employeesToRender: matchingEmployees
      })
    }
  }



  render() {
    return (
      <div>
        <h1>Employee Data</h1>
        <nav>
          <form onSubmit={this.handleSubmitSearchName}>
            <label>
              <input type="text" value={this.state.searchName} onChange={this.handleSearchName} />
            </label>
            <input type="submit" value="Search Employee Name" />
          </form>
        </nav>
        <nav>
          <form onSubmit={this.handleSubmitSearchAge}>
            <label>
              <input type="text" value={this.state.searchAge} onChange={this.handleSearchAge} />
            </label>
            <input type="submit" value="Search Employee Age" />
          </form>
        </nav>
        <nav>
          <button onClick={this.handleSubmitDept} value="Sports"> Sports Dept </button>
          <button onClick={this.handleSubmitDept} value="Film"> Film Dept </button>
          <button onClick={this.handleSubmitDept} value="Music"> Music Dept </button>
        </nav>
        <div>
          <div>{this.state.employeesToRender.map((employee) => (
            <div>
              <h5>{employee.name}</h5>
              <h5>{employee.department}</h5>
              <h5>{employee.age}</h5>
            </div>
          ))}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
