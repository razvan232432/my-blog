import './App.css';
import LatestPosts from './components/LatestPosts';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LatestPosts />
    </div>
  );
}

export default App;
