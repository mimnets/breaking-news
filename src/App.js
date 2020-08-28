import React from 'react';
import './App.css';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadLine from './components/TopHeadLine/TopHeadLine';
import Fragment from './components/Fragment/Fragment';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadLine></TopHeadLine>
      </div>
  );
}

export default App;
