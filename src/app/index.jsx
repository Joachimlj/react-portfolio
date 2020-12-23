import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/home/";
import Aboutpage from "./pages/about/";
import Layout from "./layout/";

import "./reset.css";
import "./style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about">
              <Aboutpage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}
