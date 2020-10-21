import YOUTUBE_API_KEY from '.././config/youtube.js';

var searchYouTube = (options, callback = () => {}) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    options: {
      key: YOUTUBE_API_KEY,
      q: 'cats',
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    },
    success: (data) => {
      console.log(data);
    },
    error: (response) => {
      console.log('Request Failed');
    },
    //done()
  });
};


// $.get('https://www.googleapis.com/youtube/v3/search', function options({key = 'API_KEY', q, maxResults = 5}) {

// })

// .done(options)

// .fail(function() {
//   console.log('Request Failed');
// })
/*
getAll: function(callback = ()=>{}) {
  $.ajax({
    type: 'GET',
    url: Parse.server,
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: (data) => {
      callback(data.results);
    },
    error: (status) => {
      console.error('chatterbox: Failed to fetch messages', status);
    }
  });
},
*/

export default searchYouTube;
