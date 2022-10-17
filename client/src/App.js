import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="App-container">
      <div className="App">
        <Header />
        <div className="a">
          <video controls muted className="video-container">
            <source src="http://localhost:4000/video" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
