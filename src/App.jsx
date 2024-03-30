import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LabTest from './pages/LabTest';
import Profile from './account/Profile';
import Login from './account/Login';
import Register from './account/Register';
import Orders from './account/profile/Orders'
import LabAdmin from './account/profile/LabAdmin'
import Logout from './account/profile/Logout'

const App = () => {
  return (
    <>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<LabTest/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/labadmin" element={<LabAdmin />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
    
      </div>
      <div >
  

      </div>
    </>
  );
}

export default App;
/*


*/ 