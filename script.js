var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  
  //ürünler - products
  $scope.items = [
    {
      id: 1,
      name: 'Colored Pencil with 168 Pieces',
      image: 'images/1.jpg',
      price: 499
    },
    {
      id: 2,
      name: '12Pcs Faber Castell 9000 Graphite Pencil',
      image:'images/2.jpg',
      price: 451
    },
    {
      id: 3,
      name: 'Stretch Canvas Panel Board',
      image:'images/3.jpg',
      price: 470
    },
    {
      id: 4,
      name: '15 pcs Watercolor Paint Brush Set',
      image:'images/4.jpg',
      price: 200
    },
    {
      id: 5,
      name: '100Pcs Vellum Board',
      image:'images/5.png',
      price: 490
    },
    {
      id: 6,
      name: 'JOY Acrylic paints 12 Colors',
      image: 'images/6.jpg',
      price: 113
    }
  ];
  
  //sepetim - my shopping cart
  $scope.myItems = [];

  //sepete ekle - add to cart
  $scope.addItem = function(newItem) {
    if($scope.myItems.length == 0) {
      newItem.count = 1;
      $scope.myItems.push(newItem);
    }else {
      var repeat = false;
      for( var i = 0; i < $scope.myItems.length; i++ ) {
        if($scope.myItems[i].id == newItem.id) {
          $scope.myItems[i].count++;
          repeat = true;
        }
      }
      if(!repeat) {
        newItem.count = 1;
        $scope.myItems.push(newItem);
      }
    }
    updatePrice();
  };
  
  //fiyatı güncelle (totalPrice) - update price
    var updatePrice = function() {
    var totalPrice = 0;
    for( var i = 0; i < $scope.myItems.length; i++ ) {
      totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].price);
    }
    $scope.totalPrice = totalPrice;
  };
  
  //sepeti boşalt - empty your cart
 // $scope.remove_myItems = function(newItem){
         // if(myItem){
          //  $scope.myItems.splice($scope.myItems.indexOf(myItems), 1);
         //   $scope.total -= myItem.price;
        //  }
       // }

    $scope.remove = function(myItems) {
    $scope.myItems.splice(myItems, 1);
    $scope.totalPrice -= myItems.price;

  }
  
});

app.filter('reverse', function() {
  return function(items) {
    var x = items.slice().reverse();
    if( items.length > 1 ) {
      angular.element('#ok tr').css('background','#fff');
      angular.element('#ok tr').filter(':first').css('background','lightyellow');
      setTimeout(function() {
        angular.element('#ok tr') .filter(':first').css('background','#fff');
      }, 500);
    }
    return x;
  };
});