import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LabTest from './pages/LabTest';
import Profile from './account/Profile';
import Login from './account/Login';
import Register from './account/Register';
import LabAdmin from './account/profile/LabAdmin'
import Logout from './account/profile/Logout'
import Dashboard from '././dashboard/Dashboard';
import OfferedTest from '././dashboard/OfferedTest';
import Pages from '././dashboard/Pages';
import Orders from '././dashboard/Orders';
import CustomTestForm from "./dashboard/CustomTestForm";
import Cart from "./Cart/Cart";
import ProfileOrders from "./account/profile/ProfileOrders";
import Collections from './account/profile/Collections';
import Product from './account/profile/Product';


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
          <Route path="/cart" element={<Cart/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profileorders" element={<ProfileOrders />} />
          <Route path="/labadmin" element={<LabAdmin />} />
          <Route path="/logout" element={<Logout />} />
          { <Route path="/products" element={<Product />} /> }
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/offeredtest" element={<OfferedTest />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/CustomTestForm" element={<CustomTestForm />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/collections" element={<Collections />} />
           <Route path="/book" element={<Product />} />
        </Routes>
    
      </div>
    
    </>
  );
}

export default App;
/*


*/ 
