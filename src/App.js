import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Htmlcss from "./Components/Htmlcss";
import Jstopic from "./Components/Jstopic";
import Es6 from './Components/Es6';
import Reactconcept from "./Components/Reactconcept";
import Nodejsconcept from "./Components/Nodejsconcept";
import Mongodb from "./Components/Mongodb";

function App() {

  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/htmlcss" element={<Htmlcss />} />
          <Route path="/jstopic" element={<Jstopic />} />
          <Route path="/es6" element={<Es6 />} />
          <Route path="/react" element={<Reactconcept />} />
          <Route path="/nodejs" element={<Nodejsconcept />} />
          <Route path="/mongodb" element={<Mongodb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
