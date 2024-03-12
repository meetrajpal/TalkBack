import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) 
            return ( <SurveyFormReview onCancel={ () => { this.setState({ showFormReview: false }) } } /> );
            
        return <SurveyForm onSurveySubmit={() => { this.setState({ showFormReview: true }) }} />
    }

        render() {
            return (
                <div>
                    {this.renderContent()}
                    <div className="fixed-action-btn">
                        <Link to="/surveys" className="btn-floating btn-large red">
                            <i className="large material-icons">home</i>
                        </Link>
                    </div>
                </div>
            );
        };
    }

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);