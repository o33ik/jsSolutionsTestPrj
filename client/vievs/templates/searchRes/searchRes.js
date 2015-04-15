Template.searchRes.helpers({
	
	searchResults: function () {
		var venues = Session.get('venues');
		if(venues!==null) {
			var venuesArr = [];
			for (var i = 0; i < venues.length; i++) {
				var name = venues[i].name;
				var address = venues[i].location.address;
				var city = venues[i].location.city;
				var country = venues[i].location.country;
				var lat = venues[i].location.lat;
				var lng = venues[i].location.lng;
				venuesArr.push({name: name, address: address, city: city, country: country, 
					lat: lat, lng: lng
				});			
			};
			return venuesArr;
		}
		return false;
	}
});

Template.searchRes.events({
	'click #export': function (e, tmpl) {
        venues = Session.get('venues');
        csv = 'Name; City; Address; Lat; Lng%0A';
        
        for( i=0; i < venues.length; i++)
          csv += venues[i].name +"; " + venues[i].location.city + "; " + venues[i].location.address + "; " + venues[i].location.lat + "; " + venues[i].location.lng + "%0A";

        var a = document.createElement('a');
        a.href = "data:text/csv;charset=utf-8,\uFEFF" + csv;
        a.target = '_blank';
        a.download = 'myFile.csv';
        document.body.appendChild(a);
        a.click();
    }
});