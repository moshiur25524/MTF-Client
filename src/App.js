
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Register from './Pages/Login/Register/Register';
import Appointment from './Pages/Appointment/Appointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Pages/Login/PrivateRoute';


function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<PrivateRoute><Appointment/></PrivateRoute>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
