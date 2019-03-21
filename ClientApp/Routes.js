import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        {/* The switch component works as any swich case statement in any programming language. */}
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route path="/route1" render={() => <h1>This is route 1</h1>} />
          <Route path="/route2" render={() => <h1>This is route 2</h1>} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
