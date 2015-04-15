Template.searchRes.helpers({
	
	searchResults: function () {
		var venues = Session.get('venues');
		if(venues!==null) {
			var venuesArr = [];
			// venuesArr.push({name: 'Name', address: 'Address', city: 'City', country: 'Country', 
			// 	lat: 'Lat', lng: 'Lng'
			// });	
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