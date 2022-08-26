import Header from "../Header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationPage from "../RegistrationPage/registration";
import LoginnPage from "../LoginPage/login";
import FeedPage from "../FeedPage/feed";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* <Route path="/" element={<ProcessPage />}></Route> */}
          <Route path="*" element={<div className="error">404</div>}></Route>
          <Route path="/" element={<FeedPage />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginnPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
