'use strict';

var mainModule = angular.module('angularSdkApp');

mainModule.factory('echoSearchService', function($http) {
  return {
    getStream: function() {
      // TODO: Obviously we would want to parameterize this
      var query = 'http://api.echoenabled.com/v1/search?q=childrenof%3Ahttp%3A%2F%2Faboutecho.com%2Ftweets%2Fexec+itemsPerPage%3A10+state%3AUntouched%2CModeratorApproved+children%3A2+state%3AUntouched%2CModeratorApproved&appkey=echo.jssdk.demo.aboutecho.com';
      return $http.get(query).then(function(result) {
        return result.data;
      });
    }
  };
});

mainModule.controller('MainCtrl', function ($scope, echoSearchService) {
  $scope.stream = echoSearchService.getStream().then(function(stream) {
    $scope.stream = stream;
  });
});
