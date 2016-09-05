'use strict';

/**
 * @ngdoc function
 * @name wifindBarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wifindBarApp
 */
angular.module('wifindBarApp')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {

    $scope.filtros = [
      {id: 1, descripcion: 'WiFi'}, {id: 2, descripcion: 'Enchufes'}
    ]

    $scope.map = { center: { latitude: -34.6077801, longitude: -58.3909607 }, zoom: 13 };

  });
