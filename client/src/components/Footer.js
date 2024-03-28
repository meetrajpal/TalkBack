function Footer() {
    return (
        <table align="center" className="mt-3"
            style={{ "text-align": "center", width: "100%", "vertical-align": "top", "background-color": "#000000" }}>
            <tbody>
                <tr>
                    <td style={{ "vertical-align": "top", "padding-left": "30px", "padding-right": "30px", "padding-top": "30px", "padding-bottom": "30px" }} >

                        <p
                            style={{ "margin-bottom": 0, "font-size": "17px", "line-height": "24px", "font-family": "'Helvetica', Arial, sans-serif, font-weight: 400, text-decoration: none, color: #ffffff" }} className="mb-2">
                            This project is solely made for learning purpose by <a style={{ "text-decoration": "none" }} href="https://www.linkedin.com/in/meetrajpal/">Meet Rajpal <i className="bi bi-linkedin"></i></a>
                        </p>

                        <p
                            style={{ "margin-bottom": 0, "font-size": "17px", "line-height": "24px", "font-family": "'Helvetica', Arial, sans-serif, font-weight: 400, text-decoration: none, color: #ffffff" }}>
                            The source code for this project is available at <a style={{ "text-decoration": "none" }} href="https://www.github.com/meetrajpal/talkback">GitHub <i className="bi bi-github"> </i></a>
                        </p>

                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Footer;