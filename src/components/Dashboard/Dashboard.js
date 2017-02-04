import React, { Component } from 'react';
import './Dashboard.css';
import client from './../../data/client.json';
import StepsInfo from '../StepsInfo/StepsInfo';
import Notes from '../Notes/Notes';
import Buttons from '../Buttons/Buttons';
import incomingCall from '../../assets/images/incoming-call.png';
import userLogo from '../../assets/images/image-contact.png';

class Dashboard extends Component {
    render() {
        return (
          <div>
              <div className="dashboardWrapper">
                  <p className="text headerLight">
                      Corporate Account
                      <img
                        alt="Incoming call" src={incomingCall}
                        className="callImage"
                      />
                  </p>
                  <h1 className="text imagePosition"> { client.name } </h1>
                  <div className="clientContactLeft">
                      <p> { client.phone } </p>
                      <p>
                          <a className="link" href="">SC122323XE</a>
                      </p>
                      <p>
                          NP: ${ client.net_position }0
                      </p>
                  </div>
                  <div className="clientContactRight">
                      <p className="headerLight">Main Contact
                          <img
                            alt="Incoming call" src={userLogo}
                            className="userImage"
                          />
                      </p>
                      <p className="subHeader"> { client.main_contact.name } </p>
                      <p> { client.main_contact.position } </p>
                  </div>
              </div>
              <StepsInfo />
              <Notes />
              <Buttons />
          </div>
        );
    }
}

export default Dashboard;