# Multifunctional Vue Application Boilerplate
> Get the old version [here](https://github.com/Rzial/vue-app-boilerplate-scss)

This template enables the use of multiple features out of the box:

* Typescript
* HTML and [Pug](https://pugjs.org/)
* CSS and [SASS](https://sass-lang.com/)
* [dotenv](https://www.npmjs.com/package/dotenv) and [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)
* [Vue.js](https://vuejs.org/), [VueRouter](https://router.vuejs.org/) and [Vuex](https://vuex.vuejs.org/)
* [Jest](https://jestjs.io/) with [@vue/test-utils](https://vue-test-utils.vuejs.org/)
* Webpack profiles for **development** and **production**

## Where to go?

* [VueRouter Configuration](./src/core/router/index.ts)
* [Vuex Configuration](./src/core/store/index.ts)
 
* [Sync Configuration](./src/core/plugin/sync/index.ts)

> On `sync` you can configure anything that needs to be setup before the app gets mounted but after VueRouter and Vuex
> is instanced like, for example, routing guards.
