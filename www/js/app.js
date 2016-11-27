// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/start-screen.html'
      }
    }
  })

  .state('app.disaster-select', {
    url: '/disaster-select',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-select.html'
      }
    }
  })

  .state('app.disaster-flow-1', {
    url: '/disaster-flow/1',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow1.html'
      }
    }
  })

  .state('app.disaster-flow-2', {
    url: '/disaster-flow/2',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow2.html'
      }
    }
  })

  .state('app.disaster-flow-3', {
    url: '/disaster-flow/3',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow3.html'
      }
    }
  })

  .state('app.disaster-flow-4', {
    url: '/disaster-flow/4',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow4.html'
      }
    }
  })

  .state('app.disaster-flow-5', {
    url: '/disaster-flow/5',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow5.html'
      }
    }
  })

  .state('app.disaster-flow-6', {
    url: '/disaster-flow/6',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow6.html'
      }
    }
  })

  .state('app.disaster-flow-7', {
    url: '/disaster-flow/7',
    views: {
      'menuContent': {
        templateUrl: 'templates/disaster-flow7.html'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  })

  .state('app.browse', {
  url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/start-screen.html'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
