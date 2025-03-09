import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home, Login, Register} from "./pages/index"
import { AuthProvider } from "./context/auth";
function App() {
  return (
    <>
    <NavBar  />
    <AuthProvider>
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/login">Login</Link>{' '}
          <Link to="/register">Register</Link>{' '}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home/>} />
        </Routes>
        
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
