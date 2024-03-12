import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/actionindex';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name={process.env.REACT_APP_APPNAME}
                description='Pay for your credits'
                amount={600}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                currency='INR'
            >
                <button className="btn-flat teal white-text">
                    Add credits
                </button>

            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);