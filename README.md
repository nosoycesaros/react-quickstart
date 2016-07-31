![React Quickstart logo](https://raw.githubusercontent.com/nosoycesaros/react-quickstart/master/assets/images/logo.png)

A really simple quickstart boilerplate for React projects. it includes:
* ReactJS.
* React-Router.
* Styles Files compilation using SASS.
* Webpack and webpack-dev-server for module bundling and development server, respectively.
* ES2015 and JSX support with Babel.
* Mocha as the test runner and chai as the assertion library.

Requirements
---
Make sure to have the following software and `npm` packages installed globally **before** starting any of the quickstart commands.

| Prerequisite       | Version   | How to check if it is installed | Installation instructions                                                                 |
|--------------------|-----------|---------------------------------|-------------------------------------------------------------------------------------------|
| nodeJS             | >= 4.x    | `$ node -v` or `$ npm -v`  | follow the instructions for your operating system [here](https://nodejs.org/en/download/) |
| webpack            | >= 1.14.x | `webpack -v`                    | `npm install -g webpack`                                                                  |
| webpack-dev-server | >= 1.14.x | `webpack-dev-server -v`         | `npm install -g webpack-dev-server`                                                       |
| babelJS            | >= 6.x    | `babel -v`                      | `npm install -g babel`                                                                    |

`webpack`, `webpack-dev-server` and `babel` are optional. If you have any problems running the quickstart's main commands, installing these packages globally may help.

Setting up the quickstart
---
1) Clone this repository in the desired directory in your local machine:

```bash
$ cd /path/to/your/project
$ git clone https://github.com/nosoycesaros/react-quickstart.git
```

2) Install the project's dependencies by running:

```bash
$ npm install
```

3) Compile the project and start a development server by running:
```bash
$ npm start
```
you can now view your project in the browser, just navigate to `http://localhost:8080`. The server includes Hot Module Replacement, so you can just make the tweaks you need and see them reload automatically in the brwoser without a full refresh!

Running Tests
---

To run the test suite, you simply run any of the following commands:
```bash
# run the test suite once
$ npm test

# watch the test files for changes, reload them, and run the suite again.
$ npm run test:watch
```
The `test:watch` task is very useful for development, we recommend you to have this command running as you run tests and make changes to you codebase.

Building for Production
---
You can easily build all of the project's source files to production HTML, CSS and JS files by running the command:

```bash
$ npm run build
```
This will build the source files and create a new `/dist` directory with the compiled resources. The production build will perform the following transformations:

### for HTML
* minifies the `index.html` file by removing line breaks and spaces.
* automatically injects all the generated CSS and JS files that are compiled in the project.

### for CSS
* compile all SASS files into a single CSS file.
* adds vendor prefixes to the compiled CSS using PostCSS [autoprefixer plugin](https://github.com/postcss/autoprefixer)
* minify CSS file using the PostCSS [CSSnano plugin](https://github.com/ben-eb/cssnano).

### for JavaScript
* prepares the production build for both React and ReactDOM.
* Removes duplicated JavaScript code.
* converts ES6 and JSX code to valid ES5 JavaScript.
* Uglifies the final JS output, and mangles it as well.

### for static assets (images, fonts, etc)
* copies the static assets in the `/dist` folder, leaving the original folder structure unchanged.

References
---
This project is based on the following projects and tutorials:
* [React-Router Lesson One](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/01-setting-up) in the awesome [React Router tutorial](https://github.com/reactjs/react-router-tutorial) in github.
* [How-to setup Webpack on an ES6 React Application with SASS](http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html) by [Jonathan Petitcolas](http://www.jonathan-petitcolas.com/).
* [Full-stack React and Redux tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) by [Tero Parviainen](http://teropa.info).

Thank you very much for the awesome developers who made these articles 😄.

Authors
---
Made with a lot of <3 by Cesar Zapata (AKA: [nosoycesaros](https://github.com/nosoycesaros))
and Andrés Osorio (AKA: [Androide Osorio](https://github.com/androide-osorio)).
