
function clearField() {
    //document.getElementById('teamInput').value = '';
}
function sendTeam(){
    var teamName = document.getElementById('teamInput').value;
    console.log("teamName");
}

var quizApp = angular.module("quizApp", ["ngRoute"]);

quizApp.controller("quizController",function($scope){
    $scope.teamTest="";
});

quizApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/team', {
                templateUrl: 'Pages/team.html',
                controller: 'quizController'

            }).
            when('/master', {
                templateUrl: 'Pages/master.html',
                controller: 'quizController'
            }).
            when('/score', {
                templateUrl: 'Pages/score.html',
                controller: 'quizController'
            }).
            otherwise({
                redirectTo: 'team'
            });
    }]);
