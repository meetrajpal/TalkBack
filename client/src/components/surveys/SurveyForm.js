import _ from "lodash";
// import './css/surveyFormCss.css'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

import FIELDS from "./formFields";

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, (field, keys) => {
            return (<><Field key={keys} type="text" component={SurveyField} label={field.label} name={field.name} placeholder={field.placeholder} /> <br /> </>);
        });
    }


    render() {
        return (
            <div className="row mt-5">
                <div id="content" className="flex">
                    <div className="page-content page-container" id="page-content">
                        <div className="padding">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-10">
                                    <div className="card">
                                        <div className="card-header fs-5"><strong>Create a new survey form</strong></div>
                                        <div className="card-body">
                                            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                                                {this.renderFields()}
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Link to="/surveys" className="btn btn-danger">Cancel <i className="bi bi-x"></i></Link>
                                                    </div>
                                                    <div className="col-6 text-end">
                                                        <button className="btn-success btn" type="submit" name="action">Submit <i className="bi bi-check2"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');

    _.each(FIELDS, ({ name }) => {
        if (!values[name])
            errors[name] = 'You can not leave this field blank.';
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);