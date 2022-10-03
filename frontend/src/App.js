import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Admin from './components/admin';
import AdminProfile from './components/admin/Profile';
import Dashboard from './components/admin/Dashboard';
import ManageUser from './components/admin/ManageUser';


import Main from './components/main';
import Register from './components/main/Register';
import ContactUs from './components/main/ContactUs';
import Login from './components/main/Login';
import Home from './components/main/Home';
import ResetPassword from './components/main/ResetPassword';
import Header from './components/main/Header';
import UserManager from './components/admin/Usermanager';


import User from './components/user';
import UserHome from './components/user/Home';
import UserProfile from './components/user/Profile';
import CustomDesign from './components/user/CustomDesign';
import ManageForms from './components/user/ManageForms';
import FormSetting from './components/user/FormSetting';
import Preview from './components/user/Preview';
import CreateForm from './components/user/CreateForm';
import AddForm from './components/user/AddForm';
import Authorize from './Auth';





function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />

          <Route element={<Main />} path="main">
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="header" element={<Header />} />


          </Route>
          <Route element={<Admin />} path="admin">
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="usermanager" element={<UserManager />} />

            <Route path="manageuser" element={<ManageUser />} />

          </Route>



          <Route element={<User />} path="user">
            <Route path="form" element={<CreateForm />} />
            {/* <Route path="A-form" element={<AddForm/>}/> */}
            <Route path="custom-design" element={<CustomDesign />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="manage-forms" element={<ManageForms />} />
            <Route path="form-setting" element={<FormSetting />} />
            <Route path="preview" element={<Preview />} />
            <Route path="home" element={<UserHome />} />
            <Route path="create-form" element={<CreateForm />} />
            <Route path="add-form" element={<Authorize><AddForm /></Authorize>} />









          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
