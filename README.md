Echo StreamServer SDK in Angular
================================

This is a demo project to illustrate how quickly the Echo API can be used to
build an Angular application driven by a social stream.

Pre-requisites
--------------
Angular can be used in any kind of environment, from simple single-page apps up
to enterprise content management system driven sites. However for demo purposes
a very sophisticated "stack" can be generated autoamtically using the Angular
scaffold generator in Yeoman. What's listed here is not meant to be
documentation - there are dozens of guides on using Grunt, Yeoman, and Bower on
the Internet.

But if you follow these steps you can reproduce what's provided here very
quickly - this sample project was built in 3 hours!

Total time to build this application was 4 hours.

1. Install pre-requisites:

    npm install -g yo grunt-cli bower
    npm install -g generator-angular
    Install Ruby and "gem install compass"

2. Scaffold the application:

    yo angular
    (Yes to SASS and Bootstrap, install all includes.)

3. grunt serve

This is more than just a basic skeleton. At this point you will have a complete,
fully-responsive Angular app with Grunt utility tasks pre-defined, SASS support
with a "watch" task to auto-recompile after you make changes, Karma test
scripts, etc.

It will even live-reload as you edit! :)

Building the App
----------------
As pretty as the welcome page is, we don't really need it for this demo.
views/main.html was edited to cut out the boilerplate elements. The only thing
kept was the "jumbotron" since it was a convenient DIV to put the stream into.

1. Edited main.js. Added a Factory that returns a Promise from an AJAX call, the
preferred pattern for data-driven Angular apps. This calls a hard-coded Echo
Search query but obviously could be easily enhanced to accept parameters.

1. Edited main.js. Altered the MainCtrl Controller to call the service
previously created and add its result to $scope. Note that Live Updates are not
being made here, but this could be done simply by calling the service on an
interval and remembering the "since" value.

1. Edited main.html to add a basic template display for stream items.

1. Edited index.html to add a reference to stream.scss.

1. Created stream.scss with some simple styles for rendering the items.
