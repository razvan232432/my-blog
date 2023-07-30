import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Posts from './pages/Posts';
import SignInLogin from './pages/SignInLogin';
import Support from './pages/Support';
import Home from './pages/Home';
function App() {
  return (
    
   
    <div className="App">
      <Router>
            <Home />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/src/pages/Posts.js'element={<Posts />} />
                <Route path='/src/pages/SignInLogin.js' element={<SignInLogin />} />
                <Route path='/src/pages/Support.js' element={<Support />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
