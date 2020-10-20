import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideos from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideos[0],
      videosList: exampleVideos
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  // click handler
  //<div class="video-list-entry-title"> is the button
  //{('.video-list-entry-title')}.on('click', function() {
  //  console.log('hi')
  //});

  clickEvent(video) {
    this.setState(state => ({
      currentVideo: video
    }));
    console.log(video);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videosList} onclick={this.clickEvent}/>
          </div>
        </div>
      </div>
    );
  }
}

/*
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={exampleVideos[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideos}/>
      </div>
    </div>
  </div>
);
*/
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
