var app = angular.module("myApp", ["ngRoute"]);

app.controller('HeaderController' , function($scope){
    $scope.app = {};
    $scope.app.title   = 'Book Store';
    $scope.app.tagLine = 'Books for All';
});

app.config(function($routeProvider){
    $routeProvider
        .when("/books", {
            templateUrl: "partials/books-list.html",
            controller: "MyBookListController"
        })
        .when("/cart", {
            templateUrl: "partials/cart-list.html"
        })
        .otherwise({
            redirectTo: "/books"
        });
});

app.controller('MyBookListController' , function($scope){
    console.log("xxx");
    
    $scope.books = [{"book_id":"118889679","title":"Young Frankenstein","author_lf":"","author_fl":"","author_code":"","ISBN":"","ISBN_cleaned":"","publicationdate":"?","entry_stamp":"1433355834","entry_date":"Jun 3, 2015","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/I\/51KDmdUemhL._SCLZZZZZZZ_.jpg","tags":["bettercover"]},
    {"book_id":"118889688","title":"Young Frankenstein","author_lf":"Wilder, Gene","author_fl":"Gene Wilder","author_code":"wildergene","ISBN":"","ISBN_cleaned":"","publicationdate":"2006","entry_stamp":"1433355867","entry_date":"Jun 3, 2015","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/P\/B000G6BLWE.01._SCLZZZZZZZ_.jpg","tags":["bettercover"]},
    {"book_id":"131387846","title":"Young Catholic America : emerging adults in, out of, and gone from the church","author_lf":"Smith, Christian","author_fl":"Christian Smith","author_code":"smithchristian","ISBN":"9780199341078","ISBN_cleaned":"0199341079","publicationdate":"2014","entry_stamp":"1466374527","entry_date":"Jun 19, 2016","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/P\/0199341079.01._SCLZZZZZZZ_.jpg"},
    {"book_id":"124471069","title":"Zeus : a journey through Greece in the footsteps of a god","author_lf":"Stone, Tom","author_fl":"Tom Stone","author_code":"stonetom","ISBN":"9781582345185","ISBN_cleaned":"158234518X","publicationdate":"2008","entry_stamp":"1450993117","entry_date":"Dec 24, 2015","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/P\/158234518X.01._SCLZZZZZZZ_.jpg"}];
});
