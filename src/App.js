import nav from './components/nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auctions from './pages/auctions'
import Drop from './pages/drop'
import Home from './pages/home'
import Marketplace from './pages/marketplace'
import  NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="drop" element={<Drop />} />
          <Route path="market" element={<Marketplace />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
