@pinterest.controller 'SignupCtrl', ['$scope', '$location', 'Auth', ($scope, $location, Auth) ->
  # Notice how this controller body is empty
  $scope.foo = 'signup'

  $scope.register = ->
    credentials =
      email: $scope.email
      password: $scope.password
      password_confirmation: $scope.password_confirmation
    config = headers: 'X-HTTP-Method-Override': 'POST'

    Auth.register(credentials, config).then ((registeredUser) ->
      $location.path('/')
      return
    ), (error) ->
      alert("error")
      console.log(error)
      return

]