Meteor.startup(function () {
    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "google",

        //localhost:3000
        clientId: "52825033943-bj0grr032lu287k973ssb4n3qvecnl9q.apps.googleusercontent.com",
        secret: "nhOlZovzTQK9CEHPLbpAK4sp"

        ////http://o33ik-simplemap.meteor.com/
        // clientId: "52825033943-c8jjvu0gp91lp0bprjtjlljb3mblrq41.apps.googleusercontent.com",
        // secret: "RhaABa9Cyriil1rm2HUp5D3z" 
    });
});