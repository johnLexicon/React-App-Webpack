import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../Routes";

class FullPage extends Component {
  render() {
    return (
      <div>
        <h2>Page Top</h2>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default FullPage;
