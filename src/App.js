import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard.js'
import Signup from './components/SignUp/signup.js'
import Signin from './components/SignIn/signin.js'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
