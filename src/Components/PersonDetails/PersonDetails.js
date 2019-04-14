import React, { Component } from 'react';

import './PersonDetails.css';

class PersonDetails extends Component {
  render() {
    return (
      <div className="details card">
        <img className="details-image"
          alt="R2-D2"
          width="400"
          height="550"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h3 className="subtitle">R2-D2</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Gender</td>
                <td>male</td>
              </tr>
              <tr>
                <td>Birth Year</td>
                <td>43</td>
              </tr>
              <tr>
                <td>Eye Color</td>
                <td>red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PersonDetails;