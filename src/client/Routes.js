import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
};

export default Routes;
