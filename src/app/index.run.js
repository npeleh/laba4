(function() {
  'use strict';

  angular
    .module('lab4')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
