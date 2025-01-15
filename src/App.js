import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "./pages/MainPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
