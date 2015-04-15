UI.registerHelper('formatCoords', function (coords) {
	return coords.toFixed(5);
});

UI.registerHelper('formatDate', function (date) {
	return date.toDateString();
});