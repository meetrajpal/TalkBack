import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions/actionindex';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(FIELDS, ({ name, label }, keys) => {
        return (
            <div key={keys} class="form-group">
                <label class="text-muted"><h5><b>{label}</b></h5></label>
                <div className='fs-5'>{formValues[name]}</div><br />
            </div>
        );
    });

    const navigate = useNavigate();


    return (
        // <div className="container">
        //     <h5>Confirm your details</h5>
        //     {reviewFields}

        //     <button
        //         className="btn-flat red white-text"
        //         onClick={onCancel}
        //     >
        //         <i className="material-icons left">chevron_left</i>Back
        //     </button>

        //     <button onClick={() => { submitSurvey(formValues, navigate) }} className="btn-flat right teal white-text" type="submit" name="action">SEND
        //         <i className="material-icons right">email</i>
        //     </button>
        // </div>

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

                                                <button onClick={() => { submitSurvey(formValues, navigate) }} className="btn-success btn" type="submit" name="action">SEND &nbsp;<i className="bi bi-envelope"></i>
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