angular.module('mainApp')
.controller('tabCtrl', ['$scope', '$location', function($location, $scope){

    
    $scope.isActive = function(location){
        return location = $location.path();
    };
    
}]);