import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './day02/List';
import Clock from './day02/Clock';
import Student from './day02/Student';
import Course from './day03/Course';
import Teacher from './day03/Teacher';
import StudentCourse from './day03/StudentCourse';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
// import List from './day01/List';
// import UserInfo from './day01/UserInfo';

function App() {

  //day02代码
  return(
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <ul>
            <li><Link to="/student">学生管理</Link></li>
            <li><Link to="/course">课程管理</Link></li>
            <li><Link to="/teacher">教师管理</Link></li>
            <li><Link to="/sc">选课管理</Link></li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route path="/student" component={Student}></Route>
            <Route path="/course" component={Course}></Route>
            <Route path="/teacher" component={Teacher}></Route>
            <Route path="/sc" component={StudentCourse}></Route>
          </Switch>
        </div>
      </BrowserRouter>
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
