var app = angular.module("kyleSite", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider.when("/projects", {
        templateUrl: "/projects.html" 
    });

    $routeProvider.when("/contact", {
        templateUrl: "/contact.html" 
    });

    $routeProvider.when("/home", {
        templateUrl: "/main.html" 
    });

    $routeProvider.when("/project1", {
        templateUrl: "/project1.html"
    });

    $routeProvider.when("/project2", {
        templateUrl: "/project2.html"
    });

    $routeProvider.otherwise({
        templateUrl: "/main.html" 
    });
});

app.controller("mainCtrl", ($scope) => {
    $scope.currentPage = "Home";

    $scope.setPage = (page) => {
        $scope.currentPage = page;
    }
    $scope.setActive = (page) => {
        return $scope.currentPage == page ? "active" : "";
    }
});