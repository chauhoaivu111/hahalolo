import React from "react";
import { Switch, Route ,useLocation,IndexRoute,Redirect } from "react-router-dom";
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// import { Switch, Route,useLocation,IndexRoute } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddPost from "../pages/AddPost";
import Forgotpass from "../pages/Forgotpass";
import Postdetail from "../pages/Postdetail";


// redux---------------------------------------------------------------------------------------------------------

import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { checkIndexAuthorization } from "../redux/lib/check-auth";

// Import the index reducer and sagas
import IndexReducer from "../routes/index-reducer";
import IndexSagas from "../routes/index-sagas";

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/*eslint-enable */

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware)) // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);

const Routes = () => {
  return (
   
    // <Provider store={store}>
   

    // <Switch history={useLocation}>
      
    // <Redirect onEnter={checkIndexAuthorization(store)} />
    //   <Route path="/login"  component={Login}/>
    //   <Route path="/SignUp"  component={SignUp}/>
    //   <Route path="/Forgotpass"  component={Forgotpass}/>
    //   <Route path="/" exact component={Home}/>
    //   <Route path="/Postdetail" exact component={Postdetail}/>
    //   <Route path="/AddPost" component={AddPost}/>
    // </Switch>
    // </Provider>

    <Provider store={store}>
    <Switch history={useLocation}>
      
        {/* <Route path="/Home" exact onEnter={checkIndexAuthorization(store)} /> */}
        <Route  path="/Login"  component={Login} />
        <Route path="/SignUp" component={SignUp} />
        {/* <Route path="/home" component={Home} /> */}

        <Route path="/Forgotpass"  component={Forgotpass}/>
      <Route path="/" exact component={Home}/>
       <Route path="/Postdetail" exact component={Postdetail}/>
      <Route path="/AddPost" component={AddPost}/>
      {/* <Route path="/AddPost1" component={AddPost1}/> */}

    </Switch>
  </Provider>
  );
};

export default Routes;
