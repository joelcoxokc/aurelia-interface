tools
=====

Tools and utility functions used to build and develop Aurelia's libraries.

## To create a dev environment:

1. Create an aurelia directory to hold all of the projects.

  ```shell
  mkdir aurelia
  ```
2. Change to the new directory

  ```shell
  cd aurelia
  ```
3. Clone this repository into the `tools` directory.  This repo contains the helper tools for creating the dev environment.

  ```shell
  git clone https://github.com/aurelia/tools.git
  ```
4. Clone the skeleton-navigation also which is the base app for testing -

  ```shell
  git clone https://github.com/aurelia/skeleton-navigation.git
  ```
5. Change directory into skeleton-navigation

  ```shell
  cd skeleton-navigation
 ```
6. Install the skeleton-navigation application's dependencies:

  ```shell
  npm install
  jspm install
  ```
7. Build the dev environment.  This will create all of the directories inside of `aurelia` under the proper name, `git clone` them all and then perform a `gulp build`.

  ```shell
  gulp build-dev-env
  ```

Now you have the ability to update the repos locally, make changes, and use those in the skeleton app in the `aurelia` directory by using the `gulp update-own-deps` command.
