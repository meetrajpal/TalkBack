import { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

class ProfileUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newName: '',
            newMail: ''
        }

        this.updateInputName = this.updateInputName.bind(this);
        this.updateInputMail = this.updateInputMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInputName(event) {
        this.setState({ newName: event.target.value });
    }

    updateInputMail(event) {
        this.setState({ newMail: event.target.value });
    }


    async handleSubmit() {
        const yes = await axios.put(`/api/users/update/${this.props.userId}/${this.state.newName}/${this.state.newMail}`);
        if(yes){
            alert("Your name and mail are updated.");
            this.props.navigate('/surveys');
            window.location.reload();
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
                                        <div className="card-header fs-5"><strong>Update name and mail of account {this.props.userName}</strong></div>
                                        <div className="card-body">

                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Name</b></h5></label>
                                                <input className="form-control" onChange={this.updateInputName} type="text" placeholder={"Old name is : " + this.props.userName} /><br />
                                            </div>

                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Mail</b></h5></label>
                                                <input className="form-control" onChange={this.updateInputMail} type="text" placeholder={"Old mail is : " + this.props.userMail} /><br />
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

const ConnectedProfileUpdate = ({ match, ...props }) => {
    const navigate = useNavigate();
    const { userName, userId, userMail } = useParams();
    return <ProfileUpdate {...props} userMail={userMail} userName={userName} userId={userId} navigate={navigate} />;
};

ProfileUpdate.propTypes = {
    match: PropTypes.object.isRequired, // Define match prop type
};

export default connect(null)(ConnectedProfileUpdate);