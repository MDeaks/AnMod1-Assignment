(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.LunchItems = "";
  $scope.LunchMessage="";
  
  $scope.CheckItems = function(){
  
    var items = $scope.LunchItems.split(',');
    if ( $scope.LunchItems===""){
      $scope.LunchMessage="Please enter data first";
    }   
    else if(items.length >=1 && items.length<=3){
      $scope.LunchMessage="Enjoy!";
    }
    else {
      $scope.LunchMessage="Too much!";
    }    

    console.log(items.length);
  };
 
}
})();
