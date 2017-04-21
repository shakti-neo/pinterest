@pinterest.controller 'HomeCtrl', ['$scope', '$route', 'Auth', ($scope, $route, Auth) ->
  $scope.foo = 'bar'
  $scope.has_logedin_user = false

  Auth.currentUser().then ((user) ->
    $scope.has_logedin_user = true
    return
  ), (error) ->
    # unauthenticated error
    return

  $scope.logout = ->
    config = headers: 'X-HTTP-Method-Override': 'DELETE'

    Auth.logout(config).then ((oldUser) ->
      alert(oldUser.email + "you're signed out now.");
      $route.reload();
      return
    ), (error) ->
      # An error occurred logging out.
      return
]