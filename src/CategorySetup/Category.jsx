import React, { useState } from 'react';
import SideBar from "../Componets/SideBar";
import { DataGrid } from '@mui/x-data-grid';


const Category = () => {
  const [imagePreview, setImagePreview] = useState('https://minaxipalace.in/app/public/assets/admin/img/400x400/img2.jpg');

 
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
 

  // Define columns for the table
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
  ];

  return (
    <div>
      <SideBar />
      <div className='md:pl-64 pt-14 m-2'>
        <div className="flex items-center pt-3 pl-6">
          <img
            src="../addcategory.png"
            alt="Add Category"
            className="w-6 h-6 mr-2"
          />
          <p className="font-bold text-lg">Add New Category</p>
        </div>
        <div className="m-2 bg-white border border-gray-200 p-3 mb-4 rounded-lg shadow">
          <form action="https://minaxipalace.in/app/admin/category/store" method="post" encType="multipart/form-data">
            <input type="hidden" name="_token" value="WdJ8JCOBZNK6TdjoOqoO8wvjo9Ll3dNylBPjHEMP" autoComplete="off" />
            <ul className="flex mb-4">
              <li className="nav-item">
                <a className="nav-link lang_link active text-blue-500" href="/" id="en-link">English(EN)</a>
              </li>
            </ul>
            <div className="flex flex-wrap md:flex-nowrap gap-2 items-end">
              <div className="w-full md:w-1/2 mb-4">
                <label className="block text-gray-700 font-semibold">Name (EN)</label>
                <input 
                  type="text" 
                  name="name[]" 
                  className="p-2 form-input mt-1 block w-full border border-gray-300 rounded-md" 
                  placeholder="New Category" 
                  maxLength="255" 
                  required 
                  onInvalid={() => document.getElementById('en-link').click()} 
                />
                <input type="hidden" name="lang[]" value="en" />
                <input type="hidden" name="position" value="0" />
              </div>
              <div className="w-full md:w-1/2 mb-4">
                <div className="text-center mt-2">
                  <img width="105" className="rounded-lg border" id="viewer" src={imagePreview} alt="/" />
                </div>
                <div className="mt-2">
                  <label className="block text-gray-700 font-semibold">Category Image <small className="text-red-500">* ( Ratio 1:1 )</small></label>
                  <div className="custom-file mt-2">
                    <input 
                      type="file" 
                      name="image" 
                      id="customFileEg1" 
                      className="custom-file-input border border-gray-300 rounded-md w-full p-1" 
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" 
                      required 
                      onChange={handleImageChange} 
                      onInvalid={() => document.getElementById('en-link').click()} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button type="reset" id="reset" className="btn btn-secondary bg-gray-400 text-white py-2 px-4 rounded-md">Reset</button>
              <button type="submit" className="btn btn-primary bg-indigo-500 text-white py-2 px-4 rounded-md">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-12 mt-6">
        <DataGrid
      
        columns={columns}
       
        
       
      />
        </div>
      </div>
    </div>
  );
}

export default Category;
