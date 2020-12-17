import React from 'react';
import './Objects.css'

export default Objects;

function Objects(props){
    console.log(props)
    return (
        <div className="Objects">
          <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Environ</th>
                    <th>Period</th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.environ}</td>
                    <td>{props.period}</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
      </div>
  )
  
  
}
