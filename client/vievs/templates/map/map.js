Template.map.helpers({
  isLogin: function () {
    if(Meteor.userId()!==null)
      return true;
    return false;
  },
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(35.66919,139.7413805),
        zoom: 12
      };
    }
  }
});

Template.map.onRendered(function() {
  Session.set('venues', null);
});

Template.map.events({
  "submit #search-form": function (e, tmpl) {
    e.preventDefault();
    if(Meteor.userId()===null) {
      alert('Please, login!');
      return;
    }

    var user = Meteor.users.findOne({_id: Meteor.userId()});
    console.log(user.profile.name + '\n' + user._id);

    var searchRequest = e.target.searchBox.value || 'restaurant';
    e.target.searchBox.value = '';

    GoogleMaps.ready('map', function(map) {
      map = map.instance;
      var markers = [];
      var venues;

      findVenues();
      
      function findVenues() {
            
            
        var center = map.getCenter();

        var clientId = 'NBKDK5DHRTKZXLL3CXTUGSIDN0LBFSK4WX0TDHXKWXVOPQC2';
        var clientSecret = 'JSJOIIL5122PXX2DHD4VPIZPWUEAFVPCCYBTVCDLEUG3BLJB';
        var baseUrl = 'https://api.foursquare.com/v2/venues/search?';
        var endpoint = 'venues/search?';
        var coords = "&ll=" + center.lat() + "," + center.lng();
        var radius = "&radius=" + (findRadius() * 1000).toFixed();
        var query = "&query=" + searchRequest;
        var key = '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=' + '20140626';
        var url = baseUrl + key + coords + radius + query;

        $.get(url, function(result) {
          venues = result.response.venues;
          setMarkersOnMap();
        });
        Queries.insert({userName: user.profile.name, userId: user._id, lat: center.lat(), lng: center.lng(), rad: findRadius(), date: new Date()});
      }

      function setMarkersOnMap () {
        for (var i in venues) {
          var venue = venues[i];
          // place the a marker on the map
          markers[i] = new google.maps.Marker({
            position: new google.maps.LatLng(venue.location.lat, venue.location.lng),
            map: map
          });
        };
        Session.set('venues', venues);
      }


      function findRadius() {
          bounds = map.getBounds();
          center = bounds.getCenter();
          cornerOfScreen = bounds.getNorthEast();

          var r = 3963.0;

          var lat1 = center.lat() / 57.2958;
          var lng1 = center.lng() / 57.2958;
          var lat2 = cornerOfScreen.lat() / 57.2958;
          var lng2 = cornerOfScreen.lng() / 57.2958;

          var dis = r * Math.acos(Math.sin(lat1) * Math.sin(lat2) +
              Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1));
          return dis;
      }



    ///// Find venues via GoogleMaps

    //   function initialize() {
        
    //     var center = map.getCenter();
    //     var currPlace = new google.maps.LatLng(center.lat(), center.lng());


    //     var request = {
    //       location: currPlace,
    //       radius: 3000,
    //       types: [searchRequest]
    //     };
    //     infowindow = new google.maps.InfoWindow();
    //     var service = new google.maps.places.PlacesService(map);
    //     service.nearbySearch(request, callback);
    //   };

    //   function callback(results, status) {
    //     if (status == google.maps.places.PlacesServiceStatus.OK) {
    //       for (var i = 0; i < results.length; i++) {
    //         createMarker(results[i]);
    //       }
    //     }
    //   }

    //   function createMarker(place) {
    //     var placeLoc = place.geometry.location;
    //     var marker = new google.maps.Marker({
    //       map: map,
    //       position: place.geometry.location
    //     });

    //     google.maps.event.addListener(marker, 'click', function() {
    //       infowindow.setContent(place.name);
    //       infowindow.open(map, this);
    //     });
    //   }

    });
  }  
});