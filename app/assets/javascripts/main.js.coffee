@pinterest = angular.module('pinterest', ['Devise'])

@pinterest.config(['$routeProvider', ($routeProvider) ->
  $routeProvider.
    when('/sign_in', {
      templateUrl: '../templates/devise/sign_in.html',
      controller: 'SigninCtrl'
    }).when('/sign_up', {
      templateUrl: '../templates/devise/sign_up.html',
      controller: 'SignupCtrl'
    }).
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    })
])
