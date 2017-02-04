import React, { Component } from 'react';
import './AgentDetails.css';
import trade from './../../data/trade.json';

class AgentDetails extends Component {
    render() {
        return (
          <div className="AgentWrapper">
              <div className="tradeWrapper">
                  <div className="text">
                      <p className="headerLight">Active Trade</p>
                      <p className="subHeader">{trade.id}</p>
                  </div>
                  <div className="tradeID">
                      <p className="text clientText">Buy: { trade.buy.amount }{ trade.buy.currency }</p>
                      <p className="text clientText">Sell: { trade.sell.amount }{ trade.sell.currency } </p>
                      <p className="text">Margin: { trade.margin}% </p>
                  </div>
                  <div className="dealerSection">
                      <p className="text headerLight">Dealer: </p>
                      <p className="text">{ trade.dealer }</p>
                  </div>
              </div>
          </div>
        );
    }
}

export default AgentDetails;