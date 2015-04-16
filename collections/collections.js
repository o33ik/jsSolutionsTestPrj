Queries = new Meteor.Collection('queries');
Queries.allow({
  insert: function () { return true; } } 
);

