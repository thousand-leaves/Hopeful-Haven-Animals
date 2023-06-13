import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./components/organisms/Header";
import Home from "./components/pages/Home";
import Reports from "./components/pages/Reports";
import Donate from "./components/pages/Donate";
import Forum from "./components/pages/Forum";
import LoginUser from "./components/pages/Login";
import PageNotFound from "./components/pages/PageNotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/forums" element={<Forum />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
