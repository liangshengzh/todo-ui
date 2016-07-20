'use strict';

function TaskListController($scope, TaskListService){
  $scope.tasks = [
    {
      id: 1,
      name: 'Scrum Meeting',
      description: 'KKKKKKKKKK',
      done: true
    }
  ];
};

angular.module('todoApp').controller('TaskListController',TaskListController);
