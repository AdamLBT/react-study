import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './day02/List';
import Clock from './day02/Clock';
import Student from './day02/Student';
// import List from './day01/List';
// import UserInfo from './day01/UserInfo';

function App() {

  //day02代码
  return(
    <div className="App">
      <Clock/>
      <Student/>
      {/* <List/> */}
    </div>
  );

  //day01代码
  /*
  let msg = "hello react";
  let dd = [1,2,3,4,5,6];
  let user = {name:'lbt',photo:'xxx'}
  return (
    <div className="App">
      <UserInfo user={user}/>
      {msg}
      //调用List组件，为List组件传递参数
      <List a='aaa' b={3} c='1' data={['a','b','c']}/>
      <List data={dd}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
