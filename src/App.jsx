import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes/Routes";
import Footer from './components/Footer'
import Header from "./components/Header";

const App = (props) => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header  />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer/>
          </div>
        )}
      ></Route>
    </BrowserRouter>
  );
};

export default App;
