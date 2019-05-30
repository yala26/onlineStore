import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header.js";
import Content from "./components/content/content.js"
import { Route, Link} from "react-router-dom";

function App() {
  return (
          <div >
              <Header />
              <Content />
          </div>
  );
}

export default App;
