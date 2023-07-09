# DEFNODE
  
:no_entry: [DEPRECATED]

This is a skeleton of a ES6 NodeJS web application.

## It comes with:

* [Node](https://nodejs.org)
* [Express](http://expressjs.com/)
* [Sequelize](sequelizejs.com)
* [Pug](https://pugjs.org)
* Scss
* [Foundation](http://foundation.zurb.com/)
* [Jasmine](https://jasmine.github.io/)
* [Grunt](https://gruntjs.com/)

## Clone and install the skeleton

## Create your sql database
You need a sql friendly db understood by Sequelize.
## Edit the database configuration
```Shell 
mv config/database/login.sample.js config/database/login.js
```
And edit it with your own login information.
  
## Start the application
```Shell 
grunt start-server
```
## Watchers
```Shell 
grunt watchers
```

### Nodemon
Nodemon is used to restart the server if any change has been made. It is wrapped within the "grunt start-server" command.

### JSHint
Grunt is configured to watch .js files changes and output the errors found.

### Scss
Scss files are watched by Grunt. Any change will be compiled immediately.
  
The target is _public/css/main.css_. Import into _public/css/src/main.scss_ any file you'd like to compile.

### Database
Models are defined under _/models_
  
One single connection is created in _actions/connectDatabase.js_

### Tests
We make tests with Jasmine framework. Execute the tests by typing:
```Shell 
node tests.js
```
The framework's config file is _/spec/support/jasmine.json_
The tests are under _/spec_

### Front-end
Foundation framework is installed, grunt loads the necessary scss which is automatically compiled. If you like to override foundation variables, make it into _public/css/src/variables.scss_
  
  
  
###
  
  
**The files:**
  
1. _actions/createAccess.js_ 
2. _models/acces.js_
3. _spec/createAccess.spec.js_
4. _public/css/src/*.scss_
4. _public/js/src/app/*.js_
  
are created only as un example of very basic functionality of actions, models, unit tests and front-end stuff.
  
Let's code!
