Meteor.publish('queries', function(category) {
	return Queries.find();
});