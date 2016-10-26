'use strict';

angular.module('yoangularApp.auth', ['yoangularApp.constants', 'yoangularApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
