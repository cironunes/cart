'use strict';

angular.module('cartApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          items: function(MultiItemLoader) {
            return MultiItemLoader();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('apiKey', '511441a4e4b0bddcedd12959');
