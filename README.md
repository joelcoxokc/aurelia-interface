![enter image description here](https://github.com/joelcoxokc/aurelia-interface/blob/master/templogo.png)

# aurelia-interface

[![Join the chat at https://gitter.im/joelcoxokc/aurelia-interface](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/joelcoxokc/aurelia-interface?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A Google Material Design based UI Library for the [Aurelia](http://www.aurelia.io/) platform.


> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/aurelia/discuss).


## Contribution

**Plugins** are found in [./__plugins](/__plugins).

**Demo Application** is found in [./src](/src).

**HTML** We are using HTML for our views, however, you are able to use jade(Though we still recommend using HTML)

**Flex-Box** We are using Flex-Box to build this library.

**Components** We are implementing a multitude of components from other Frameworks & Libraries.


## The Library


####Components:

 - Buttons
 - Actions
 - Tabs
 - Collections
 - Collapsible
 - Select
 - Typehead
 - Dropdown
 - Modal
 - Dialog
 - Progress
 - Card
 - DataGrid
   - Grouping
   - Dragging
 - Table
 - Shadows
 - Grid
 - Color
 - Draggable

####Layout:

 - ui-main
 - ui-body
 - ui-section
 - ui-nav
 - ui-aside
 - ui-header
 - ui-footer
 - ui-view
 - ui-grid
 - ui-custom

####Plugins:

 - uiLayoutService
 - uiToggle
 - uiAnimate
 - uiWaves
 - uiText
 - uiBg


####Under Development:

 - Layout
   - ui-nav
   - ui-aside
   - ui-body
   - ui-main
   - ui-view

Eventually plugins will be in individual repos. The overall architecture is currently a work in progress.

Please Note that any changes made to the Dev environment may be overwritten at any time.

## Running The App

1. Ensure that [NodeJS](http://nodejs.org/), [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md), and [Jspm](https://github.com/jspm/jspm-cli/wiki/Getting-Started) are installed. These provides the development environment on which the build tooling runs.
  > **Note:** GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.

5. Install the client-side dependencies with jspm:
  ```
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running the command.
 
6. To run the app, execute the following command:
  ```
  gulp watch
  ```
7. Open [http://localhost:9000](http://localhost:9000) in your browser to see the app. The webpage will automatically refresh itself as you save files inside the project.

## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
3. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Run the E2E-Tests

  ```shell
  gulp e2e
  ```
