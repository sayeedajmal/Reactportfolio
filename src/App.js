import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Works,
  Contact
} from "./containers";

import { Navbar } from "./components";
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
