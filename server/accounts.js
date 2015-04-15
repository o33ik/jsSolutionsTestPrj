Meteor.startup(function () {
        Accounts.loginServiceConfiguration.remove({
            service: "google"
        });

        Accounts.loginServiceConfiguration.insert({
            service: "google",
            clientId: "52825033943-c8jjvu0gp91lp0bprjtjlljb3mblrq41.apps.googleusercontent.com",
            secret: "RhaABa9Cyriil1rm2HUp5D3z"
        });
    });