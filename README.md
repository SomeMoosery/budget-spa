Budget-tracking responsive single-page application built with React, providing Google OAuth authentication and single-command deployment to AWS using Serverless.

## Prerequisites:

#### Integrate with Google Cloud Platform API

[Follow this link to get started](https://developers.google.com/identity/sign-in/web/sign-in)

#### Setup AWS Environment

1. Ensure you have a valid AWS account
2. In the AWS console, navigate IAM and create a new user
    - Ensure `Programmatic Access` is enabled
    - Ensure `serverless-framework` is in the name
    - Give this new user `AdministratorAccess` policy (can fine-tune policies later)
        - We really just need S3, Certificate Manager, Cloudfront, Route53
    - **Be sure to save the `Access Key ID` and `Secret Access Key` in a secure location!!**
3. Ensure Serverless (version > 1.49) is installed. If not, run `npm i -g serverless`

## Installation Steps

1. Clone this repo: `git clone https://github.com/SomeMoosery/budget-spa`
2. `cd budget-spa`
3. Create your environment file `.env`
4. In `.env`, add your Google Client ID as such: `REACT_APP_GOOGLE_CLIENT_ID="<YOUR-ID-GOES-HERE>"` (with the quotes)
4. In `.env`, add your AWS Access Key ID and AWS Secret Access Key from the Prerequisites:
    - `AWS_ACCESS_KEY_ID=<YOUR-AWS-ACCESS-KEY-ID>`
    - `AWS_SECRET_ACCESS_KEY=<YOUR-AWS-SECRET-ACCESS-KEY>`
6. Install all dependencies, `npm i`
5. To run locally, run `npm start` and navigate to `http://localhost:3000` (ensure your project has authorized this JavaScript origin - see Troubleshooting if getting error `"Not a valid origin for the client from Google API Oauth"`)

## Deployment Steps

1. Simply run `serverless` in your project directory to deploy and udpate your app
    - The URL will be given after the command successfully runs
    - **NOTE:** The first time you run this, you'll need to add this URL to your trusted credentials in your Google Cloud Platform project you created for this app!! **Add this BEFORE navigating to the app in your browser for the first time**
    - **NOTE:** On your first deployment, it may take up to an hour the site to appear at the given URL (but is usually there within a couple of seconds to minutes)

## Troubleshooting

1. Ensure you have the right Authorized Javascript Origins set: [here](https://developers.google.com/identity/sign-in/web/server-side-flow) [here](https://stackoverflow.com/questions/44068680/not-a-valid-origin-for-the-client-from-google-api-oauth) and [here](https://developers.google.com/identity/sign-in/web/sign-in)
2. If you deployed the site, visit the listed URL, and get an error in the window when clicking on the Google Authentication button: make sure that you have added the this URL to your Google Cloud Platform project under Credentials.
3. If you see the "Unable to authenticate. Are your username and password correct?" custom error message under the Google Authentication button and are unable to log in and access the site, the easiest fix for this is to remove the site using `serverless remove` and redeploy, ensuring that you add the URL provided after the first deployment to your GCP project's trusted credentials **before navigating to the site**. You'll likely still be able to access the site on a private browser window, in an entirely different browser, or on mobile, but there are some session issues when navigating to the site before adding it as a trusted credential to GCP.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `serverless`

Deploys the app to AWS.<br />
Follow the provided URL after the comamnd completes to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

**Dependencies Used:**
- [react-google-login](https://www.npmjs.com/package/react-google-login)
- [material-ui](https://www.npmjs.com/package/@material-ui/core)