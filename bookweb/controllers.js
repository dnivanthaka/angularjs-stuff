app.controller('HeaderController' , function($scope, $location){
    $scope.app = {};
    $scope.app.title   = 'Book Store';
    $scope.app.tagLine = 'Books for All';
    
    $scope.nav = {};
    $scope.nav.isActive = function(path){
        if(path === $location.path()){
            return true;
        }
        
        return false;
    }
});

app.factory('BookService', function(){
    var books = [{"book_id":"118889679","title":"Young Frankenstein","author_lf":"","author_fl":"","author_code":"","ISBN":"","ISBN_cleaned":"","publicationdate":"?","entry_stamp":"1433355834","entry_date":"Jun 3, 2015","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/I\/51KDmdUemhL._SCLZZZZZZZ_.jpg","tags":["bettercover"], "price":"100"},
    {"book_id":"118889688","title":"Young Frankenstein","author_lf":"Wilder, Gene","author_fl":"Gene Wilder","author_code":"wildergene","ISBN":"","ISBN_cleaned":"","publicationdate":"2006","entry_stamp":"1433355867","entry_date":"Jun 3, 2015","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/P\/B000G6BLWE.01._SCLZZZZZZZ_.jpg","tags":["bettercover"], "price":"150"},
    {"book_id":"131387846","title":"Young Catholic America : emerging adults in, out of, and gone from the church","author_lf":"Smith, Christian","author_fl":"Christian Smith","author_code":"smithchristian","ISBN":"9780199341078","ISBN_cleaned":"0199341079","publicationdate":"2014","entry_stamp":"1466374527","entry_date":"Jun 19, 2016","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/P\/0199341079.01._SCLZZZZZZZ_.jpg", "price":"200"},
    {"book_id":"124471069","title":"Zeus : a journey through Greece in the footsteps of a god","author_lf":"Stone, Tom","author_fl":"Tom Stone","author_code":"stonetom","ISBN":"9781582345185","ISBN_cleaned":"158234518X","publicationdate":"2008","entry_stamp":"1450993117","entry_date":"Dec 24, 2015","copies":"1","rating":0,"language_main":"eng","language_secondary":"","language_original":"","hasreview":"0","dateacquired_stamp":"0","dateacquired_date":"Dec 31, 1969","cover":"http:\/\/ecx.images-amazon.com\/images\/P\/158234518X.01._SCLZZZZZZZ_.jpg", "price":"250"}];
    
   return {
    getBooks: function(){
        return books;
    }
   }
});

app.factory('CartService', function(){
    var cart = [];
    
    return {
        addToCart: function(book){
            cart.push(book);
        },
        getCart: function(){
            return cart;
        }
        
    }
});

app.controller('MyBookListController' , function($scope, BookService, CartService){
    console.log("xxx");
    
    $scope.books = BookService.getBooks();
    
    $scope.addToCart = function(book){
        console.log("Adding a book to cart");
        CartService.addToCart(book);
    }
});

app.controller("MyCartController", function($scope, CartService){
    $scope.cart = CartService.getCart();
    
    console.log("yyy");
});
