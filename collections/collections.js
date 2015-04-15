Queries = new Meteor.Collection('queries');
Queries.allow({
  remove: function () { return true; },
  insert: function () { return true; } } 
);

