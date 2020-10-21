import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideos from '../data/exampleVideoData.js';
import SearchBar from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideos[0],
      videosList: exampleVideos
    };
    //this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(video) {
    this.setState(state => ({
      currentVideo: video
    }));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <SearchBar />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videosList} clickE={this.clickEvent.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
