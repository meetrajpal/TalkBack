import { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1> Collect your feedbacks with us! </h1>
                <h2> what users relate we collect </h2>
                <a href="/auth/google" className="fs-5 nav-link d-flex justify-content-center align-items-center"><img src="./img/googlePNG.png" height={35} width={35} /><span>Continue with google</span></a>
            </div>
        );
    }
}

export default Landing;