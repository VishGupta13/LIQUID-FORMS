import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/main';
import ContactUs from './components/main/ContactUs';

import Home from './components/main/Home';
import ResetPassword from './components/main/ResetPassword';
import Admin from './components/admin';
import Dashboard from './components/admin/Dashboard';
import ManageUser from './components/admin/ManageUser';
import User from './components/user';

import UserHome from './components/user/Home';


import UserProfile from './components/user/Profile';


import AdminProfile from './components/admin/Profile';
import Register from './components/main/Register';
import CustomDesign from './components/user/CustomDesign';
import ManageForms from './components/user/ManageForms';
import FormSetting from './components/user/FormSetting';
import Preview from './components/user/Preview';
import Login from './components/main/Login';
import CreateForm from './components/user/CreateForm';

function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>

        <Route element={<Main />} path="main">
        <Route path="home" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="reset-password" element={<ResetPassword />}/>
        <Route path="contactus" element={<ContactUs />}/>
       





        </Route>
        <Route element={<Admin />} path="admin">
        <Route path="admin-profile" element={<AdminProfile />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        
        <Route path="manageuser" element={<ManageUser />}/>

        </Route>
        

        
        <Route element={<User />} path="user">
        <Route path="form" element={<CreateForm/>}/>
        <Route path="custom-design" element={<CustomDesign/>}/>
        <Route path="user-profile" element={<UserProfile/>}/>
        <Route path="manage-forms" element={<ManageForms/>}/>
        <Route path="form-setting" element={<FormSetting/>}/>
        <Route path="preview" element={<Preview/>}/>
        <Route path="home" element={<UserHome />}/>
        
        
        
        

        </Route>
        
        
        
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
