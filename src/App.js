import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Work from "./components/Work";
import work from "./components/Work";

function App() {
  return (
   <div>
   <Nav />
   <Home />
   <About />
   <Skills />
   <Work/>
   </div>
  );
}

export default App;
