import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

import FIELDS from "./formFields";

class SurveyForm extends Component {
    
    renderFields() {
        return _.map(FIELDS, (field, keys) => {
            return <Field key={keys} type="text" component={SurveyField} label={field.label} name={field.name} placeholder={field.placeholder} />
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                        {this.renderFields()}
                        <Link to="/surveys" className="red btn-flat white-text">Cancel<i className="material-icons right">clear</i></Link>
                        <button className="btn-flat right teal white-text" type="submit" name="action">Submit
                            <i className="material-icons right">chevron_right</i>
                        </button>
                    </form>
                </div>
                <div className="fixed-action-btn">
                    <Link to="/surveys" className="btn-floating btn-large red">
                        <i className="large material-icons">home</i>
                    </Link>
                </div>
            </div >
        );
    };
}

function validate(values){
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');

    _.each(FIELDS, ({ name }) => {
        if(!values[name])
            errors[name] = 'You can not leave this field blank.';
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);