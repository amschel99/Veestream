import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign up & login/signup";
import Login from "./pages/sign up & login/login";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import UseCases from "./components/usecases/usecases";
import PrivacyAndTerms from "./components/PrivacyAndTerms";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usecases" element={<UseCases/>}/>
          <Route path="/tos" element={<PrivacyAndTerms/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
