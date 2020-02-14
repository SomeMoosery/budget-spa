Budget-tracking responsive single-page application built with React, providing Google OAuth authentication and single-command deployment to Heroku.

**Project created with create-react-app**

**Dependencies Used:**
- [react-google-login](https://www.npmjs.com/package/react-google-login)

## Prerequisites:

#### Integrate with Google Cloud Platform API

[Follow this link to get started](https://developers.google.com/identity/sign-in/web/sign-in)

## Installation Steps

1. Clone this repo: `git clone https://github.com/SomeMoosery/budget-spa`
2. `cd budget-spa`
3. Create your environment file `.env`
4. In `.env`, add your Google Client ID as such: `GOOGLE_CLIENT_ID="<YOUR-ID-GOES-HERE>"`
6. Install all dependencies, `npm i`
5. To run locally, run `npm start` and navigate to `http://localhost:3000` (ensure your project has authorized this JavaScript origin - see Troubleshooting if getting error `"Not a valid origin for the client from Google API Oauth"`)

## Deployment Steps

TODO

## Troubleshooting

TODO

1. Ensuring you have the right Authorized Javascript Origins set: [here](https://developers.google.com/identity/sign-in/web/server-side-flow) [here](https://stackoverflow.com/questions/44068680/not-a-valid-origin-for-the-client-from-google-api-oauth) and [here](https://developers.google.com/identity/sign-in/web/sign-in)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
