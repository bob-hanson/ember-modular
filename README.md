# Healthicity Platform (HYSPA)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [NVM](https://github.com/creationix/nvm)
* [Node.js](http://nodejs.org/) (with NPM)
* [Redis](https://redis.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `nvm install 6.10.2`
* `nvm use 6.10.2`
* `node -v` (v6.10.2)
* `git clone <repository-url>` this repository
* `cd hyspa`
*  Copy .envs to root folder.
* `yarn install`


## Running / Development
* Start redis-server

  `redis-server`

* Deploy development server to redis server

  `ember deploy development --activate`

* Start Ember server

  `npm start`

* Visit Rails server website

   `<%= local rails server url %>/app`

   eg: `http://domain1.development.admin.lvh.me:3000/app`


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

* Generate new route in ember-engines using following command, re-deploy development to redis server and restart server

  `ember g route <% route_name %> -ir <% engine_name %>`

  eg: `ember g route manage-audits -ir facility-projects`

* Generate new component in ember-engines

  `ember g component <% component_name %>  -ir <% engine_name %>`


### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
