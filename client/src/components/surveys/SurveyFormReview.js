import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions/actionindex';
import { useNavigate } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey}) => {
    const reviewFields = _.map(FIELDS, ({ name, label }, keys) => {
        return (
            <div key={keys}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    const navigate = useNavigate();


    return (
        <div className="container">
            <h5>Confirm your details</h5>
            {reviewFields}

            <button
                className="btn-flat red white-text"
                onClick={onCancel}
            >
                <i className="material-icons left">chevron_left</i>Back
            </button>

            <button onClick={() => { submitSurvey(formValues, navigate) }} className="btn-flat right teal white-text" type="submit" name="action">SEND
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);