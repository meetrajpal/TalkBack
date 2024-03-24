const keys = require('../../config/keys');
const asset1 = require('../../client/public/img/Asset1.json');
const asset2 = require('../../client/public/img/Asset2.json');

module.exports = survey => {
    return `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>


        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- Your title goes here -->
        <title>FeedBack</title>
        <!-- End title -->

        <!-- Start stylesheet -->
        <style type="text/css">
            a,
            a[href],
            a:hover,
            a:link,
            a:visited {
                /* This is the link colour */
                text-decoration: none !important;
                color: #0000EE;
            }

            .link {
                text-decoration: underline !important;
            }

            p,
            p:visited {
                /* Fallback paragraph style */
                font-size: 15px;
                line-height: 24px;
                font-family: 'Helvetica', Arial, sans-serif;
                font-weight: 300;
                text-decoration: none;
                color: #000000;
            }

            h1 {
                /* Fallback heading style */
                font-size: 22px;
                line-height: 24px;
                font-family: 'Helvetica', Arial, sans-serif;
                font-weight: normal;
                text-decoration: none;
                color: #000000;
            }

            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td {
                line-height: 100%;
            }

            .ExternalClass {
                width: 100%;
            }
        </style>
        <!-- End stylesheet -->

    </head>

    <!-- You can change background colour here -->

    <body
        style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000"
        align="center">

        <!-- Fallback force center content -->
        <div style="text-align: center;">

            <!-- Hero image -->
            <img style="width: 600px; max-width: 600px; height: 350px; max-height: 350px; text-align: center;"
                alt="Hero image"
                src="https://cdn.givingcompass.org/wp-content/uploads/2018/06/13132036/shutterstock_1100033681.jpg"
                align="center" width="600" height="350">
            <!-- Hero image -->

            <!-- Start single column section -->
            <table align="center"
                style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
                width="600">
                <tbody>
                    <tr>
                        <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;"
                            width="596">

                            <h1
                                style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">
                                ${survey.body}</h1>

                            <!-- Start button (You can change the background colour by the hex code below) -->
                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/veryBad" target="_blank"
                                style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
                                <span style="mso-text-raise: 15pt; color: #ffffff;">Very Bad</span>
                            </a>

                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/bad" target="_blank"
                                style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
                                <span style="mso-text-raise: 15pt; color: #ffffff;">Bad</span>
                            </a>

                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/good" target="_blank"
                                style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
                                <span style="mso-text-raise: 15pt; color: #ffffff;">Good</span>
                            </a>

                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/veryGood" target="_blank"
                                style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0;">
                                <span style="mso-text-raise: 15pt; color: #ffffff;">Very Good</span>
                            </a>

                            <!-- End button here -->

                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- End single column section -->



            <!-- Start footer -->
            <table align="center"
                style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;"
                width="600">
                <tbody>
                    <tr>
                        <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;"
                            width="596">

                            <p
                                style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                            </p>

                            <p
                                style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                                <a target="_blank" style="text-decoration: underline; color: #ffffff;"
                                    href="https://fullsphere.co.uk">
                                    ${survey.from}
                                </a>
                            </p>

                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- End footer -->

        </div>

    </body>

    </html>
    `;
};