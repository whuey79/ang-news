'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://glowing-fire-2629.firebaseio.com/posts/:id.json');
});
