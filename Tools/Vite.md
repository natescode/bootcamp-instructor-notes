---
tags:
  - frontend
  - protocols
  - vite
  - tools
---
Vite (pronunced Veet) is a build tool for front-end projects. It builds, bundles and runs our code locally so we can developer projects. Vite can also package up our code so it is ready to be deployed to a real website.

## Create a Vite Project from Scratch

We can use `npm create` for `vite` to create a new `typescript` project.

`npm create vite@latest my-vue-app -- --template vanilla-ts`

## Installation from scratch

*IF* you don't already have Vite it can be installed like so

`npm install vite@latest`

## Run Vite

Create a script in your `packages.json` like this

```json
{
  "scripts":{
	  "dev":"vite"
  }
}
```

Now we can run `npm run dev` to see our site up and running.