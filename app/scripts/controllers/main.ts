/// <reference path="../app.ts" />

'use strict';
import {Filtro, FiltroNull, FiltroDecorator} from "../model/Filtro";
import {CriterioDeAceptacion, CriterioDeAceptacionDistanciaMaxima} from "../model/CriterioDeAceptacion";
import {Ubicacion} from "../model/Ubicacion";
import {APIWiFindBar} from "../model/APIWiFindBar";
import {Bar} from "../model/Bar";
import {GuiaDeBares} from "../model/GuiaDeBares";
import {GuiaDetalleDeBares} from "../model/GuiaDetalleDeBares";
import {DetalleDeBar} from "../model/DetalleDeBar";
import {DibujadorEnMapa} from "../model/DibujadorEnMapa";

module wifindBarApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings:any[];
  }

  export class MainCtrl {

    private DistanciaUtils;
    // private secuenciaId:number = 0;
    private bares;
    private ubicacionOrigen;
    public marker;
    private backUpMarcadores = [];
    public marcadores = [];
    public markerControl = {};
    public options = {
      scrollwheel: false
    };
    public maxDistanciaMetros;
    public filtros = [{id: 1, descripcion: 'WiFi'}, {id: 2, descripcion: 'Enchufes'}];
    public map = {
      center: {latitude: -34.6277801, longitude: -58.3909607},
      control: {},
      zoom: 13,
      bounds: {},
      events: {
        click: this.clickMapFunction
      }
    };
    private $parent;

    private clickMapFunction(map, eventName, args) {
      var e = args[0];
      this.$parent.vm.setMarcadorDeUbicacion(e.latLng.lat(), e.latLng.lng());
    }

    private setMarcadorDeUbicacion(latitud, longitud):void {
      this.ubicacionOrigen = new Ubicacion(latitud, longitud);
      this.marker = undefined;
      setTimeout(() => {
        this.marker = {
          id: 0,
          control: {},
          coords: {
            latitude: this.ubicacionOrigen.getLatitud(),
            longitude: this.ubicacionOrigen.getLongittud()
          },
          options: {visible: true, draggable: true},
          events: {
            dragend: function (marker, eventName, args) {
              var lat = marker.getPosition().lat();
              var lon = marker.getPosition().lng();
              this.marker.options = {
                draggable: true,
                //             labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                labelAnchor: "100 0",
                labelClass: "marker-labels"
              };
            }
          }
        };
        this.$scope.$apply();
      }, 0);
    }

    constructor(private $scope:IMainScope, $timeout, uiGmapGoogleMapApi, DistanciaUtils, GuiaDeBaresDeBuenosAires) {
      var vm = this;
      var delta = 0.05;

      this.$scope = $scope;

      vm.markerControl = {};
      vm.options = {
        scrollwheel: false
      };

      vm.marcadores = [];

      vm.setMarcadorDeUbicacion(this.map.center.latitude, this.map.center.longitude);

      vm.cargarGuiaDeBaresRandom();
      vm.cargarGuiaDetalleDeBaresRandom();
    }


    private estaCalificadoRandom(){
      let randomFrom1To3 = Math.floor(Math.random()*2) +1;
      return (randomFrom1To3!==1?false:true)
    }

    private cargarGuiaDeBaresRandom() {
      var latCentro:number = -34.6277801;
      var longCentro:number = -58.3909607;
      var delta:number = 0.05;

      var guiaDeBares = GuiaDeBares.getInstance();
      for (var i = 1; i < 200; i++) {
        let idKey:number = i;
        let latitud = (latCentro - delta) + (Math.random() * (2 * delta));
        let longitud = (longCentro - delta) + (Math.random() * (2 * delta));

        let bar:Bar = new Bar("Bar " + idKey, new Ubicacion(latitud, longitud));
        guiaDeBares.addBar(bar);
      }
    };

    private cargarGuiaDetalleDeBaresRandom() {
      var guiaDetalleDeBares = GuiaDetalleDeBares.getInstance();
      var guiaDeBares = GuiaDeBares.getInstance();
      for (var bar of guiaDeBares.getBares()){
        let detalleDeBar:DetalleDeBar = new DetalleDeBar(bar);

        if (this.estaCalificadoRandom()){
          let calificacionEnchufes = Math.floor(Math.random() * 5) + 1;
          detalleDeBar.setCalificacionProcesadaEnchufes(calificacionEnchufes);
        }
        if (this.estaCalificadoRandom()){
          let calificacionWifi = Math.floor(Math.random() * 5) + 1;
          detalleDeBar.setCalificacionProcesadaWifi(calificacionWifi);
        }
      }
    };

    public buscarBaresCercanos():void {
      var filtro:Filtro = new FiltroNull();
      var criterioMaxDistancia:CriterioDeAceptacion =
        new CriterioDeAceptacionDistanciaMaxima(this.maxDistanciaMetros, this.ubicacionOrigen);
      filtro = new FiltroDecorator(filtro, criterioMaxDistancia);

      var api = APIWiFindBar;
      var baresEncontrados:Bar[] = api.buscar(filtro, this);
    }


  }
}

angular.module('wifindBarApp')
  .controller('MainCtrl', wifindBarApp.MainCtrl);
