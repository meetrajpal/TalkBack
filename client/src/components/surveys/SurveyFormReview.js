import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions/actionindex';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

    const [insufficientCreditsError, setInsufficientCreditsError] = useState(null);

    const reviewFields = _.map(FIELDS, ({ name, label }, keys) => {
        return (
            <div key={keys} className="form-group">
                <label className="text-muted"><h5><b>{label}</b></h5></label>
                <div className='fs-5'>{formValues[name]}</div><br />
            </div>
        );
    });

    const navigate = useNavigate();


    return (

        <div className="row mt-5">
            <div id="content" className="flex">
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header fs-5"><strong>Confirm your details</strong></div>
                                    <div className="card-body">
                                        {reviewFields}
                                        {insufficientCreditsError && (
                                            <div className="alert alert-danger" role="alert">
                                                {insufficientCreditsError}
                                            </div>
                                        )}
                                        <div className="row">
                                            <div className="col-6">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={onCancel}
                                                >
                                                    <i className="bi bi-backspace"> &nbsp;</i>Back
                                                </button>

                                            </div>
                                            <div className="col-6 text-end">

                                                <button onClick={() => { submitSurvey(formValues, navigate, setInsufficientCreditsError) }} className="btn-success btn" type="submit" name="action">SEND &nbsp;<i className="bi bi-envelope"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);