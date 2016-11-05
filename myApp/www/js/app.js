// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() { 
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);      

    }
    if (window.StatusBar) {     
      StatusBar.styleDefault();
    }
  });
})

.controller('ScannerCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function () {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData.text);
      console.log("format " + imageData.format)
    }, function (error) {
      console.log("an error happened " + error)
    });
  }
});

