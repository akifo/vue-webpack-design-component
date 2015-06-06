/**
 * Boot up the Vue instance and wire up the router.
 */

var Vue = require('vue');
var Router = require('director').Router;
var app = new Vue(require('./app.vue'));
var router = new Router();

Vue.config.warnExpressionErrors = false;

router.on('/top', function () {
  app.view = 'top-view';
});

router.on('/price', function () {
  app.view = 'price-view';
});

router.on('/about', function () {
  app.view = 'about-view';
});

router.configure({
  notfound: function () {
    router.setRoute('/top');
  }
});

router.init('/top');

