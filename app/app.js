angular.module('app', ['firebase'])
  .controller('TestCtrl', function($scope, $firebase) {
    var messagesRef = new Firebase("https://fedex777.firebaseio.com/messages");
    $scope.messages = $firebase(messagesRef);
  })
