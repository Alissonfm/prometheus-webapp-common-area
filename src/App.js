import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BasePage from './pages/base-page/base-page';

const App = () => {
  return <Router><BasePage /></Router>;
}

export default App;
