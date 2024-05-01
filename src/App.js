import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Works,
} from "./containers";

import {Navbar} from "./components";
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
