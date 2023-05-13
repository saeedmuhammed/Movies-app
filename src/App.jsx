import { Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import Navbar from './Components/Navbar/Navbar';
import Tv from './Components/Tv/Tv'
import Gallery from './Components/Gallery/Gallery'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import { useState } from 'react';
import Footer from './Components/Footer/Footer';


function App() {

  let [loginUser , setLoginUser] = useState(null);

  let navigate = useNavigate();


 function setUser(user) {
    setLoginUser(user);
 }


 function logout() {


  setLoginUser(null);
  navigate('/login');

 }

  return (
    <div className="min-h-[100vh] relative">

      <Navbar loginUser={loginUser}  logout={logout}/>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/tv' element={<Tv />} />  
      <Route path='/movies' element={<Movies/>} />
      <Route path='/gallery' element={<Gallery/>} /> 
      <Route path='/register' element={<Register/>} /> 
      <Route path='/login' element={<Login setUser={setUser}/> } />  
      <Route path="/" element={<Navigate replace to= {loginUser !== null ?"/home" : "/login" }   />} />
      </Routes>
     
    <Footer/>
      
    </div>
  );
}

export default App;
