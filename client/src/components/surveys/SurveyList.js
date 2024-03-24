import { Component } from 'react';
import './css/surveyListCssFile.css';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/actionindex';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    async deleteSurvey(surveyId) {
        const confirmed = window.confirm("Are you sure you want to delete this survey?");
        if (confirmed) {
            const acknowledge = await axios.delete(`/api/surveys/delete/${surveyId}`);
            if (acknowledge){
                alert("Survey delted succesfully.");
                this.props.fetchSurveys();
            }
        }
    }

    renderContent() {
        return this.props.surveys.reverse().map((survey, keys) => {
            return (
                <li key={keys} className="list-group-item">
                    <div className="todo-indicator bg-success"></div>
                    <div className="widget-content ms-2 p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <div className="widget-heading fs-5">{survey.title}
                                </div>
                                <div className="widget-subheading"><i>Sent on: {survey.dateSent ? new Date(survey.dateSent).toLocaleDateString() : "none"}</i></div>
                                <div className="widget-subheading"><i>Last Response on: {survey.lastResponse ? new Date(survey.lastResponse).toLocaleDateString() : "none"}</i></div>
                            </div>
                            <div className="widget-content-right ">
                                <Link to={`/surveys/${survey._id}`} className='btn-transition btn btn-outline-success border-0' style={{ borderRadius: "50px"}}><i className="bi bi-info-circle mb-1 fs-5"></i></Link>&nbsp;
                                <Link to={`/surveys/update/${survey._id}/${survey.title}`} className='btn-transition btn btn-outline-warning border-0' style={{ borderRadius: "50px"}}><i className="bi bi-pen mb-1 fs-5"></i></Link>&nbsp;
                                <button onClick={() => { this.deleteSurvey(survey._id) }} className='btn-transition btn btn-outline-danger border-0' style={{ borderRadius: "50px"}}><i className="bi bi-trash mb-1 fs-5"></i></button>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="row d-flex justify-content-center m-5">
                <div className="col-md-10">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title fs-5 text-capitalize font-weight-normal"><i
                                className="bi bi-list-task"></i>&nbsp;&nbsp;Survey Lists</div>
                        </div>
                        <div className="scroll-area-sm">
                            <perfect-scrollbar className="ps-show-limits">
                                <div style={{ position: "static" }} className="ps ps--active-y">
                                    <div className="ps-content">
                                        <ul className=" list-group list-group-flush">
                                            {this.renderContent()}
                                        </ul>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                        <div className="d-block text-end card-footer">
                            <Link className="btn" to="/surveys/new">
                                <div className="roundedFixedBtn"><i className="bi bi-plus"></i></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);