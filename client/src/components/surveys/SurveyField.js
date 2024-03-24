import React from "react";

function SurveyField({ input, label, placeholder, meta: { error, touched } }) {
    return (
        <div className="form-group">
            <label className="text-muted"><h5><b>{label}</b></h5></label>
            <input {...input} placeholder={placeholder} className="form-control" style={{"background-color": "#FBF3D5"}} />
            <small id="emailHelp" className="form-text text-muted">
                <div className="text-danger">
                    {touched && error}
                </div>
            </small>
        </div>
    );
}

export default SurveyField;