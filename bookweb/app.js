var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/books", {
            templateUrl: "partials/books-list.html",
            controller: "MyBookListController"
        })
        .when("/cart", {
            templateUrl: "partials/cart-list.html",
            controller: "MyCartController"
        })
        .otherwise({
            redirectTo: "/books"
        });
});
