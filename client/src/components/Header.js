import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from "./Payments";

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return;

            default:
                return (
                    <>
                        <li className="nav-item">
                            <Link to="/surveys" className="fs-5 nav-link text-black">
                                Dashboard
                            </Link>
                        </li>
                        <li className="fs-5 nav-link text-black">
                            <i className="bi bi-wallet"></i>&nbsp;
                            Credits: {this.props.auth.credits}
                        </li>
                    </>
                );
        }
    }

    renderDropDown() {
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return;

            default:
                return (
                    <div className="dropdown float-end">
                        <a className="dropdown-item text-decoration-none px-3 py-2 rounded-5 dropdown-toggle fs-5" id="user-log"
                            href="#" role="button" data-bs-toggle="dropdown">
                            <i className="bi bi-person-circle">&nbsp;&nbsp;</i>{this.props.auth.name}
                        </a>

                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><Payments /></li>
                            <li className="dropdown-item"><a href="/api/logout" className="btn">Log out &nbsp;&nbsp;<i className="bi bi-box-arrow-right"></i> </a></li>
                        </ul>
                    </div>
                );
        }
    }

    render() {
        return (
            <nav className="navbar nav-tabs navbar-expand-lg flex-column sticky-top">

                <div className="container-fluid ">

                    {/* <!-- Toggle Button --> */}
                    <button className="navbar-toggler border-0 text-end" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onclick="drop()"></span>
                    </button>

                    {/* <!-- Logo --> */}
                    <div className="logoHolder align-items-center">
                        <center>
                            {/* <img className="logo" src=".\res\img\Asset 4.png" width="100" height="80" alt="" /><br /> */}
                            <Link to={this.props.auth ? "/surveys" : '/'} className="navbar-brand fs-3" >{process.env.REACT_APP_APPNAME}</Link>
                        </center>
                    </div>

                    {/* <!-- Sidebar --> */}
                    <div className="sidebar offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        {/* <!-- header of sidebar --> */}
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title border-bottom" id="offcanvasNavbarLabel">Menu</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close" onclick="closeDrop()"></button>
                        </div>

                        {/* <!-- sidebar body --> */}
                        <div className="offcanvas-body  ">
                            <ul className="navbar-nav justify-content-end align-items-end flex-grow-1 gap-2">
                                {this.renderContent()}
                            </ul>
                            {/* <!-- login/signup --> */}
                            {this.renderDropDown()}

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);