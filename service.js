angular.module('userProfiles').service('mainService', function($http) {
 this.getUsers = function() {
    return $http({
        method: 'Get' ,
        url : 'https://reqres.in/api/users?page=1'
  });
 }

});
