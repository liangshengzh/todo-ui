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
    taskApi.add(task);
  }

};

angular.module('todoApp').controller('taskCtrl',taskCtrl);
