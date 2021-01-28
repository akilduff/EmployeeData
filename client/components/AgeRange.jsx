import React from 'react';
import styled from 'styled-components';


const AgeRange = (props) => {

  return (
    <div>
      <label>
          Filter By Age Range:
          <select id='age' value={props.age} onChange={props.searchTerm}>
            <option value=''>All Ages</option>
            <option value='0-20'>0 - 20 yrs</option>
            <option value='21-30'>21 - 30 yrs</option>
            <option value='31-40'>31 - 40 yrs</option>
            <option value='41-50'>41 - 50 yrs</option>
            <option value='51-Infinity'>51+ yrs</option>
          </select>
        </label>
    </div>
  );

}

export default AgeRange;
