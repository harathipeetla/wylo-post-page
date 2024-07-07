import { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import './index.css'

class LoginPage extends Component{
    state ={
        userName:'',
        password:'',
        errorMsg:''
    }

    onChangeUserName =(e)=>{
        this.setState({userName:e.target.value})
    }

    onChangePassword=(e)=>{
        this.setState({password:e.target.value})
    }

    onLoginUserDetails =()=>{
        const {userName, password} = this.state

        const existingUserName = Cookies.get('username')
        const existingPassword = Cookies.get('password')

        if(existingUserName === userName && existingPassword === password){
            const {history} = this.props 
            history.replace('/home')
        }else if(userName === '' || password === ''){
            this.setState({errorMsg: 'Feilds should not be empty'})

        }else{
            this.setState({errorMsg:'user does not exists'})
        }
    }


    render(){
        const{userName, password, errorMsg}= this.state

        return(
            <div className="login-page-container">
                <div className="user-name-container">
                    <label>userName:</label>
                    <input 
                    type="text"
                    className="user-name-feild"
                    id="username"
                    onChange={this.onChangeUserName}
                    value={userName}
                    />
                </div>

                <div className="password-container">
                    <label>Password:</label>
                    <input 
                    type="password"
                    className="password-feild"
                    id="password"
                    onChange={this.onChangePassword}
                    value={password}
                    />
                </div>
                <div  className="login-button-container">
                    <button className="login-button" type="button" onClick={this.onLoginUserDetails}>
                        Login
                    </button>
                    <p className="error-msg">{errorMsg}</p>
                    <p>Do not have an account?
                        <span>
                            <Link to="/register">Register Here</Link>
                        </span>

                    </p>
                </div>

            </div>
        )
    }
}


export default LoginPage