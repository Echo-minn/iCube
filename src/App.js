
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Layout/Nav0';
import Footer from './Layout/Footer1';
import Home from './Home';
import AIResearch from './AIResearch';
import AILab from './AILab/AILab';
import AIPaper from './AIPaper';
import News0 from './AINews/news0';
import iTeam from './iTeam';
import LoginForm from './user/login';
import RegistrationForm from './user/register';

import {
  Nav00DataSource,
  Footer10DataSource,
} from './Home/data.source.js';

let isMobil;
enquireScreen((b)=>{
  isMobil=b;
});

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isMobil,
    };
  }
  componentDidMount() {
    //适配手机屏幕
    enquireScreen((b)=>{
      this.setState({isMobil: !!b});
    });
  }
  componentWillMount() {

  }

  render() {
    return(
        <Router>
          <div>
            <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
            <Route exact path="/" component={Home} />
            <Route exact path="/AIResearch" component={AIResearch}/>
            <Route exact path="/AILab" component={AILab}/>
            <Route exact path="/AIPaper" component={AIPaper}/>
            <Route exact path="/AINews/News0" component={News0}/>
            <Route exact path="/iTeam" component={iTeam}/>
            <Route exact path="/user/login" component={LoginForm}/>
            <Route exact path="/user/register" component={RegistrationForm}/>
            <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
          </div>
        </Router>
    );
  }
}


export default App;
