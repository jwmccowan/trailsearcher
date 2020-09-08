# Trailsearcher

Welcome to Trailsearcher.  What started as an idea for a multi-platform clone of the amazing Pathbuilder App has evolved to be... An unfinished clone of the amazing Pathbuilder App!

Trailsearcher is a step by step character builder and number tracker for newbies to Pathfinder Second Edition.

I'm basing the UI on the Pathbuilder design since I am unimaginative in that department, but once I have the basic API up and running, I plan to expand on that, and make it more desktop friendly.

## Technologies used

Right now it is basically Nx (organization, transpiling, and serving), React, and Material UI, all built strictly in Typescript.

While building the app, I've noticed a lot of the business logic feels right in the front end services, so that has been my philosophy so far.

We'll see as the logic evolves if that stays the case.

The back end API might end up just being persistant storage and data scraping.

To be honest, I thought this project would include a few more interesting backend technologies.  I was pretty excited about using NestJS's GraphQL integration.  Alas, everything feelss better in plain ol' Typescript.

## Development

Simply clone the project and run:

```
yarn
cd trailsearcher
yarn nx serve
```

Trailsearcher will be running on `http://localhost:4200/`.

I'm open to collaboration.  Right now, I'm designing a modifier/exception system that will make adding feats or other build choices dynamic and easy.

It's a trickier problem than I thought starting out.  Hit me up if you have any thoughts!

## General App Design

I want to expand on this in the future (and things are in flux as I'm settling on the architecture).

Nx does a lot of the organizational heavy lifting.

The web app lives in trailearcher-app, and should remain fairly simple.

React components live in the components library, as well as React specific utils (Providers, reducers, etc).

Pathfinder specific logic is in character-sheet library (this needs to be further relegated, but I'm keeping it as is as I settle on architecture).

Eventually, the backend logic will live in trailsearcher-api.  How much will go in there is yet to be seen.  All business logic might stay in the bundle.

## Permisssions

So far, I haven't used and Pathfinder or Paizo specific language or assets.  I also am a way off of even thinking about charging.
That said, if I am breaching anything in that regard, email me.

The idea for this app is based heavily on Pathbuilder app on Android.  Give it a go if you have the hardware.  You won't find anything here that isn't already implemented much better there.

React is good.  Material UI is good.  Nx is alright.

This project was generated using [Nx](https://nx.dev).
Visit [Nx Cloud](https://nx.app/) to learn more.
