'use strict';

 angular.module('todoApp').config(function($routeProvider){
  $routeProvider.
    when('/task',{
      templateUrl: 'templates/task.html',
      controller: 'taskCtrl'
    }).otherwise({
      redirectTo: '/task'
    });
});

angular.module('todoApp').constant("config",{
  apiUrl: 'http://localhost:8080'
});
