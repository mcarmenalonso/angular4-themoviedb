# Angular 4 application using theMovieDB APIs.

Steps to work on it or run in local

- Clone the repository
- Inside repository run `npm install`
- For Local Server and Dev build, you will need to add your own theMovieDB API key in `config/webpack.dev.js` file.
- For Production, you will need to add your own theMovieDB API key in `config/webpack.prod.js` file.
- It should look something like,

  Before:
  ```
  const theMovieDBApiKey = process.env.theMovieDBApiKey = process.env.theMovieDBApiKey || "DEVELOPMENT_API_KEY_MOVIEDB";
  ```
  After (below is a example key do not use the same):
  ```
  const theMovieDBApiKey = process.env.theMovieDBApiKey = process.env.theMovieDBApiKey || "94a6dasdsdfassdfasdf2322sdf12";

  ```
- Save the file after adding your API Key.

## Now to start development server,

- Make sure you added your API key in `config/webpack.dev.js` file
- Run `npm run serve`
- Visit http://localhost:5000 in a browser.

## To Create a Build file for Development environment,

- Make sure you added your API key in `config/webpack.dev.js` file
- Run `npm run build:dev`
- Once it completes the process, run `npm start`
- Visit http://localhost:3000 in a browser.

## To Create a Build file for Production environment,

- Make sure you added your API key in `config/webpack.prod.js` file
- Run `npm run build:prod`
- Once it completes the process, run `npm sart`
- Visit http://localhost:3000 in a browser.


NOTE: Use developer tool and use device toolbar to view in a mobile view. 