# Angular2 Seed Project

This repo creates an advanced angular2 starter project written in TypeScript2 with basic OOB components. You can add your own components to suit your application needs. 

The production build is optimized using Webpack and rollup pipelines. Webpack applies minification and concatenation to all of your app files except the typescript files. ngc and rollup together are now used to build the typescript files.

Keep checking package.json for version updates.


# Steps

Make sure you have typescript, typings and npm installed globally.

Clone this repo.

Open the project in your favorite code editor/IDE. If using Visual Studio Code, it MUST be opened in admin mode (otherwise "npm install" will fail on certain webpack related install)

The following commands must be performed in order.

Run "npm install" from project root.

DURING DEVELOPMENT

Run "npm run webpackbuilddev" from project root. Webpack builds globals.js and index.html in project root. Webpack is not being used to build TS files. That task is now left to rollup.

Run "npm run servedev" from project root. This launches gulp. Any changes to TS files will be watched, ngc and rollup will trigger and lite-server will reflect those changes. Since file I/O is occurring for ngc and rollup, this process is slow despite being automated.

PRODUCTION DEPLOY

Run "npm run build" from project root. webpack, ngc and rollup will trigger and outputs will be saved in dist.

Make the following changes manually.

(1) Rename "app.js" to "app.<hash>.js" where <hash> is the hash value from webpack build.

(2) To index.html, Add <script> tag with source pointing to hashed app.js from previous step. 

dist folder is now ready to deploy to production/staging web server. You can also serve its content locally with "npm run serve".

