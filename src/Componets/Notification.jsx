import React, { useEffect, useState } from 'react';
import SideBar from "../Componets/SideBar";
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Notification = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://minaxipalace.onrender.com/bookorder/get")
      .then((response) => {
        setOrders(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the orders!", error);
        setLoading(false);
      });
  }, []);
  
  // Function to handle file input change
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
  const columns = [
    {
      name: 'SL',
      
      
    },
    {
      name: 'Image',
      
    },
    {
      name: 'Title',
     
    },
    {
      name: 'Description',
      
    },
    {
      name: 'Status',
     
    },
 
    {
      name: 'Actions',
     
    },
  ];
  return (
    <div>
      <SideBar />
      <div className='md:pl-64 pt-14 m-2'>
        <div className="flex items-center pt-3 pl-6">
          <img
            src="../bell.png"
            alt="Add Category"
            className="w-6 h-6 mr-2"
          />
          <p className="font-bold text-lg">
          Send Notification</p>
        </div>
        <div className="m-2 bg-white border border-gray-200 p-3 mb-4 rounded-lg shadow">
          <div className="md:flex md:space-x-4">
            {/* Left Side: Title and Item Type */}
            <div className="md:w-1/2 md:m-2">
              <div className="form-group">
                <label className="input-label">Title<span className="text-red-500 ml-1">*</span></label>
                <input 
                  type="text" 
                  name="title" 
                  className="form-input border border-gray-300 rounded-md p-2 mb-4  block w-full" 
                  placeholder="New notification" 
                  required 
                />
              </div>
             
              <div className="form-group">
                <label className="input-label">Description<span className="text-red-500 ml-1">*</span></label><br/>
                <textarea className='border border-black w-3/4'></textarea>
              </div>
            </div>
            
            {/* Right Side: Banner Image */}
            <div className="md:w-1/2">
              <div className="form-group">
                <div className="flex items-center justify-center gap-1">
                  <label className="mb-0">Notification Banner</label>
                  <small className="text-red-500">* ( Ratio 3:1 )</small>
                </div>
                <div className="flex justify-center mt-4">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <div className="upload-file">
                      <input 
                        id="image-upload"
                        type="file" 
                        name="image" 
                        accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" 
                        className="upload-file__input hidden"
                        onChange={handleImageChange} // Handle image change
                      />
                      <div className="upload-file__img_drag upload-file__img">
                        {imagePreview ? (
                          <img 
                            width="465" 
                            id="viewer" 
                            src={imagePreview} // Show selected image preview
                            alt="Selected"
                            className="rounded-lg border"
                          />
                        ) : (
                          <img 
                            width="465" 
                            id="viewer" 
                            src="https://minaxipalace.in/app/public/assets/admin/img/icons/upload_img2.png" 
                            alt="Placeholder"
                            className="rounded-lg border"
                          />
                        )}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
           
          </div>
          <div className="flex md:justify-end gap-3 mt-4">
              <button type="reset" id="reset" className="btn btn-secondary bg-gray-400 text-white py-2 px-4 rounded-md">Reset</button>
              <button type="submit" className="btn btn-primary bg-indigo-500 text-white py-2 px-4 rounded-md">Send Notification</button>
            </div>
        </div>
        <div className="col-12 mt-6">
          <DataTable
            columns={columns}
            data={orders}
           
            progressPending={loading}
            customStyles={{
              head: {
                style: {
                  fontSize: '15px',
                  fontWeight: 'bold',
                 
                },
              },
            }}
           
          />
        </div>
      </div>
    </div>
  );
}

export default Notification;
