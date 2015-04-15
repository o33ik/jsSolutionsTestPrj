Template.auth.events({
  	"click #login": function(e, tmpl) {
    	Meteor.loginWithGoogle();       
  	},
  	'click #logout': function (e, tmpl) {
  		Meteor.logout(); 
  	}
});