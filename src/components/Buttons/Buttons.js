import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render() {
        return (
          <div className="buttonGroup">
              <button className="acceptButton">ACCEPT</button>
              <button className="transferButton">TRANSFER</button>
              <button className="declineButton">DECLINE</button>
          </div>
        );
    }
}

export default Buttons;