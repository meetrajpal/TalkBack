import './cssFile.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import axios from 'axios';

function ContactUs() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('/api/contact', { name, mail, msg });
        if (res) {
            alert('Your message is sent to Meet Rajpal. Thank you for contacting.');
            window.location.reload();
        }
    }

    return (
        <div class="container container-contact d-flex justify-content-center">
            <div class="row m-2 justify-content-center align-items-center">
                <div class="col-md-5 align-items-center me-5">
                    <Player
                        autoplay
                        loop
                        // src={"./img/Animation.json"}
                        src="https://lottie.host/6980f605-33c5-4338-a7b0-71f57a786e60/TEqQDn0sVj.json"
                        style={{ height: '300px', width: '300px', }}
                    >
                    </Player>
                </div>
                <div class="col-md-6">
                    <h2 class="form-title form-title-contact">Contact us</h2>
                    <p class="justify text-muted-contact-contact">Have an enquiry?<br />Fill out the form below to contact our team.</p>

                    <form method='post' onSubmit={handleSubmit}>
                        <div class="form-group form-group-contact">
                            <label for="exampleInputName">Your name</label>
                            <input onChange={(event) => { setName(event.target.value) }} type="text" class="form-control form-control-contact" id="exampleInputName" required />
                        </div>

                        <div class="form-group form-group-contact">
                            <label for="exampleInputEmail1">Your email address</label>
                            <input onChange={(event) => { setMail(event.target.value) }} type="email" class="form-control form-control-contact" id="exampleInputEmail1" required />
                        </div>

                        <div class="form-group form-group-contact ">
                            <label for="exampleFormControlTextarea1">Your message</label>
                            <textarea onChange={(event) => { setMsg(event.target.value) }} class="form-control form-control-contact" id="exampleFormControlTextarea1" rows="5" required></textarea>

                        </div>
                        <div class="row">
                            <div class="col-md-3 offset-md-9"><input type="submit" class="btn btn-primary btn-contact" value={'Send'} /></div>
                        </div>


                    </form>

                </div>
            </div>

        </div>
    );
}

export default ContactUs;