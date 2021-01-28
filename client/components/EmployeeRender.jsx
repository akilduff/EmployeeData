import React from 'react';
import styled from 'styled-components';


const EmployeeRender = (props) => {

  const EmployeeStyle = styled.div`
      display: inline-block;
      text-align: center;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-right: 0.25rem;
      margin-left: 0.25rem;
      padding: 21px 9px 21px 9px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 4px;
  `;

  return (
    <div>{props.employeesToRender.map((employee) => (
      <div>
        <EmployeeStyle>
          <h3>{employee.name}</h3>
          <div>Department: {employee.department} // Age: {employee.age}</div>
        </EmployeeStyle>
        <br></br>
      </div>
    ))}</div>
  );
}

export default EmployeeRender;
