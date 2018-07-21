var myApp = angular.module('myApp', []);


myApp.factory('DataManager', function () {
    var _data = { FirstName: '',LastName:'' };

    return {
        getData: function () {
            return _data;
        },
        getFullName: function () {
            return _data.FirstName+" "+_data.LastName;
        }
    };
});

myApp.controller('FirstCtrl', function ($scope, DataManager) {
    $scope.Data = DataManager.getData();
});

myApp.controller('SecondCtrl', function ($scope, DataManager) {
    $scope.Data = DataManager.getData();
});
myApp.controller('ThirdCtrl', function ($scope, DataManager) {
    $scope.Data = DataManager.getData();
    $scope.getName = function(){
        return DataManager.getFullName();
    };
});