@pinterest.controller 'SigninCtrl', ['$scope', 'Auth', '$location', ($scope, Auth, $location) ->

  $scope.foo = 'bar'

  $scope.login = ->
    credentials =
      email: $scope.email
      password: $scope.password
    config = headers: 'X-HTTP-Method-Override': 'POST'
    Auth.login(credentials, config).then ((user) ->
      $location.path("/")
      return
    ), (error) ->
      alert("Authentication failed...")
      return
]