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
                return (
                    <>
                        <li><a href="/auth/google" className="btn-flat teal white-text">Login</a></li>
                        <li><a href="/auth/google" className="btn-flat teal white-text">Sign-Up</a></li>
                    </>
                );

            default:
                return (
                    <>
                        <li><a href="/surveys" className="btn-flat teal white-text">Dashboard</a></li>
                        <li>Available Credits: {this.props.auth.credits}&nbsp;&nbsp;&nbsp;</li>
                        <li><Payments /></li>
                        <li><a href="/api/logout" className="btn-flat teal white-text">Log out</a></li>
                    </>
                );
        }
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? "/surveys" : '/'}
                            className="brand-logo"
                        >{process.env.REACT_APP_APPNAME}</Link>
                        {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
                        <ul className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
                {/* <ul class="sidenav" id="mobile-demo">
                    {this.renderContent()}
                </ul> */}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);