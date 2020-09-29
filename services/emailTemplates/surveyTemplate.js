const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <html>
            <body style="background: skyblue;">
                <div style="text-align: center;">
                    <h3>Hi.Hey.Hello.Hola</h3>
                    <p>Please answer the following questions:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                    </div>
                    <div>
                    Made with <span style="color:red;">&hearts;</span> by ThunderMail.
                    </div>
                </div>
            </body>
        </html>
    `;
};
