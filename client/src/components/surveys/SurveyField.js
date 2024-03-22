import React from "react";

function SurveyField({ input, label, placeholder, meta: { error, touched } }) {
    return (
        <div class="form-group">
            <label class="text-muted"><h5><b>{label}</b></h5></label>
            <input {...input} placeholder={placeholder} class="form-control" />
            <small id="emailHelp" class="form-text text-muted">
                <div className="text-danger">
                    {touched && error}
                </div>
            </small>
        </div>
    );
}

export default SurveyField;