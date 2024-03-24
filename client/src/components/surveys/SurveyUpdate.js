import { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

class SurveyUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTitle: ''
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({ newTitle: event.target.value });
    }


    async handleSubmit() {
        const yes = await axios.put(`/api/surveys/update/${this.props.surveyId}/${this.state.newTitle}`);
        if(yes){
            alert("Your survey is updated.");
            this.props.navigate('/surveys');
        }
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
                                        <div className="card-header fs-5"><strong>Update title of survey {this.props.surveyTitle}</strong></div>
                                        <div className="card-body">

                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Title</b></h5></label>
                                                <input className="form-control" onChange={this.updateInput} type="text" placeholder={"Old title is : " + this.props.surveyTitle} /><br />
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <Link to="/surveys" className="btn btn-danger">Cancel <i className="bi bi-x"></i></Link>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <button className="btn-success btn" type="submit" onClick={this.handleSubmit} name="action">Submit <i className="bi bi-check2"></i>
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
    };
}

const ConnectedSurveyUpdate = ({ match, ...props }) => {
    const navigate = useNavigate();
    const { surveyTitle, surveyId } = useParams();
    return <SurveyUpdate {...props} surveyTitle={surveyTitle} surveyId={surveyId} navigate={navigate} />;
};

SurveyUpdate.propTypes = {
    match: PropTypes.object.isRequired, // Define match prop type
};

export default connect(null)(ConnectedSurveyUpdate);