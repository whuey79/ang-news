/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
 
var app = angular.module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
	])
    .constant('FIREBASE_URL','https://glowing-fire-2629.firebaseio.com/');
  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	  .when('/', {
	    templateUrl: 'views/posts.html',
		controller: 'PostsCtrl'
	  })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller:'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
