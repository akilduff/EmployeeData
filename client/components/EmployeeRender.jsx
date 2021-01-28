import React from 'react';
import styled from 'styled-components';


const EmployeeRender = (props) => {

  const EmployeeStyle = styled.div`
    display: inline-block;
    text-align: center;
    justify-content: center;
    width: 250px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    padding: 21px 9px 21px 9px;
    background: #fed501;
    border: 2px solid #363636;
    box-shadow: 3px 3px 3px #363636;
    border-radius: 4px;
  `;

  const EmployeeName = styled.div`
    font-size: x-large;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
  `;

  return (
    <div>{props.employeesToRender.map((employee) => (
      <div>
        <EmployeeStyle>
          <EmployeeName>{employee.name}</EmployeeName>
          <div>Department: {employee.department}</div>
          <div>Age: {employee.age}</div>
        </EmployeeStyle>
        <br></br>
      </div>
    ))}</div>
  );
}

export default EmployeeRender;
