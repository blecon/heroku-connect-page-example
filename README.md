# Blecon node.js customer connect example

This is an example of a customer connection handler in node.js, that can run on Heroku.

## Getting started running locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

You will need the following:

- Blecon Account ID
- Blecon API key

Obtain your Account ID from the Blecon Console, top left and Account Settings.

Obtain your API key from your User Profile in the top right menu.

Populate an a file called .env in the root of your project as follows:

```
BLECON_API_KEY=<YOUR API KEY>
BLECON_ACCOUNT=<YOUR ACCOUNT ID>
```
Then:

```sh
$ git clone https://github.com/blecon/heroku-connect-page-example # or clone your own fork
$ cd heroku-connect-page-example
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ heroku config:set BLECON_API_KEY="<YOUR KEY>"
$ heroku config:set BLECON_ACCOUNT="<YOUR ACCOUNT>"
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

