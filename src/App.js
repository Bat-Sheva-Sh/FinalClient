import logo from './logo.svg';
import './App.css';
import Details from './Components/Details';
import Direction from './Components/Direction';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './Components/UserContext';
import Home from './Components/Home';
import GoodBye from './Components/GoodBye';
import ExportToExcel from './Components/ExportToExcel';

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <UserContext>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="/Details" element={<Details />} />
              <Route path="/Direction" element={<Direction />} />
              <Route path="/GoodBye" element={<GoodBye />} />
              <Route path="/ExportToExcel" element={<ExportToExcel/>}/>
            </Route>
          </Routes>
        </UserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
