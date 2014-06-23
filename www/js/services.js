angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array




function onSuccess(contacts) {
  for (var i = 0; i < contacts.length; i++) {
    friends.push({id: i, name: contacts[i].displayName});
  }
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts
var options = new ContactFindOptions();
options.filter = "";
var filter = ["displayName"];
var friends = [];
navigator.contacts.find(filter, onSuccess, onError, options).then(


/*
  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];
*/
  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  });
});
