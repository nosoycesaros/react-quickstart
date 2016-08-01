![React Quickstart logo](https://raw.githubusercontent.com/nosoycesaros/react-quickstart/master/assets/images/logo.png)

A really simple quickstart boilerplate for React projects. it includes:
* ReactJS.
* React-Router.
* Styles Files compilation using SASS.
* Webpack and webpack-dev-server.
* ES2015 and JSX support with babel.
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
you can now view your project in the browser, just navigate to `http://localhost:8080`.

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

### Using Deep or shallow rendering
In the `test` environment, you can either use deep or shallow rendering to test React Components. Using one or the other could dramatically improve performance when testing. This is due to the fact that:
* **shallow rendering** only renders one-level deep, i.e: if the component has one or more child components, they will not be rendered.
* **deep rendering** renders components with all of its child components. This rendering methods requires a DOM, and thus deep rendering consumes more resources.

If you need to easily test properties from a component *regardless of the props or state* of any child components, it is recommended to use Shallow rendering; otherwise, use deep rendering.

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
