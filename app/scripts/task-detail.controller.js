function TaskDetailController($scope){
  $scope.taskId = $routeParams.taskId;
}

angular.module('todoApp').controller('TaskDetailController',TaskDetailController);
