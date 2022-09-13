import './App.css';
import NewForm from './components/NewForm';
import { Routes, Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import AdminLoginPage from './components/AdminLoginPage';


function App() {
  return (
   <div className='main-div'>
       <Routes>
       <Route path="/" element={<NewForm/>} />
        <Route path="/welcome" element={<WelcomePage/>} />
        <Route path="/adminpage" element={<AdminLoginPage/>} />        
        </Routes>
    </div>
  );
}

export default App;
