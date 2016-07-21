(function() {
  var app = angular.module('apiViewer', [ 'ngRoute' ]);

  app.controller('apiViewerCtrl', function($scope, $http){
    
    $http.get("http://localhost:8767/apis").success(function(response) {$scope.apis = response;});

  });
})();