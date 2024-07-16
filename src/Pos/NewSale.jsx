import React from "react";
import SideBar from "../Componets/SideBar";
import AddIcon from '@mui/icons-material/Add';

const NewSale = () => {
  return (
    <div>
      <SideBar />
      <div className="md:pl-64 pt-12">
        <div className="w-full p-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-1">
            <div className="col-span-1 lg:col-span-2  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-400 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex justify-between bg-gray-100 p-2 rounded">
                <p className="font-bold p-2">Product Section</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
                <div className="col-span-1 lg:col-span-1 ">
                  <select
                    id="countries"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>All Categories</option>
                    <option value="US">Milk Shak</option>
                    <option value="CA">Chinese</option>
                  </select>
                </div>
                <div className="col-span-1 lg:col-span-1 ">
                  <input
                    type="text"
                    id="first_name"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Here"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="p-2 col-span-1 bg-white border border-gray-200 rounded-lg shadow ">
              <div className="flex justify-between bg-gray-100 p-2 rounded">
                <p className="font-bold p-2">Billing Section</p>
              </div>
              <div className="flex justify-between p-3">
                <form className="w-48">
                  <select
                    id="countries"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>select customer</option>
                    
                    <option value="raj">Raj</option>
                    <option value="mohit">Mohit</option>
                   
                  </select>
                </form>

                <button
                  type="button"
                  className="p-2  mb-2 text-sm font-medium text-gray-900  bg-green-600 rounded-lg border border-gray-200  hover:text-blue-700 "
                >
                 <p className="text-white">  <AddIcon/> Customer</p>
                </button>
              </div>
              <div className="px-3">
                <h1 className="text-left font-bold">Select Branch</h1>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="px-3 mt-3">
                <h1 className="text-left font-bold">Select Order Type</h1>
                <div className="flex items-center space-x-2 border p-3 rounded">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label
                    for="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Take Away
                  </label>
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label
                    for="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Dine-In
                  </label>
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label
                    for="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Home Delivery
                  </label>
                </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSale;