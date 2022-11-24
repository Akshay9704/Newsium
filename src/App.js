import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress:0
  }
  
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress = {this.setProgress}   key="General" pageSize={5} country="in" category="General"/>}></Route>
          <Route path="/Business" element={<News setProgress = {this.setProgress}   key="Business" pageSize={5} country="in" category="Business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress = {this.setProgress}   key="Entertainment" pageSize={5} country="in" category="Entertainment"/>}></Route>
          <Route path="/Health" element={<News setProgress = {this.setProgress}   key="Health" pageSize={5} country="in" category="Health"/>}></Route>
          <Route path="/Science" element={<News setProgress = {this.setProgress}   key="Science" pageSize={5} country="in" category="Science"/>}></Route>
          <Route path="/Sports" element={<News setProgress = {this.setProgress}   key="Sports" pageSize={5} country="in" category="Sports"/>}></Route>
          <Route path="/Technology" element={<News setProgress = {this.setProgress}   key="Technology" pageSize={5} country="in" category="Technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}