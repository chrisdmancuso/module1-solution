(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchList = "";
      $scope.curatedList = "";
      $scope.count = 0;
      $scope.message = "";

      $scope.splitList = function() {
          var list = $scope.lunchList.split(',')
          $scope.curatedList = list;
          $scope.count = list.length;

          if ($scope.curatedList[0] == '' && $scope.count == 1) {
              $scope.count = 0;
          }
      };

      $scope.checkLunch = function() {
          if ($scope.count == 0 || $scope.curatedList[0] == '') {
            $scope.message = "Please enter data first";
          }
          else if ($scope.count > 0 && $scope.count <= 3) {
            $scope.message = "Enjoy";

          } else {
            $scope.message = "Too much!";
          }
      };
    }
    
    })();