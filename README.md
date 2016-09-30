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

Run "npm run webpackbuilddev" from project root. Webpack only builds globals.js (containing polyfills) and index.html in project root. Webpack is not being used to build the app. That task is left to AOT and Rollup.

Run "npm run servedev" from project root. This launches gulp in watch mode. 

Make a tiny change in any of your app's files, for example the title property on app.component.ts or any of your HTML templates or CSS styles so that gulp is triggered.

At this point, the app files - TS, HTML and CSS files from /src down (or wherever tsconfig-aot.json lives) - are first AOT compiled by NGC and outputted to src/aot/. Rollup then reads into src/aot/ and builds the app into one bundle - app.js. In the process, rollup applies tree-shaking to remove unused functions, reducing the bundle size significantly. Finally, gulp will will invoke lite-server to serve index.html. Since file I/O is occurring for ngc and rollup, this process is slow despite being automated. Need to make this occur in-memory.

2 things to note:

- if the served page does not show correctly and F12 tool shows an error "Angular requires Zone.js prolyfill", manually edit the index.html outputted by webpackbuilddev script above and make sure script "globals.js" appears BEFORE "app.js".
- if the served page does not reflect your code changes even after the ngc and rollup tasks have completed, hit F12 to refresh.



PRODUCTION DEPLOY

Run "npm run build" from project root. webpack, ngc and rollup will trigger and outputs will be saved in dist.

Make the following changes manually.

(1) Rename "app.js" to "app.hash.js" where 'hash' is the hash value from webpack build.

(2) To index.html, Add 'script' tag with source pointing to hashed app.js from previous step. 

dist folder is now ready to deploy to production/staging web server. You can also serve its content locally with "npm run serve".

