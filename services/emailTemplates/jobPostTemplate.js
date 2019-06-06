const keys = require("../../config/keys");

module.exports = function jobPostTemplate(job) {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2>A New Job Has Been Posted!</h2>
          <p>${job.description}</p>
          <div>
            <h3>Would You Like To Apply?</h3>
            <a href="${keys.templateRedirectDomain}/api/jobs/${
    job.id
  }/apply">Yes</a>
            <a href="${keys.templateRedirectDomain}/api/jobs/${
    job.id
  }/skip">No</a>
          </div>
        <div>
      <body>
    </html>
  `;
};
