import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/actionindex';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderContent() {
        return this.props.surveys.reverse().map((survey, keys) => {
            return (
                <div key={keys} className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className='right'>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p><br/>
                        <p className='right'>Last Response on: {survey.lastResponse ? new Date(survey.lastResponse).toLocaleDateString() : "none"}</p>
                    </div>
                    <div className="card-action center">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='container'>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);