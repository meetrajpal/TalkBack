import { Component } from "react";
import { connect } from 'react-redux';
import Payments from "./Payments";
import axios from 'axios';
import { fetchUser } from "../actions/actionindex";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

class Profile extends Component {

    async handleDelete(userId) {
        const confirmed = window.confirm("Are you sure you want to delete this account? Please notice that deleting this account will also delete any survey created with this account and also any credits in the account will be non-refundable and deleted too.");
        if (confirmed) {
            const acknowledge = await axios.delete(`/api/users/delete/${userId}`);
            if (acknowledge){
                alert("This account is deleted.")
                this.props.navigate('/');
                window.location.reload();
            }
        }
    }

    componentDidMount() {
        this.props.fetchUser();
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
                                        <div className="card-header fs-5"><strong>User details</strong></div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Name</b></h5></label>
                                                <div className='fs-5'>{this.props.auth.name}</div><br />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Email</b></h5></label>
                                                <div className='fs-5'>{this.props.auth.emailId}</div><br />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Total Survey Created</b></h5></label>
                                                <div className='fs-5'>{this.props.auth.surveyNumber}</div><br />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-muted"><h5><b>Available Credits</b></h5></label>
                                                <div className='fs-5'>
                                                    <i className="bi bi-currency-rupee"></i>
                                                    {this.props.auth.credits}
                                                    <p className="btn btn-warning ms-5 mt-2"><Payments /></p>
                                                </div>
                                                <br />
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <Link to={`/users/update/${this.props.auth._id}/${this.props.auth.name}/${this.props.auth.emailId}`} className="btn btn-success">
                                                        <i className="bi bi-pen-fill"></i>&nbsp;Update
                                                    </Link>
                                                </div>
                                                <div className="col-5">
                                                    <button className="btn btn-danger" onClick={() => { this.handleDelete(this.props.auth._id) }}>
                                                        <i className="bi bi-trash"></i>&nbsp;Delete
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
}

function mapStateToProps(state) {
    return { auth: state.auth };
}
const ConnectedProfile = ({ match, ...props }) => {
    const navigate = useNavigate();
    return <Profile {...props} navigate={navigate} />;
};

Profile.propTypes = {
    match: PropTypes.object.isRequired, // Define match prop type
};

export default connect(mapStateToProps, { fetchUser })(ConnectedProfile);