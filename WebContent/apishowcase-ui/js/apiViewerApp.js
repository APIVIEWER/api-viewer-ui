(function() {
	var app = angular.module('apiViewer', [ 'ngRoute' ]);

	app.controller('apiViewerCtrl', function($scope, $http) {

		$http.get("http://localhost:8767/apis").success(function(response) {
			$scope.apis = response;
		});

		$scope.pingInfos = new Map();
		$scope.gitInfos = new Map();

		// ping individual service - assuming they have ping end point
		// implemented
		$scope.getPingInfo = function(url, id) {

			$http.get(url + "/ping").success(function(response) {
				$scope.pingInfos.set(id, response);
			});
		}

		$scope.getGitInfo = function(gitRepoName) {

			if (null == $scope.gitInfos.get(gitRepoName)) {

				$http.get("http://localhost:8767/git/" + gitRepoName).success(function(response) {
					$scope.gitInfos.set(gitRepoName, response);
				});
			}
		}
	});

})();