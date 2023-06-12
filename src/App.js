import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AddUser from "./components/Register";
import LoginUser from "./components/Login";
import Header from './components/Header';
import AboutUs from './components/pages/AboutUs';
import PageNotFound from './components/pages/PageNotFound';

function App() {

  return (
    <Router>
      <div className="container">
        <Header brand="Hopeful Haven Animals" />
        <Routes>
          <Route path='/' element={<LoginUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<AddUser />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
