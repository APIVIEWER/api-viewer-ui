(function() {
	var app = angular.module('appViewerAdmin', [ 'ngRoute' ]);
	
	app.controller('appViewerAdminCtrl', function($scope, $http) {
		
		//Initialize the admin page.
		$scope.init = function() {
			
			$scope.addEurekaData = {};
			$scope.addStandAloneAPIData = {};
			$scope.getStandAloneAPIs();
			$scope.getEurekaServers();
		}
		
		//Function to add a new Eureka Server.
		$scope.addEurekaServer = function() {			
			//console.log($scope.addEurekaData);
			$http.post(
						"http://localhost:8767/eureka-servers",
						$scope.addEurekaData
					)
					.success(function(data) {
						$scope.resetAddEurekaForm();
						$scope.getEurekaServers();
					});
		}
		
		//Function to add standalone apis.
		$scope.addStandAloneAPI = function() {
			$http.post("http://localhost:8767/standalone-api", $scope.addStandAloneAPIData).success(function(data) {
				$scope.resetAddStandAloneAPIData();
				$scope.getStandAloneAPIs();
			});
		}

		$scope.resetAddStandAloneAPIData = function() {
			$scope.addStandAloneAPIData = {};
		}
		
		$scope.resetAddEurekaForm = function() {
			$scope.addEurekaData= {};
		}
		
		//Function to get all the Eureka Servers.
		$scope.getEurekaServers = function() {
			$http.get("http://localhost:8767/eureka-servers").success(function(response) {
				//console.log($scope.eurekaServers);
				$scope.eurekaServers = response});
		}

		//Function to get all StandAlone APIs
		$scope.getStandAloneAPIs = function() {
			$http.get("http://localhost:8767/standalone-api").success(function(response) {

				$scope.standaloneAPIs = response;

			});
		}
	});
	
})();