Meteor.methods({
    'foursquareRequest': function (reqParams) {
        var clientId = 'NBKDK5DHRTKZXLL3CXTUGSIDN0LBFSK4WX0TDHXKWXVOPQC2';
        var clientSecret = 'JSJOIIL5122PXX2DHD4VPIZPWUEAFVPCCYBTVCDLEUG3BLJB';
        var baseUrl = 'https://api.foursquare.com/v2/venues/search?';
        var endpoint = 'venues/search?';
        var coords = "&ll=" + reqParams.coords.lat + "," + reqParams.coords.lng;
        var radius = "&radius=" + reqParams.radius;
        var query = "&query=" + reqParams.searchRequest;
        var key = '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=' + '20140626';
        var url = baseUrl + key + coords + radius + query;

		var venues = Meteor.http.get(url, {timeout:30000});

        return venues.data.response.venues;
    }
});