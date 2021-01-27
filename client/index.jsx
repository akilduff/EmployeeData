import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import employee_data from './employeeData.js'

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      employees: employee_data,
      search: '',
      employeesToRender: employee_data
    };

    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/uploader')
  //     .then((response) => {
  //       this.setState({
  //         count: response.data
  //       })
  //     })
  //     .then(() => {
  //       this.main()
  //     })
  // }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmitSearch(event) {
    event.preventDefault()
    var matchingEmployees = [];
    for (var index of this.state.employeesToRender) {
      var inspectingName = index.name
      var stringToCheck = this.state.search
      if (index.name.includes(this.state.search)) {
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
          <form onSubmit={this.handleSubmitSearch}>
            <label>
              <input type="text" value={this.state.search} onChange={this.handleSearch} />
            </label>
            <input type="submit" value="Search Employees" />
          </form>
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
