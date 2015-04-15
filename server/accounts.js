Meteor.startup(function () {
        Accounts.loginServiceConfiguration.remove({
            service: "google"
        });

        Accounts.loginServiceConfiguration.insert({
            service: "google",
            clientId: "52825033943-bj0grr032lu287k973ssb4n3qvecnl9q.apps.googleusercontent.com",
            secret: "nhOlZovzTQK9CEHPLbpAK4sp"
        });
    });