
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
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import Review from './Pages/Home/Review/Review';
import Contact from './Pages/Contact/Contact';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';


function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<PrivateRoute><Appointment /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route index element={<MyAppointments />}></Route>
          <Route path='reviews' element={<MyReviews />}></Route>
          <Route path='myHistory' element={<MyHistory />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
          <Route path='manage' element={<RequireAdmin><ManageDoctors /></RequireAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
