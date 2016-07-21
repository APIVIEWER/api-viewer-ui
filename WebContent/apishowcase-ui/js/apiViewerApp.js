(function() {
  var app = angular.module('apiViewer', [ 'ngRoute' ]);

  app.controller('apiViewerCtrl', function($scope, $http){
    
    $http.get("http://localhost:8627/discoverydefinition").success(function(response) {$scope.discoverydefinition = response;});

  });
})();