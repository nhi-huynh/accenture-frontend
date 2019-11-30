# Defi Banking App Front-end

Uses NextJS and Now by ZEIT.co

Built for the Accenture Banking Hackathon, November 2019.

## Installation

Clone this repo into a new project folder and run install script.
(You will probably want to delete the .git/ directory and start version control afresh.)

With npm

```sh
$ git clone git@github.com:nhi-huynh/accenture-frontend.git accenture-frontend
$ cd accenture-frontend
$ npm install
```

## Developing

Start the dev environment with either:
```sh
$ yarn dev
or
$ npm run dev
```

Open http://localhost:3000 and start modifying the code in `/components`, `/pages`.  

## Production

Build production assets (JS and CSS together) with:

```sh
npm run prod
```

## Static assets

Just add to `/public/` and the production build routes them to `/`

## Uses Now (Zeit)

This project is setup with a `now.json` file to automate deployments to Now.sh by Zeit.

## ES6

This starter includes [Babel](https://babeljs.io/) so you can directly use ES6 code.