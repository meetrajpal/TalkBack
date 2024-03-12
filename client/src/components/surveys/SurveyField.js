import React from "react";

function SurveyField ({ input, label, placeholder, meta: { error, touched } }) {
    return (
        <div>
            <label><h5><b>{label}</b></h5></label>
            <input {...input} placeholder={placeholder} />
            <div className="red-text">
                {touched && error}
            </div>
        </div>
    );
}

export default SurveyField;