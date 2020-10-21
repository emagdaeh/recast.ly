import YOUTUBE_API_KEY from '../config/youtube.js';
// import SearchBar from '.././Search.js';

var searchYouTube = ({key = YOUTUBE_API_KEY, query, max = 5}, callback = () => {}) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: key,
    q: query,
    part: 'snippet',
    maxResults: max,
    type: 'video',
    videoEmbeddable: true
  })

    .done(function(parameter) {
      callback(parameter.items);
    })

    .fail(function(arg) {
      console.log('Request Failed', arg);
    });
};


// var searchYouTube = ({query, max = 5, key, callback = () => {}}) => {
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     options: {
//       key: key,
//       q: query,
//       part: 'snippet',
//       maxResults: max,
//       type: 'video',
//       videoEmbeddable: true
//     },
//     success: (data) => {
//       console.log(data);
//     },
//     error: (response) => {
//       console.log('Request Failed');
//     },
//     //done()
//   });
// };
export default searchYouTube;
