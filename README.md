React Music
===========

This is the frontend application for React Music, a sample application demonstrating the use of database services on 
[Cloud Foundry](http://cloudfoundry.org). This application uses [React](https://facebook.github.io/react/).

To run the full React Music application, refer to the [React Music Backend](https://github.com/shainachen/react-music)
in addition to this repository.

To begin, clone this repository onto your machine. 

## Set-up

In order to connect your frontend to your backend API, locate the following files in `./src/components`:

* app-body.js
* app-header.js
* app-modal.js
* dropdown.js

Find the variable `urlForAlbums` at the top of each file. Replace each URL with the `/albums` endpoint with your own API
(created with [React Music Backend](https://github.com/shainachen/react-music)).

You will likely have to install a few modules to run the app successfully. Though the modules you must install depend on
what you have previously installed, possible uninstalled modules include:

* `npm-run-all`
* `react`
* `react-DOM`
* `react-scripts`
* `node-sass-chokidar`
* `prop-types` 
* various Pivotal UI React modules

You can install all PUI CSS files with `pui-css-all`. It is easiest to install these modules using `npm install` in
your terminal.

## Running the Application Locally

You can run some commands inside the project folder:

### `npm start` or `yarn start`
These commands will run the app in development mode.
The application will be started on the default port [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits; build errors and lint warnings will appear in the console. If you are met with
errors when running the app for the first time, it is likely you are missing a module.

### `npm test` or `yarn test`
These commands will run the test watcher in an interactive mode.
The application will run tests related to files changed since the last commit.

## Deploying the Application to Cloud Foundry

Install the 'cf' [command-line interface for Cloud Foundry](http://docs.cloudfoundry.org/cf-cli/), target a Cloud Foundry instance,
and log in to Cloud Foundry. Then, the application can be built and pushed with this command:

~~~
$ cf push YOUR_APP_NAME
~~~

Access your application by curling the URL given near the end of the output from the command.

To run the full React Music Application, be sure to push the [backend](https://github.com/shainachen/react-music) to
Cloud Foundry, as well.