import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import SignUp from './component/signup';
import Login from './component/login';
import PageError from './component/pageError';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>





          <Route path="*" element={<PageError />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
