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

Run "npm run webpackbuild" from project root. Webpack now only builds globals.js and index.html. It does not use the TS loader to build TS files. That task is now left to rollup.

Run "npm run rollupbuild" from project root. You should see newly created app.js in dist folder.

Need to automate this step but so far this is manual. Rename "app.js" to "app.<hash>.js" where <hash> is the hash value from webpack build.

Need to automate this step but so far this is manual. To index.html, Add <script> tag with source pointing to hashed app.js from previous step. 

Run "npm run serve" from project root to serve production application from dist folder using lite-server locally.

