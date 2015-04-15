Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
  	'Auth': {'to': 'auth'},
  	'QueriesHistory': {'to': 'queriesHistory'},
  	'SearchRes': {'to': 'searchRes'}
  }
});	

Router.route('map', {
  path: '/',
  template: 'map',
  waitOn: function () {
    GoogleMaps.load({ v: '3', libraries: 'geometry,places' });
  }
});