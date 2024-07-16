import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const AdminRegisterPage = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [, setShowPopup] = useState(false);
  const [, setMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [adminNameError, setAdminNameError] = useState(false);
  const [schoolNameError, setSchoolNameError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.adminName.value;
    const schoolName = event.target.schoolName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!name || !schoolName || !email || !password) {
      if (!name) setAdminNameError(true);
      if (!schoolName) setSchoolNameError(true);
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    // Simulate registration success
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setMessage("Registration successful!");
      setShowPopup(true);
      navigate('/Admin/dashboard');
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === 'email') setEmailError(false);
    if (name === 'password') setPasswordError(false);
    if (name === 'adminName') setAdminNameError(false);
    if (name === 'schoolName') setSchoolNameError(false);
  };

  return (
    <div className="flex h-screen">
           <div
  className="hidden md:flex flex-1 bg-cover bg-center"
  style={{
    backgroundImage: `url(https://cdn.pixabay.com/photo/2014/03/24/17/15/school-295210_640.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', 
  }}
/>
      <div className="flex flex-col w-full max-w-md mx-auto p-8 bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Admin Register</h2>
        <p className="text-center text-gray-600 mb-6">
          Create your own school by registering as an admin.
          <br />
          You will be able to add students and faculty and manage the system.
        </p>
        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="adminName" className="block text-sm font-medium text-gray-700">Enter your name</label>
            <input
              id="adminName"
              name="adminName"
              type="text"
              autoComplete="name"
              className={`mt-1 block w-full px-3 py-2 border ${adminNameError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              onChange={handleInputChange}
            />
            {adminNameError && <p className="text-red-500 text-sm">Name is required</p>}
          </div>
          <div>
            <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">Create your school name</label>
            <input
              id="schoolName"
              name="schoolName"
              type="text"
              autoComplete="off"
              className={`mt-1 block w-full px-3 py-2 border ${schoolNameError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              onChange={handleInputChange}
            />
            {schoolNameError && <p className="text-red-500 text-sm">School name is required</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={`mt-1 block w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              onChange={handleInputChange}
            />
            {emailError && <p className="text-red-500 text-sm">Email is required</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={toggle ? 'text' : 'password'}
                autoComplete="current-password"
                className={`block w-full px-3 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? <Visibility className="h-5 w-5 text-gray-400" /> : <VisibilityOff className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-sm">Password is required</p>}
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loader ? <div className="loader"></div> : "Register"}
          </button>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Already have an account?</span>
            <Link to="/Adminlogin" className="text-indigo-600 hover:text-indigo-500 text-sm">Log in</Link>
          </div>
        </form>
      </div>
   


     
    </div>
  );
}

export default AdminRegisterPage;
