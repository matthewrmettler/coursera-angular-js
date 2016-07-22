'use strict';
angular.module('confusionApp').controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;

  $scope.dishes = menuFactory.getDishes();


  $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
  };

  $scope.select = function(setTab) {
    $scope.tab = setTab;

    if (setTab === 2) {
      $scope.filtText = "appetizer";
    }
    else if (setTab === 3) {
      $scope.filtText = "mains";
    }
    else if (setTab === 4) {
      $scope.filtText = "dessert";
    }
    else {
      $scope.filtText = "";
    }
  };

  this.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };
}]).controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                               agree:false, email:"" };
}]).controller('FeedbackController', ['$scope', function($scope) {

}]);
