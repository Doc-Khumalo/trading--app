import React, { Component } from 'react';
import './StepsInfo.css';
import client from './../../data/client.json';

class StepsInfo extends Component {
    render() {
        return (
          <table className="step">
              <tbody>
                  <tr className="stepsWrapper">
                      <th className="headerLight">
                          Dealer
                      </th>
                      <th className="headerLight">
                          Last Login
                      </th>
                      <th className="headerLight">
                          Last Call
                      </th>
                  </tr>
                  <tr className="tableRow">
                      <td>
                          { client.dealer }
                      </td>
                      <td>
                          { client.last_login }
                      </td>
                      <td>
                          { client.last_call.date } ({ client.last_call.contact })
                      </td>
                  </tr>
              </tbody>
          </table>
        );
    }
}

export default StepsInfo;