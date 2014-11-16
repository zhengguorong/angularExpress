'use strict';

angular.module('angularExpressApp')
  .controller('AdminCtrl', function ($scope, $http,$location, Auth ) {
        console.log("Auth.isAdmin()"+Auth.isAdmin());
  });
