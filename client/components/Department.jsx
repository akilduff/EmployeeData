import React from 'react';
import styled from 'styled-components';


const Department = (props) => {

  return (
    <div>
      <label>
        Filter By Department:
        <select id='dept' value={props.dept} onChange={props.searchTerm}>
          <option value=''>All Depts</option>
          <option value='Sports'>Sports</option>
          <option value='Film'>Film</option>
          <option value='Music'>Music</option>
        </select>
      </label>
    </div>
  );

}

export default Department;
