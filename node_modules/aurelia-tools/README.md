tools
=====

Tools and utility functions used to build and develop Aurelia's libraries.

## To create dev env -

Create an aurelia directory to hold all of the projects.

`mkdir aurelia`

Change to the new directory

`cd aurelia`

Clone this repository into the `tools` directory.  This contains the helper tools for creating the dev environment.

`git clone https://github.com/PWKad/tools.git`

Clone the skeleton-navigation also which is the base app for testing - 

`git clone https://github.com/aurelia/skeleton-navigation.git`

Change directory into skeleton-navigation

`cd skeleton-navigation`

Now run the `build-dev-env` command.  This will create all of the directories inside of `aurelia` under the proper name, `git clone` them all and then perform a `gulp build`.

`gulp build-dev-env`

Now you have the ability to update the repos locally, make changes, and use those in the skeleton app in the `aurelia` directory by using the `gulp update-own-deps` command.