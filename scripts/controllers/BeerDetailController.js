angular.module('mainApp')
.controller('beerDetailCtrl', 
            ['$scope', '$stateParams', function($scope, $stateParams){

                $scope.id = $stateParams.id;
                
                $('.beer-feature').hide().fadeIn(800);
                             
}]);