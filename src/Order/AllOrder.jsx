import React, { useEffect, useState } from "react";
import SideBar from "../Componets/SideBar";
import axios from "axios";
import DownloadIcon from "@mui/icons-material/Download";
import DataTable from "react-data-table-component";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if dateString is empty

    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  // Function to parse date from dd-mm-yyyy to yyyy-mm-dd
  const parseDate = (formattedDateString) => {
    if (!formattedDateString) return ""; // Return empty string if formattedDateString is empty

    const [day, month, year] = formattedDateString.split("-");
    return `${year}-${month}-${day}`;
  };
  const columns = [
    {
      name: 'Order ID',
      
      
    },
    {
      name: 'Delivery Date',
      
    },
    {
      name: 'Customer Info',
     
    },
    {
      name: 'Branch',
      
    },
    {
      name: 'Total Amount',
     
    },
    {
      name: 'Order Status',
      
    },
    {
      name: 'Order Type',
      
    },
    {
      name: 'Actions',
     
    },
  ];
  return (
    <div>
      <SideBar />
      <div className="md:pl-64 pt-14 m-2">
        <div className="flex items-center pt-3 pl-6">
          <img
            src="../allorder.png"
            alt="/allorder.png"
            className="w-6 h-6 mr-2"
          />
          <p className="font-bold">All Orders</p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5">
          <div className=" bg-white border border-gray-200 p-3 mb-4 rounded-lg shadow">
            <h1 className="text-left  font-bold">Select Date Range</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              <div className="col-span-1">
                <p className="font-semibold">Select Branch</p>
                <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus: block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:">
                  <option selected>Select Branch</option>
                  <option value="">Minaxi Place Resturant</option>
                </select>
              </div>
              <div className="relative max-w-sm col-span-1">
                <p className="font-semibold">Start Date</p>
                <input
                  id="default-datepicker"
                  type="date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus: block w-full pl-2  py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:"
                  placeholder="Select date"
                  value={formatDate(startDate)}
                  onChange={(e) => setStartDate(parseDate(e.target.value))}
                />
              </div>
              <div className="relative max-w-sm col-span-1">
                <p className="font-semibold">End Date</p>
                <input
                  id="default-datepicker"
                  type="date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus: block w-full pl-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                  value={formatDate(endDate)}
                  onChange={(e) => setEndDate(parseDate(e.target.value))}
                />
              </div>
              <div className="col-span-1 md:mt-6">
                <button className="bg-indigo-500 p-2 rounded w-full text-white">
                  Show Data
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="/circular-clock (1).png"
                    alt="/circular-clock (1).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Pending</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./checked (1).png"
                    alt="/checked (1).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Confirmed</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./package.png"
                    alt="/package.png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Processing</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./delivery-man (3).png"
                    alt="./delivery-man (3).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Out of Delivery</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./box (1).png"
                    alt="/box (1).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Delivered</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./cancel (1).png"
                    alt="/box (1).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Canceled</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./return-box.png"
                    alt="/box (1).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Returned</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <img
                    src="./cancel.png"
                    alt="/box (1).png"
                    className="w-5 h-5"
                  />
                  <p className="ml-2 font-semibold">Failed To Delivered</p>
                  <p className="ml-auto text-green-500 font-bold">1</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1 mt-3 mb-3 sm:flex justify-between">
                <div className="flex w-full md:w-auto">
                  <input
                    type="text"
                    className="form-control w-full p-2 border border-gray-300 rounded-l-md"
                    placeholder="Search by id "
                  />
                  <button className="bg-indigo-500 text-white p-2 rounded-r-md">
                    Search
                  </button>
                </div>
                <button className="border border-indigo-500 text-indigo-500 p-2 px-12 rounded mt-2 md:mt-0 md:ml-0 hover:bg-indigo-500 hover:text-white">
                  <DownloadIcon /> Export
                </button>
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
      </div>
    </div>
  );
};

export default AllOrder;
