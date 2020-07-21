# Hims UK Store UI

Authors: 

Rob Bradley - FE Developer 

Max Barry - FS Developer

(Contract) JAN 2020 - APR 2020


# TECH STACK

React, Typescript, Storybook, Saga, Styled Components, Hooks. 

Live Site: https://forhims.co.uk

# Core FE Directories of note:

Inherited and Adapted from US repo. 

This is a partial upload of the repo relevant to UK operations and FE functionality.

Content: /content, /constants

Components Library: /components, /modules

User Checkout Flow Forms (Greenfield, WIP): /domains/checkout-flow 

Product Routing: routes/

Core content UI rendering generated dynamically dependent on content/ with explicit reference to component ids/types  

# RESPONSIBILITIES (from CV)

UK startup of this successful (top 5%, Forbes) US Men’s Wellness Platform. 

Working within a small team, supporting one f/s dev, responsible for creating new product pages, site wide updates and a greenfield build of the Checkout flow.

Additional: UX/Design - Sketch, Zeplin & Photoshop


## Build Indicator

[![CircleCI](https://circleci.com/gh/Clubroom/hers/tree/master.svg?style=svg&circle-token=e08e45283e969060a6d8da51c92066d2205f4311)](https://circleci.com/gh/Clubroom/hers/tree/master)

## Setup environment

```bash
npm install
```

## Configuration

TODO

## Development (Staging API)
This command starts the Node server (`npm start`) and Webpack build (`npm run webpack`)
```bash
npm run dev
```

### Launching the server from an IDE/Editor
You can initiate the Webpack file watcher & builder process separately if you'd like to take control of the Node server.
This is especially useful when you need to use your IDE/Editor's step debugger utilities.

First, launch the file watcher & builder and leave it running in a separate shell :

```bash
npm run build:local
```

Next step will depend on your editor of choice. Feel free to add yours :
- For Webstorm : You can run/debug a Node instance by using `dist/server.js` as the target Javascript file. Step debugging
will work out of the box as long as Webstorm is able to see the server.js sourcemap file.

You might need to relaunch your server when you make file changes and trigger a Webpack rebuild.

## Testing
Execute unit tests with
```
npm run test
```


Open the Cypress test runner for E2E tests
```
npm run cypress:open
```

Run E2E tests in headless mode
```
npm run cypress:run
```
    


## Testing Guide
If you have questions about how we're testing this repo read the
[Testing-Guide](./TESTING-GUIDE.md).

## Domains

[Checkout Flow](domains/checkout-flow/README.md)



## Deployments
https://gist.github.com/Kadajett/3109cbb58f13e69a07966352f3384e8a
