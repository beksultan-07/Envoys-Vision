import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import SettingsKYC from './pages/settingsKYC';
import Farms from './pages/Farms';
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/settings" element={<SettingsKYC/>}/>
        <Route path="/farms" element={<Farms/>}/>
        <Route path="/search" element={<Search/>}/>

      </Routes>
    </Router>
  );
}

export default App;
