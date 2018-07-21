var myApp = angular.module('myApp', []);


myApp.service('DataManager', function () {
    var _data = {FirstName: '',LastName:''};
    this.getFullName = function(){
        return _data.FirstName + " " + _data.LastName;
    };
    this.data = _data;
});

myApp.controller('FirstCtrl', function ($scope, DataManager) {
    $scope.Data = DataManager.data;
});

myApp.controller('SecondCtrl', function ($scope, DataManager) {
    $scope.Data = DataManager.data;
});
myApp.controller('ThirdCtrl', function ($scope, DataManager) {
    $scope.Data = DataManager.data;
    $scope.getName = function(){
        return DataManager.getFullName();
    };
});