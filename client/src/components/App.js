import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actionindex';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                    <div>
                        <Header />
                        <Routes>
                            <Route exact={true} path="/" element={<Landing />} />{/*exact={true}*/}
                            <Route exact={true} path="/surveys" element={<Dashboard />} />
                            <Route path="/surveys/new" element={<SurveyNew />} />
                        </Routes>
                    </div>
                
            </div>
        );
    }
};

export default connect(null, actions)(App);