import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actionindex';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import SurveyInfo from './surveys/SurveyInfo';
import Profile from './Profile';
import SurveyUpdate from './surveys/SurveyUpdate';
import ProfileUpdate from './ProfileUpdate';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <div className='App'>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Landing />} />{/*exact={true}*/}
                        <Route path='/aboutus' element={<AboutUs />} />
                        <Route path='/contactus' element={<ContactUs />} />
                        <Route exact path="/surveys" element={<Dashboard />} />
                        <Route path="/surveys/new" element={<SurveyNew />} />
                        <Route path='/surveys/:surveyId' element={<SurveyInfo />} />
                        <Route path='/user/:userId' element={<Profile />} />
                        <Route path='/surveys/update/:surveyId/:surveyTitle' element={<SurveyUpdate />} />
                        <Route path='/users/update/:userId/:userName/:userMail' element={< ProfileUpdate />} />
                    </Routes>
                    <Footer/>
                </div>

            </div>
        );
    }
};

export default connect(null, actions)(App);