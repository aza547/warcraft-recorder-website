# Contributing

This codebase backs the Warcraft Recorder website. 
It is live at [www.warcraftrecorder.com](www.warcraftrecorder.com).

## Setting Up
1. Install Node.js LTS version (latest at time of writing is 20.4.0) from [here](https://nodejs.org/en/).
1. Clone a copy of the codebase.
1. Run `npm install` on the command line to install required node packages.

## Running in Dev Mode
1. Run `npm start` to launch the application in development mode.
1. Browse to `http://localhost:3000/` to view the website, changing to code will reload it.

## Building
- Run `npm run build`.

## Deploying
- Deploy the `build/` folder to the Azure App Service using the VSCode extension.
- That needs my sign in for now, probably want to do some CI shenangans to make it happen automatically.
