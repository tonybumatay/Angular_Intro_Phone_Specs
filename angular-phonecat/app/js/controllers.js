'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query(function(){
      $scope.counter = 0;
      for($scope.i = 0; $scope.i < ($scope.phones).length; $scope.i++){
        $scope.phone = Phone.get({phoneId: $scope.phones[$scope.i].id}, function(phone) {
        $scope.phones[$scope.counter].storage = parseInt(phone.storage.flash);
        $scope.phones[$scope.counter].standBy = parseInt(phone.battery.standbyTime);
        $scope.phones[$scope.counter].talk = parseInt(phone.battery.talkTime);
        $scope.phones[$scope.counter].weight = parseInt(phone.sizeAndWeight.weight);

        $scope.counter++;
        });
      }
    }
    );
    $scope.orderProp = 'age';
  }]);

//original
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


//first phone
phonecatControllers.controller('PhoneCompareCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone1 = Phone.get({phoneId: $routeParams.phone1Id}, function(phone1) {
      $scope.mainImageUrl = phone1.images[0];});
    $scope.phone2 = Phone.get({phoneId: $routeParams.phone2Id}, function(phone2) {
      $scope.mainImageUrl = phone2.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;

    }
  }]);




