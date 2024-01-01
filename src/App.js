//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Start from './components/start/Start';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';
import * as Constants from './components/Data'
import { DataProvider } from './components/dataContext/dataContext';

export default function App() {
  return (
    <div className="App">
      <Header company={Constants.HEADER_COMPANY} title={Constants.HEADER_TITLE} />
      <DataProvider>
        <Start />
        <Quiz />
        <Result />
      </DataProvider>
      <Footer note={Constants.FOOTER_NOTE} />
    </div>
  );
}
