import { Component } from "react";
import { PiPlanetFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {Link, withRouter} from 'react-router-dom'

import Cookies from "js-cookie";

import './index.css'

class HeaderPage extends Component{

    onLogoutUser = ()=>{
        Cookies.remove('username')
        Cookies.remove('password')
        const {history} = this.props
        history.replace('/login')

    }
    render(){
        return(
            <div className="header-container">
                <div className="laptop-view">
                    <div className="logo-container">
                    <Link to="/home"> 
                        <h2>Travel <PiPlanetFill/></h2>
                    </Link>
                </div>
                <ul className="list-container">
                    <Link to="/home">
                       <li>Home</li>
                    </Link>
                    <Link to="/login">
                        <li><button onClick={this.onLogoutUser} className="logout-btn">Logout</button></li>
                    </Link>
                </ul>
                </div>

                <div className="mobile-view">
                    <div className="logo-container">
                        <Link> 
                            <h2>Travel <PiPlanetFill/></h2>
                        </Link>
                    </div>
                    <ul className="list-container">
                        <Link to="/home">
                            <li><FaHome/></li>
                        </Link>
                        <Link to="/login">
                            <li><IoIosLogOut/></li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderPage)