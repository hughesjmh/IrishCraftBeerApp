angular.module('mainApp', [
    'ui.router', 'ngAnimate', 'ngCookies'
]).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
    
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('beer-list',{
                url: '/beer-list',
                templateUrl: 'templates/beerList.html',
                controller: 'beerCtrl'
            })
            .state('beer-blog', {
                url: '/beer-blog',
                templateUrl: 'templates/beerBlog.html',
                controller: 'blogCtrl'
            })
            .state('beer-list.id', {
                url: '/{id}',
                templateUrl: 'templates/beerDetail.html',
                controller: 'beerDetailCtrl',
                controllerAs: 'detail'
            })
}]);