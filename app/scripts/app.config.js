'use strict';

 angular.module('todoApp').config(function($routeProvider){
  $routeProvider.
    when('/task',{
      templateUrl: 'templates/task/task-list.html',
      controller: 'TaskListController'
    }).when('/task/:taskId',{
      templateUrl: 'templates/task/task-detail.html',
      controller: 'TaskDetailController'
    }).otherwise({
      redirectTo: '/task'
    });
});
