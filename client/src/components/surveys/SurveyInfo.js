import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveyInfo } from '../../actions/actionindex';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { defaults } from 'chart.js/auto';
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
            <div className='row d-flex justify-content-center m-0'>
                <div className="card my-2 col-10">
                    <div className="card-body">
                        <span className="card-title">Survey Title: {this.props.surveyInfo.title}</span>
                        <p>Survey Body: {this.props.surveyInfo.body}</p>
                        Sent on: {new Date(this.props.surveyInfo.dateSent).toLocaleDateString()}<br />
                        Last Response on: {this.props.surveyInfo.lastResponse ? new Date(this.props.surveyInfo.lastResponse).toLocaleDateString() : "none"}<br />
                    </div>
                </div>

                <div className='row d-flex justify-content-center'>
                    <div className="card my-3 me-3 col-5">
                        <div className="card-body">
                            <span className="card-title"><strong className='fs-5'>Response summary</strong></span>
                            <div className='table-responsive'>
                                <table className='table mt-2'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Response</th>
                                            <th scope='col'>Total Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Very Bad</td><td>{this.props.surveyInfo.veryBad}</td></tr>
                                        <tr><td>Bad</td><td>{this.props.surveyInfo.bad}</td></tr>
                                        <tr><td>Good</td><td>{this.props.surveyInfo.good}</td></tr>
                                        <tr><td>Very Good</td><td>{this.props.surveyInfo.veryGood}</td></tr>
                                    </tbody>
                                </table>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Recipients</th>
                                            <th scope='col'>Response</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.surveyInfo.recipients ? this.props.surveyInfo.recipients.map((data, keys) => {
                                            return (
                                                <tr key={keys}><td>{data.email}</td><td>{data.responseValue}</td></tr>
                                            );
                                        }) : ""}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center' style={{ height: "auto" }}>
                    <div className='mt-3 card col-8 p-3'>
                        <Bar
                            data={{
                                labels: ['Very Bad', 'Bad', 'Good', 'Very Good'],
                                datasets: [
                                    {
                                        label: ['response'],
                                        data: [this.props.surveyInfo.veryBad, this.props.surveyInfo.bad, this.props.surveyInfo.good, this.props.surveyInfo.veryGood],
                                        backgroundColor: [
                                            "#003f5c",
                                            "#7a5195",
                                            "#ef5675",
                                            "#ffa600"
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
                </div>

                <div className='row d-flex justify-content-center' style={{ height: "auto" }}>
                    <div className='mt-3 card col-8 p-3'>
                        <Doughnut
                            data={{
                                labels: ['Very Bad', 'Bad', 'Good', 'Very Good'],
                                datasets: [
                                    {
                                        label: ['response'],
                                        data: [this.props.surveyInfo.veryBad, this.props.surveyInfo.bad, this.props.surveyInfo.good, this.props.surveyInfo.veryGood],
                                        backgroundColor: [
                                            "#003f5c",
                                            "#7a5195",
                                            "#ef5675",
                                            "#ffa600"
                                        ],
                                        borderColor: [
                                            "#003f5c",
                                            "#7a5195",
                                            "#ef5675",
                                            "#ffa600"
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
                </div>

                <div className='row d-flex justify-content-center' style={{ height: "auto" }}>
                    <div className='mt-3 card col-8 p-3'>
                        <Pie
                            data={{
                                labels: ['Very Bad', 'Bad', 'Good', 'Very Good'],
                                datasets: [
                                    {
                                        label: ['response'],
                                        data: [this.props.surveyInfo.veryBad, this.props.surveyInfo.bad, this.props.surveyInfo.good, this.props.surveyInfo.veryGood],
                                        backgroundColor: [
                                            "#003f5c",
                                            "#7a5195",
                                            "#ef5675",
                                            "#ffa600"
                                        ],
                                        borderColor: [
                                            "#003f5c",
                                            "#7a5195",
                                            "#ef5675",
                                            "#ffa600"
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
                </div>

                <div className='row d-flex justify-content-center' style={{ height: "auto" }}>
                    <div className='mt-3 card col-8 p-3'>
                        <PolarArea
                            data={{
                                labels: ['Very Bad', 'Bad', 'Good', 'Very Good'],
                                datasets: [
                                    {
                                        label: 'response',
                                        data: [this.props.surveyInfo.veryBad, this.props.surveyInfo.bad, this.props.surveyInfo.good, this.props.surveyInfo.veryGood],
                                        backgroundColor: [
                                            "#003f5c",
                                            "#7a5195",
                                            "#ef5675",
                                            "#ffa600"
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
            </div >
        );
    }

    render() {
        return (
            <div className=''>
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