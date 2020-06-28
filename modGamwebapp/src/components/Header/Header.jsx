import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import '../Header/Header.css'

export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeMenu : ""
        }
    }

    componentDidMount(){
        let getParms = window.location.pathname;
        console.log(getParms);
            this.setState({
                activeMenu : getParms
            })
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                    <Link to="/" className="acolor navbar-brand">HCL Tech</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                        <ul className="navbar-nav mr-auto">
                        <li className={"nav-item" +" " + (this.state.activeMenu =='/submitCase'? 'activeColor':'')}>
                        <Link to="/submitCase" className="acolor nav-link">Submit Case
                            <span className="sr-only">(current)</span>
                            </Link> 
                        </li>
                        <li className={"nav-item" +" " + (this.state.activeMenu =='/viewAllCases'? 'activeColor':'')}>
                        {/* <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}> */}
                            <Link to="/viewAllCases" className="acolor nav-link">View All Cases</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Dropdown
                            </a>
                            <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        </ul>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            {/* <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </li> */}
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-default"
                            aria-labelledby="navbarDropdownMenuLink-333">
                            <a className="dropdown-item" href="#">Logout</a>
                            <a className="dropdown-item" href="#">Settings</a>
                            {/* <a className="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
