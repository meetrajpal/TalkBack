import { Component } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class Landing extends Component {
    render() {
        return (
            <div className="static-slider10">
                <div className="container">
                    {/* <!-- Row  --> */}
                    <div className="row justify-content-center text-black ">
                        {/* <!-- Column --> */}
                        <div className="col-md-8 align-self-center text-center">
                            <span className="badge rounded-pill badge-inverse  font-weight-light px-3 py-1 fs-5 text-black">Collect Your Feedbacks</span>
                            <h1 className="my-3 title   fs-1 h-1">TalkBack</h1>
                            <h6 className=" font-weight-normal op-8 fs-5">talks for your business</h6>
                            <a href="/auth/google" className="btn btn-outline-dark rounded-pill btn-md mt-3"><img src="./img/googlePNG.png" height={35} width={35} alt='googleLogo' /><span>Continue with google</span></a>
                        </div>

                    </div>
                  
                    <Player
                        autoplay
                        loop
                        src={"./img/animationLanding.json"}
                        // src="https://lottie.host/d085457c-a4fb-4085-b877-a90f52909373/pkxSVPVaio.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </div>
            </div>
        );
    }
}

export default Landing;