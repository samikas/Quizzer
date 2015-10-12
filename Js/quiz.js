
function clearField() {
    document.getElementById('teamInput').value = '';
}
function sendTeam(){
    var teamName = document.getElementById('teamInput').value;
    console.log(teamName);
}

var quizApp = angular.module("trailerFreakApp", ["ngRoute"]);

quizApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/team, {
                templateUrl: '/Pages/team.html'

            }).
            when('/master', {
                templateUrl: '/Pages/master.html'
            }).
            when('/score', {
                templateUrl: '/Pages/score.html'
            }).
            otherwise({
                redirectTo: '/team'
            });
    }]);
