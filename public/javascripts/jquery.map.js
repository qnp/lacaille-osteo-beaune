(function ($, window, document, undefined) {
  'use strict';

  var louLat = 47.019409,
    louLong = 4.838309,
    centerLat = 47.020597,
    centerLong = louLong;

  var pinOn, pinOff;

  var $map;

  var addMarker = function (map, lat, lng, title, infos) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
      icon: pinOff,
      draggable: false,
      animation: google.maps.Animation.DROP,
      title: title,
      infowindow: new google.maps.InfoWindow({
        content: infos,
        maxWidth: 400,
      }),
      isOn: false,
      click: function () {
        if (this.isOn) this.off();
        else this.on();
      },
      on: function () {
        this.setIcon(pinOn);
        this.infowindow.open(this.map, this);
        this.isOn = true;
      },
      off: function () {
        this.setIcon(pinOff);
        this.infowindow.close();
        this.isOn = false;
      },
    });
    google.maps.event.addListener(marker, 'click', marker.click);
    google.maps.event.addListener(marker.infowindow, 'closeclick', function () {
      marker.off();
    });
  };

  window.initializeMap = function () {
    var zoom = 16;
    var MY_MAPTYPE_ID = 'mymaps';

    var anchor = new google.maps.Point(14.25, 39);
    var scaledSize = new google.maps.Size(28.5, 39);

    pinOn = {
      url: 'images/pin-louanne.svg',
      anchor: anchor,
      scaledSize: scaledSize,
    };

    pinOff = {
      url: 'images/pin-louanne.svg',
      anchor: anchor,
      scaledSize: scaledSize,
    };

    $map = $('#map');
    $(window).resize(function () {
      map.setCenter(new google.maps.LatLng(centerLat, centerLong));
    });

    var mapCanvas = $map.get(0);
    var mapOptions = {
      center: new google.maps.LatLng(centerLat, centerLong),
      zoom: zoom,
      scrollwheel: false,
      //mapTypeControlOptions: {
      //	mapTypeIds: [google.maps.MapTypeId.ROADMAP]
      //},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var map = (window.map = new google.maps.Map(mapCanvas, mapOptions));
    google.maps.event.addListenerOnce(map, 'idle', function () {
      addMarker(
        map,
        louLat,
        louLong,
        '',
        '<p><bm>Lou-Anne Lacaille<br/>Ostéopathe</bm><br/>18 rue Jacques de Molay<br/>21200 Beaune</p>'
      );
    });

    var styles = [
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          { hue: '#3377FF' },
          { saturation: -45 },
          { lightness: 1 },
          { visibility: 'on' },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
          { hue: '#3377FF' },
          { saturation: -90 },
          { lightness: 1 },
          { visibility: 'on' },
        ],
      },
    ];

    map.setOptions({ styles: styles });
  };

  var loadScript = function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyASaK-clogLoaU67q0TBrg7t2OPmGpkQKs&callback=initializeMap';
    document.body.appendChild(script);
  };

  $(document).ready(function () {
    loadScript();
  });
})(jQuery, window, document);
