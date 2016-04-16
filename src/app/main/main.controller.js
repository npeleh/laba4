(function() {
  'use strict';

  angular
    .module('lab4')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.flowers = [
      {
        image:'assets/flowers/1.jpg',
        price: 225.75,
        is_bouth: false
      },
      {
        image:'assets/flowers/2.png',
        price: 125.75,
        is_bouth: false
      },
      {
        image:'assets/flowers/3.jpg',
        price: 2225.5,
        is_bouth: false
      },
      {
        image:'assets/flowers/4.jpg',
        price: 4342.2,
        is_bouth: false
      },
      {
        image:'assets/flowers/5.jpg',
        price: 453.22,
        is_bouth: false
      },
      {
        image:'assets/flowers/6.jpg',
        price: 688.6,
        is_bouth: false
      }
    ];
    vm.sum_price = 0;

    vm.buy = function(id){
      vm.sum_price = vm.sum_price + vm.flowers[id].price;
      vm.flowers[id].is_bouth = true;
    }
  }
})();
