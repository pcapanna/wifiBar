'use strict';

/**
 * @ngdoc function
 * @name wifindBarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wifindBarApp
 */
angular.module('wifindBarApp')
  .controller('MainCtrl', function ($scope,$log,$timeout, uiGmapGoogleMapApi) {

    $scope.filtros = [
      {id: 1, descripcion: 'WiFi'}, {id: 2, descripcion: 'Enchufes'}
    ]

    var latCentro = -34.6277801, longCentro = -58.3909607, delta = 0.05;
    
//     $scope.ref = true;
    
    $scope.map = { 
      center: { latitude: latCentro, longitude: longCentro },
      zoom: 13,
      bounds: {},
      events:{
	click: function(map,eventName,args){
	  
	    var e = args[0];
	    
	    $scope.marker = {
	      id: 0,
	      coords: {
		latitude: e.latLng.lat(),
		longitude: e.latLng.lng()
	      },
	      options: { visible: true, draggable: true },
	      events: {
		dragend: function (marker, eventName, args) {
		  $log.log('marker dragend');
		  var lat = marker.getPosition().lat();
		  var lon = marker.getPosition().lng();
		  $log.log(lat);
		  $log.log(lon);

		  $scope.marker.options = {
		    draggable: true,
	//             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
		    labelAnchor: "100 0",
		    labelClass: "marker-labels"
		  };
		}
	      }
	    };
	    
	    $scope.$apply();
	}
      }
    };
    

    $scope.options = {
      scrollwheel: false
    };

      var createRandomMarker = function(i, bounds, idKey) {
	if (idKey == null) {
	  idKey = "id";
	}

	var latitude = (latCentro - delta) + (Math.random() * (2 * delta));
	var longitude = (longCentro - delta) + (Math.random() * (2 * delta))
	var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i,
	icon: '/images/bar2.png'
      };
      ret[idKey] = i;
      return ret;
    };
    $scope.randomMarkers = [];
    
    // Get the bounds from the map once it's loaded
    $scope.$watch('map.bounds', function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        for (var i = 0; i < 50; i++) {
          markers.push(createRandomMarker(i, $scope.map.bounds))
        }
        $scope.randomMarkers = markers;
      }
    }, true);






//     $scope.coordsUpdates = 0;
//     $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: latCentro,
        longitude: longCentro
      },
      options: { visible: false, draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
//             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    /*
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    $timeout(function () {
      $scope.marker.coords = {
        latitude: 42.1451,
        longitude: -100.6680
      };
      $scope.dynamicMoveCtr++;
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 43.1451,
          longitude: -102.6680
        };
        $scope.dynamicMoveCtr++;
      }, 2000);
    }, 1000);
*/
  });
