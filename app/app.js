var app = angular.module('Calculator', []);

app.service('MathsService',function(){
    this.add = function(num1,num2){
        return num1+num2;
    }
    this.subtract = function(num1,num2){
        return num1-num2;
    }
    this.multiply = function(num1,num2){
        return num1*num2;
    }
    this.divide = function(num1,num2){
        return num1/num2;
    }
})

app.controller('calculatorsController',function($scope,MathsService){
    $scope.addition = function(){
        $scope.answer = MathsService.add($scope.num1,$scope.num2);
    }
    $scope.subtraction = function(){
        $scope.answer = MathsService.subtract($scope.num1,$scope.num2);
    }
    $scope.multiplication = function(){
        $scope.answer = MathsService.multiply($scope.num1,$scope.num2);
    }
    $scope.division = function(){
        $scope.answer = MathsService.divide($scope.num1,$scope.num2);
    }
})