'use strict';

 angular.module('todoApp').config(function($routeProvider, $httpProvider){
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
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
