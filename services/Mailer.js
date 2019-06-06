const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class Mailer {
  constructor({ subject }, applicants, content) {
    this.message = {
      to: this.formatAddresses(applicants),
      from: "no-reply@recruiterra.com",
      subject: subject,
      html: content,
      trackingSettings: {
        clickTracking: { enable: true }
      }
    };
    sgMail.setApiKey(keys.sendGridKey);
  }

  formatAddresses(applicants) {
    return applicants.map(({ email }) => email);
  }

  async send() {
    try {
      const response = await sgMail.sendMultiple(this.message);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Mailer;
