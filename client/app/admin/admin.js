'use strict';

angular.module('angularExpressApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        authenticate: true
      })
        .state('fileupload',{
            url:'/admin/fileupload',
            templateUrl: 'app/admin/fileupload.html',
            controller: 'FileUploadCtrl',
            authenticate: true
        })
        .state('addpost',{
            url:'/admin/addpost',
            templateUrl: 'app/admin/post/addpost.html',
            controller: 'AddPostCtrl',
            authenticate: true
        })
  });