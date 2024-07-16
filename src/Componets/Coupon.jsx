import React, { useState, useEffect } from "react";
import SideBar from "../Componets/SideBar";
import DataTable from "react-data-table-component";
import axios from "axios";

const Coupon = () => {
  const [orders, setOrders] = useState([]);
  const [coupons, setCoupons] = useState([]);
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
      name: "SL",
    },
    {
      name: "Coupon",
    },
    {
      name: "Amount",
    },
    {
      name: "Coupon Type",
    },
    {
      name: "Duration",
    },
        {
            name:"Status",
        },
    {
      name: "Actions",
    },
  ];

  return (
    <div>
      <SideBar />
      <div className="md:pl-64 pt-14 m-2">
        <div className="flex items-center pt-3 pl-6">
          <img
            src="../discount.png"
            alt="Add Category"
            className="w-6 h-6 mr-2"
          />
          <p className="font-bold text-lg">Add New Coupon</p>
        </div>
        <div className="m-2 bg-white border border-gray-200 p-3 mb-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="form-group">
              <label className="input-label">
                Coupon Type<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="couponType"
                className="custom-select js-select2-custom select2-hidden-accessible block w-full border border-gray-300 rounded-md p-2 md:mb-4"
                tabIndex="-1"
                aria-hidden="true"
              >
                <option disabled selected>
                  Select coupon type
                </option>
                <option value="coupon">Coupon</option>
                <option value="discount">Discount</option>
              </select>
            </div>
            <div className="form-group">
              <label className="input-label">
                Coupon Title<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="couponTitle"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                placeholder="Enter coupon title"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-label">
                Coupon Code<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="couponCode"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                placeholder="Enter coupon code"
                required
              />
            </div>

            {/* Column 2 */}
            <div className="form-group">
              <label className="input-label">
                Limit For Same User<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                name="limitForSameUser"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                placeholder="Enter limit for same user"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-label">
                Discount Type<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="discountType"
                className="custom-select js-select2-custom select2-hidden-accessible block w-full border border-gray-300 rounded-md p-2 md:mb-4"
                tabIndex="-1"
                aria-hidden="true"
              >
                <option disabled selected>
                  Select discount type
                </option>
                <option value="percentage">Percentage</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="form-group">
              <label className="input-label">
                Discount Percent<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                name="discountPercent"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                placeholder="Enter discount percent"
                required
              />
            </div>

            {/* Column 3 */}
            <div className="form-group">
              <label className="input-label">
                Minimum Purchase<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="minimumPurchase"
                className="form-input border border-gray-300 rounded-md p-2  md:mb-4 block w-full"
                placeholder="Enter minimum purchase"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-label">
                Maximum Discount<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="maximumDiscount"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                placeholder="Enter maximum discount"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-label">
                Start Date<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="date"
                name="startDate"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-label">
                Expire Date<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="date"
                name="expireDate"
                className="form-input border border-gray-300 rounded-md p-2 md:mb-4 block w-full"
                required
              />
            </div>
          </div>

          {/* Submit and Reset Buttons */}
          <div className="flex md:justify-end gap-3 mt-4">
            <button
              type="reset"
              id="reset"
              className="btn btn-secondary bg-gray-400 text-white py-2 px-4 rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn-primary bg-indigo-500 text-white py-2 px-4 rounded-md"
            >
              Submit
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
  );
};

export default Coupon;
