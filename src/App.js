import { Route,BrowserRouter as Router ,Routes} from 'react-router-dom';
import './App.css';
import News from './Component/News';


function App() {
  
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route  path="/" element={<News key="Home" category="general" country="us"/>} />
      <Route  path="/Business" element={<News key="business" category="business" country="in"/>} />
      <Route  path="/Sports" element={<News key="Sports" category="sports" country="in"/>} />
      <Route  path="/cricket" element={<News key="Home" category="cricket" country="in"/>} />
      <Route  path="/technology" element={<News key="technology" category="technology" country="in"/>} />
     </Routes>
    </div>
    </Router>
  );
}


export default App;
