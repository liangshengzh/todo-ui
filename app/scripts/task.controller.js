'use strict';

function taskCtrl($scope, taskApi){
  $scope.tasks = taskApi.list();
  $scope.newTask = '';
  $scope.add = function(){
    if(!$scope.newTask.trim()){
      return;
    }
    var task = {
      name: $scope.newTask,
      description: '',
      done: false
    }
    taskApi.add(task).$promise.then(function(){
      $scope.tasks = taskApi.list();
    });
  }

  $scope.update = function(task){
    task.$update();
  }

};

angular.module('todoApp').controller('taskCtrl',taskCtrl);
