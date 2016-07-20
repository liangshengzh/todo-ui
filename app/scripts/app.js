'use strict';

var todoApp = angular.module('todoApp',['ngRoute']);

todoApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/task',{
      templateUrl: '../task-list.html',
      controller: 'TaskListController'
    }).when('/task/:taskId',{
      templateUrl: '../task-detail.html',
      controller: 'TaskDetailController'
    }).otherwise({
      redirectTdo: '/task'
    });
}]);
todoApp.controller('TaskListController', ['$scope', function($scope){
    $scope.tasks = [
      {
        id: 1,
        name: 'Scrum Meeting',
        description: 'KKKKKKKKKK',
        done: false
      }
    ]
}]).controller('TaskDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.taskId = $routeParams.taskId;
}]);
