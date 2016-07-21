function taskApi(config, $resource){
  var url = config.apiUrl + '/task';
  var resource = $resource(url, {},{
    list: {
      method: 'GET',
      isArray: true
    },
    add: {
      method: 'POST'
    },
    update: {
      method: 'PUT',
      params: {
        id: '@id'
      }
    },
    get: {
      method: 'GET',
      url: 'task/:id',
      params: {
        id: '@id'
      }
    },
    delete: {
      method: 'DELETE',
      url: 'task/:id',
      params: {
        id: '@id'
      }
    }
  });

  return resource;
}
angular.module('todoApp').factory('taskApi',['config','$resource', taskApi]);
