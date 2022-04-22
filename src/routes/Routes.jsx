import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Forgotpass from "../pages/Forgotpass";
import Postdetail from "../pages/Postdetail";



const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Forgotpass" component={Forgotpass} />
      <Route path="/" exact component={Home} />
      <Route path="/Postdetail" exact component={Postdetail} />
    </Switch>
  );
};

export default Routes;