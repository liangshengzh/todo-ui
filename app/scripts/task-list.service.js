function TaskListService($resource){
  return $resource('/task', {},{
    query:{
      method: 'GET'
    },
    isArray: true
  });
};
angular.module('todoApp').factory('TaskListService',['$resource', TaskListService]);
