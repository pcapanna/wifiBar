/// <reference path="../app.ts" />

module wifindBarApp {
  export interface IMainScope extends ng.IScope {
  }

  export class MainCtrl {

    private guiaDeBares:GuiaDeBares;
    private guiaDeDetalleDeBares:GuiaDetalleDeBares;
    private api:APIWiFindBar;

    private ubicacionOrigen:Ubicacion;
    public marcadores = [];
    public maxDistanciaMetros = 1000;
    public filtros = [{id: 1, descripcion: 'WiFi'}, {id: 2, descripcion: 'Enchufes'}];
    public filtrosSeleccionados = [];
    public minEstrellasEnchufes = 1;
    public maxEstrellasEnchufes = 5;
    public minEstrellasWifi = 1;
    public maxEstrellasWifi = 5;

    private $parent;
    public marker;
    public map = {
      center: {latitude: -34.6277801, longitude: -58.3909607},
      control: {},
      zoom: 13,
      bounds: {},
      events: {
        click: this.clickMapFunction
      }
    };

    constructor(private $scope:IMainScope, uiGmapGoogleMapApi) {
      this.$scope = $scope;
      this.$parent = $scope.$parent;

      this.guiaDeBares = new GuiaDeBares([]);
      this.guiaDeDetalleDeBares = new GuiaDetalleDeBares([]);

      var dibujadorEnMapa = new DibujadorEnMapaGoogleMaps();

      this.cargarGuiaDeBaresRandom();
      this.cargarGuiaDetalleDeBaresRandom();

      this.api = new APIWiFindBar(this.guiaDeBares, this.guiaDeDetalleDeBares, dibujadorEnMapa);
    }

    public buscarBaresCercanos():void {

      var filtro:Filtro = new FiltroNull();
      var criterioMaxDistancia:CriterioDeAceptacion =
        new CriterioDeAceptacionDistanciaMaxima(this.maxDistanciaMetros, this.ubicacionOrigen);
      filtro = new FiltroDecorator(filtro, criterioMaxDistancia);

      for (var filtroSeleccionado of this.filtrosSeleccionados) {
        if (filtroSeleccionado.descripcion == "Enchufes") {
          var criterio:CriterioDeAceptacion =
            new CriterioDeAceptacionEstrellasPorEnchufes(this.minEstrellasEnchufes, this.maxEstrellasEnchufes);
        } else {
          if (filtroSeleccionado.descripcion == "WiFi") {
            var criterio:CriterioDeAceptacion =
              new CriterioDeAceptacionEstrellasPorWifi(this.minEstrellasWifi, this.maxEstrellasWifi);
          }
        }
        filtro = new FiltroDecorator(filtro, criterio);
      }
      filtro = new FiltroDecorator(filtro, criterioMaxDistancia);

      var baresEncontrados:Bar[] = this.api.buscar(filtro, this);
    }

    private cargarGuiaDeBaresRandom() {
      var latCentro:number = -34.60005598135185;
      var longCentro:number = -58.45550537109375;
      var deltaLat:number = 0.07;
      var deltaLong:number = 0.12;

      for (var i = 1; i < 500; i++) {
        let idKey:number = i;
        let latitud = (latCentro - deltaLat) + (Math.random() * (2 * deltaLat));
        let longitud = (longCentro - deltaLong) + (Math.random() * (2 * deltaLong));

        let bar:Bar = new Bar("Bar " + idKey, new Ubicacion(latitud, longitud));
        this.guiaDeBares.addBar(bar);
      }
    };

    private cargarGuiaDetalleDeBaresRandom() {
      for (var bar of this.guiaDeBares.getBares()) {
        let detalleDeBar:DetalleDeBar = new DetalleDeBar(bar);

        if (this.estaCalificadoRandom()) {
          let calificacionEnchufes = Math.floor(Math.random() * 5) + 1;
          detalleDeBar.setCalificacionProcesadaEnchufes(calificacionEnchufes);
        }
        if (this.estaCalificadoRandom()) {
          let calificacionWifi = Math.floor(Math.random() * 5) + 1;
          detalleDeBar.setCalificacionProcesadaWifi(calificacionWifi);
        }
        this.guiaDeDetalleDeBares.addDetalle(detalleDeBar);
      }
    };

    private estaCalificadoRandom() {
      let randomFrom1To3 = Math.floor(Math.random() * 2) + 1;
      return (randomFrom1To3 !== 1 ? false : true)
    }

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
                labelAnchor: "100 0",
                labelClass: "marker-labels"
              };
            }
          }
        };
        this.$scope.$apply();
      }, 0);
    }
  }

  angular.module('wifindBarApp')
    .controller('MainCtrl', wifindBarApp.MainCtrl);
}
