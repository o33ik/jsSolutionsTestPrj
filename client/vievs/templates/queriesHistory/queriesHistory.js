Template.queriesHistory.helpers({
	queries: function (argument) {
		return Queries.find({}, {limit: 5, sort: {date: -1}});
	}

});