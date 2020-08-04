import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Tables Admin</h1>
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">Or</div>
          <div className="middle aligned row">
            <div className="column">
              <div className="ui icon header">
                <a href="/tables">
                  <i className="coffee icon"></i>
                  View Tables
                </a>
              </div>
            </div>
            <div className="column">
              <div className="ui icon header">
                <a href="/zones">
                  <i className="th icon"></i>
                  View Zones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;