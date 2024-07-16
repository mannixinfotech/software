import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';

const UserProfile = () => {
  const navigate = useNavigate();

//   const handleStudentClick = () => {
//     navigate('/student-register');
//   };

//   const handleTeacherClick = () => {
//     navigate('/teacher-register');
//   };

  const handleAdminClick = () => {
    navigate('/admin-register');
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:m-10 m-4 md:gap-12 gap-4'>
        <div
          className='bg-cyan-400 p-5 text-center text-white shadow-lg cursor-pointer'
          
        >
          <AccountCircleIcon fontSize='large' />
          <p className='text-xl font-bold'>Studenttt</p>
          <p>Login as a student to explore course materials and assignments.</p>
        </div>
        <div
          className='bg-yellow-400 p-5 text-center text-white shadow-lg cursor-pointer'
          
        >
          <SchoolIcon fontSize='large' />
          <p className='text-xl font-bold'>Teacher</p>
          <p>Login as a teacher to create courses, assignments, and track student progress.</p>
        </div>
        <div
          className='bg-green-400 p-5 text-center text-white shadow-lg cursor-pointer'
          onClick={handleAdminClick}
        >
          <GroupIcon fontSize='large' />
          <p className='text-xl font-bold'>Admin</p>
          <p>Login as an administrator to access the dashboard to manage app data.</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
