import React, { useEffect, useState } from "react";
import SideBar from "../Componets/SideBar";
import DataTable from "react-data-table-component";
import axios from "axios";

const VerifyPayment = () => {
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
  const columns = [
    {
      name: "Order ID",
    },
    {
      name: "Delivery Date",
    },
    {
      name: "Customer Info",
    },
    {
      name: "Branch",
    },
    {
      name: "Total Amount",
    },
    {
      name: "Order Status",
    },
    {
      name: "Order Type",
    },
    {
      name: "Actions",
    },
  ];
  return (
    <div>
      <SideBar />

      <div className="md:pl-64 pt-12">
        <div>
          <p className="font-bold text-xl text-left p-10">
            <img
              src="https://minaxipalace.in/app/public/assets/admin/img/icons/all_orders.png"
              alt="Analytics"
              className="w-6 h-6 inline-block mr-2"
            />
            Verify Offline Payments
            <span className="px-2 py-0.5 ml-2 text-xs font-medium tracking-wide text-red-500 bg-gray-200 rounded-full">
              0
            </span>
          </p>
        </div>

        <div className="flex px-5 gap-4 text-gray-400">
          <p className="text-indigo-500 border-b-4 border-indigo-700 pb-4">
            Pending Orders
          </p>
          <p>Denied Orders</p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5">
          <div className=" bg-white border border-gray-200 p-3 mb-4 rounded-lg shadow  ">
            <div className="grid grid-cols-1  px-5">
              <div className="col-span-1 mt-3 mb-3 px-1 sm:flex justify-between">
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
              </div>
            </div>

            <div className="col-12 mt-6">
              <DataTable
                data={orders}
                columns={columns}
                progressPending={loading}
                customStyles={{
                  head: {
                    style: {
                      fontSize: "15px",
                      fontWeight: "bold",
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

export default VerifyPayment;