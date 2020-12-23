import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/home/";
import Aboutpage from "./pages/about/";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <Aboutpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
