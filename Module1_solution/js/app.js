(function() {
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', 
        function($scope) {
            $scope.items = ''; 
            $scope.message = '';
            
            $scope.checkItems = function() {
                let listItems = $scope.items.split(',');

                    let filtered = listItems.filter(function (el) {
                        return el.trim() != '';
                      });

                if ( filtered.length == 0) {
                    $scope.message = 'Please enter data first';
                    $scope.txtClass = 'border-red';
                    $scope.messageClass = 'red';
                }
                else {                    
                    if (filtered.length < 4) {
                        $scope.message = 'Enjoy!';
                    }   
                    else {
                        $scope.message = 'Too much!';
                    }

                    $scope.txtClass = 'border-green';
                    $scope.messageClass = 'green';
                }
            };
        }
]);
})();