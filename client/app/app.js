// Our main angular module
var app = angular.module('app', []);

app.controller('AppController', function($scope, $http) {
  $scope.showHeader = false;
  
  // Storage for our todos! So our girlfriends dont yell at us
  $scope.todos = [];

  $scope.addTodo = function() {
    $scope.showHeader = !$scope.showHeader;
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };


  $scope.deleteTodo = function(index) {
    // $scope.todos.splice(index, 1);
  };

  $scope.getData = function() {
    $http.get('http://www.reddit.com/.json').then(function(result) {
      console.log(result.data);
      $scope.todos = result.data.data.children
    });
  }

});



// CRUD
// create
// read
// update
// delete
