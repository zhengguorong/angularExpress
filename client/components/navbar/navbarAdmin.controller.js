'use strict';

angular.module('angularExpressApp')
    .controller('NavbarAdminCtrl', function ($scope, $location, Auth) {
        $scope.user=Auth.getCurrentUser();
        $scope.logout = function() {
            Auth.logout();
            $location.path('/admin/login');
        };

    });