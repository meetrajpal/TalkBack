import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div>
            <div className="">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About TalkBack</h1>
                            <p className="lead text-muted mb-0">we collect feedback from your users.</p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">What users relate, we collect</h2>
                            <p className="font-italic text-muted mb-4">TalkBack is the voice of users.</p><Link to="/surveys/new" className="btn btn-light px-5 rounded-pill shadow-sm">Create a survey</Link>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img style={{ border: "0px", borderRadius: "100px" }} src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img style={{ border: "0px", borderRadius: "100px" }} src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Providing Data Visualization</h2>
                            <p className="font-italic text-muted mb-4">With TalkBack you can visualize the responses of users.</p><Link to="/surveys/new" className="btn btn-light px-5 rounded-pill shadow-sm">Create a survey</Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="pb-5">
                <div className="container text-center">
                    <p className="font-italic text-muted mb-0">&copy; Copyrights TalkBack.com All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default AboutUs;