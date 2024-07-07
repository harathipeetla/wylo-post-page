import { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import DisplayPostPage from './componenets/PostDisplyPage'

import LoginPage from "./componenets/LoginPage";
import RegisterPage from "./componenets/RegisterPage";

import './App.css'

class App extends Component{
    render(){
        return(
            <div className="App">
            <BrowserRouter>
               
                <Switch>
                    <Route path="/login"  component = {LoginPage}/>
                    <Route path="/home"  component = {DisplayPostPage}/>
                    <Route path="/register"  component = {RegisterPage}/>
                    <Route exact path ="/" component={LoginPage}/>

                </Switch>
            </BrowserRouter>
            </div>
        )
    }
}

export default App

