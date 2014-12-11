'use strict';

angular.module('angularExpressApp')
    .controller('PostsManagerCtrl', function ($scope, $http) {
        var post=function(params){
            this.id=params._id;
            this.title=params.title;
            this.publicNow=params.publicNow;
            this.content=params.content;
        }
        $scope.test="zgr";
        $scope.getAll=function(){
            $scope.postList=[];
            $http.get('/api/posts').
                success(function(data, status, headers, config) {
                    var length=data.length;
                    if(data&&length>0){
                        for(var i=0;i<length;i++){
                            $scope.postList.push(new post(data[i]));
                        }
                    }
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
        $scope.delete=function(data){
            var id=data.post.id;
            $http.delete("/api/posts/"+id).
                success(function(data, status, headers, config) {
                    $scope.getAll();
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
        $scope.getAll();

    });
