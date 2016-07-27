(function() {
	var app = angular.module('appViewerAdmin', [ 'ngRoute' ]);

	app.controller('appViewerAdminCtrl', function($scope, $http) {

		// Initialize the admin page.
		$scope.init = function() {

			$scope.addStandAloneAPIData = {};
			$scope.getStandAloneAPIs();

		}

		// Function to add standalone apis.
		$scope.addStandAloneAPI = function() {
			$http.post("http://localhost:8767/standalone-api",
					$scope.addStandAloneAPIData).success(function(data) {
				$scope.resetAddStandAloneAPIData();
				$scope.getStandAloneAPIs();
			});
		}

		$scope.resetAddStandAloneAPIData = function() {
			$scope.addStandAloneAPIData = {};
		}

		// Function to get all StandAlone APIs
		$scope.getStandAloneAPIs = function() {
			$http.get("http://localhost:8767/standalone-api").success(
					function(response) {

						$scope.standaloneAPIs = response;

					});
		}
	});

})();