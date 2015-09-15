app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.steaks = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.sides = [
    {
      name: 'margherita',
      description: 'Marinara sauce, mozzarella, fresh basil.',
      price: 6.95
    },
    {
      name: 'pepperoni',
      description: 'Pepperoni, marinara sauce, mozzarella, fresh oregano.',
      price: 7.95
    },
    {
      name: 'rustica',
      description: 'Marinara sauce, kalamata olives, roasted garlic, fresh oregano.',
      price: 8.95
    }
  ];

  $scope.drinks = [
    {
      name: 'breadsticks',
      description: 'Served with marinara sauce.',
      price: 4.95
    },
    {
      name: 'soup of the day',
      description: 'take a chance',
      price: 4.95
    },
    {
      name: 'buffalo wings',
      description: 'Feel the power of wings.',
      price: 6.95
    }
  ];

}]);