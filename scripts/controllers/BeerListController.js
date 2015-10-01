angular.module('mainApp')
.controller('beerCtrl', [ '$scope', '$http', function($scope, $http){
    
        $('.beersDiv').hide().fadeIn(800);
    
        $http.get('/beers-list.json').success(function(response){
            console.log('success!');
            //console.log(response);
            $scope.beers = response;
        });
 
}]);