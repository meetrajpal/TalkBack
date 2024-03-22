import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveyInfo } from '../../actions/actionindex';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Pie, PolarArea } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'center';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

class SurveyInfo extends Component {

    componentDidMount() {
        this.props.fetchSurveyInfo(this.props.surveyId);
    }

    renderContent() {
        return (
            <div className='row'>
                <div className="card m-3 col-12">
                    <div className="card-body">
                        <span className="card-title">{this.props.surveyInfo.title}</span>
                        <p>{this.props.surveyInfo.body}</p>
                        Sent on: {new Date(this.props.surveyInfo.dateSent).toLocaleDateString()}<br />
                        Last Response on: {this.props.surveyInfo.lastResponse ? new Date(this.props.surveyInfo.lastResponse).toLocaleDateString() : "none"}<br />

                        Yes: {this.props.surveyInfo.yes} <br />
                        No: {this.props.surveyInfo.no}
                    </div>
                </div>

                <div className='row d-flex justify-content-center'>
                    <div className="card m-3 col-5">
                        <div className="card-body">
                            <span className="card-title">Recipients</span>
                            <ul class="list-group list-group-numbered">
                                {this.props.surveyInfo.recipients ? this.props.surveyInfo.recipients.map((data, keys) => {
                                    return(
                                        <li key={keys} className='list-group-item'>{data.email}</li>
                                    );
                                }):""}
                            </ul>
                        </div>
                    </div>
                    <div className="card m-3 col-5">
                        <div className="card-body">
                            <span className="card-title">Choice</span>
                            <ul class="list-group">
                                {this.props.surveyInfo.recipients ? this.props.surveyInfo.recipients.map((data, keys) => {
                                    return(
                                        <li key={keys} className='list-group-item'>{data.responseValue}</li>
                                    );
                                }):""}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center' style={{ height: "auto" }}>
                    <div className='m-3 card col-5 p-3'>
                        <Bar
                            data={{
                                labels: ['yes', 'no'],
                                datasets: [
                                    {
                                        label: ['response'],
                                        data: [this.props.surveyInfo.yes, this.props.surveyInfo.no],
                                        backgroundColor: [
                                            "rgba(157, 245, 39, 0.8)",
                                            'rgba(245, 105, 39, 0.8)'
                                        ]
                                    }
                                ]
                            }}
                            options={{
                                plugins: {
                                    title: {
                                        text: 'Bar View'
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className='m-3 card col-5 p-3'>
                        <Doughnut
                            data={{
                                labels: ['yes', 'no'],
                                datasets: [
                                    {
                                        label: ['response'],
                                        data: [this.props.surveyInfo.yes, this.props.surveyInfo.no],
                                        backgroundColor: [
                                            "rgba(157, 245, 39, 0.8)",
                                            'rgba(245, 105, 39, 0.8)'
                                        ],
                                        borderColor: [
                                            "rgba(157, 245, 39, 0.8)",
                                            'rgba(245, 105, 39, 0.8)'
                                        ]
                                    },
                                ]
                            }}
                            options={{
                                plugins: {
                                    title: {
                                        text: 'Doughnut View'
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className='m-3 card col-5 p-3'>
                        <Pie
                            data={{
                                labels: ['yes', 'no'],
                                datasets: [
                                    {
                                        label: ['response'],
                                        data: [this.props.surveyInfo.yes, this.props.surveyInfo.no],
                                        backgroundColor: [
                                            "rgba(157, 245, 39, 0.8)",
                                            'rgba(245, 105, 39, 0.8)'
                                        ],
                                        borderColor: [
                                            "rgba(157, 245, 39, 0.8)",
                                            'rgba(245, 105, 39, 0.8)'
                                        ]
                                    },
                                ]
                            }}
                            options={{
                                plugins: {
                                    title: {
                                        text: 'Pie View'
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className='m-3 card col-5 p-3'>
                        <PolarArea
                            data={{
                                labels: ['yes', 'no'],
                                datasets: [
                                    {
                                        label: 'response',
                                        data: [this.props.surveyInfo.yes, this.props.surveyInfo.no],
                                        backgroundColor: [
                                            "rgba(157, 245, 39, 0.8)",
                                            'rgba(245, 105, 39, 0.8)'
                                        ]
                                    }
                                ]
                            }}
                            options={{
                                plugins: {
                                    title: {
                                        text: 'Polar Area View'
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='container'>
                {this.renderContent()}
            </div>
        );
    }
}

SurveyInfo.propTypes = {
    match: PropTypes.object.isRequired, // Define match prop type
    fetchSurveyInfo: PropTypes.func.isRequired,
    surveyInfo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { surveyInfo: state.surveyInfo };
}

const ConnectedSurveyInfo = ({ match, ...props }) => {
    const { surveyId } = useParams();
    return <SurveyInfo {...props} surveyId={surveyId} />;
};

export default connect(mapStateToProps, { fetchSurveyInfo })(ConnectedSurveyInfo);