// express-oauth is a Google-provided, open-source package that helps automate
// the authorization process.
const Auth = require('@google-cloud/express-oauth2-handlers');

// Specify the access scopes required. If authorized, Google will grant your
// registered OAuth client access to your profile, email address, and data in
// your Gmail.
const requiredScopes = [
  'profile',
  'email',
  'https://www.googleapis.com/auth/gmail.modify',
];

const auth = Auth('datastore', requiredScopes, 'email', true);

// Export the Cloud Functions for authorization.
exports.auth_init = auth.routes.init;
