import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import DiamondIcon from '@mui/icons-material/Diamond';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MessageIcon from '@mui/icons-material/Message';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PieChartIcon from '@mui/icons-material/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletIcon from '@mui/icons-material/Wallet';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState({
    tasks: false,
    clients: false,
  });

  const [islockMenu,setIslockMenu] = useState(false);
  
  const toggleDropdown = (item) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const lockDropdown = () =>
  {
    setIslockMenu(!islockMenu);
  }
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <HomeIcon />, link: '/' },
    { label: 'POS', icon: <ShoppingBagIcon/>, link: '/',
      submenu: [
        { label: 'New Sale',icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Orders' ,icon:<HorizontalRuleIcon />, link: '' },
        
      ],
     },
    { label: 'Verify Offline Payment', icon: <ShoppingBasketIcon />, link: '/' },
    { label: 'Order', icon: <ShoppingCartIcon />, link: '/',
      submenu: [
        { label: 'All',icon:<HorizontalRuleIcon /> ,link: 'allorder' },
        { label: 'Pending' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Confirmed' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Processing' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Out For Delivery' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Delivered' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Returned' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Failed To Deliver' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Canceled' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Scheduled' ,icon:<HorizontalRuleIcon />, link: '' },
      ],
     },
    { label: 'Category Setup', icon: <CategoryIcon />, link: '/',
      submenu: [
        { label: 'Category' ,icon:<HorizontalRuleIcon />, link: '/category' },
        
        
      ],
     },
    { label: 'Product Setup', icon: <DiamondIcon/>, link: '' ,
      submenu: [
        { label: 'Product Addon' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Product Add' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Product List' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Bulk Import' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Bulk Export' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Product Review' ,icon:<HorizontalRuleIcon />, link: '' },
        
      ],
    },
    { label: 'Banner', icon: <ViewCarouselIcon />, link: '/' },
    { label: 'Coupon', icon: <CardGiftcardIcon />, link: '/' },
    { label: 'Send Notifications', icon: <NotificationsIcon/>, link: '/' },
    { label: 'Messages', icon: <MessageIcon />, link: '/message' },
    { label: 'Earning Report', icon: <PieChartIcon />, link: '/' },
    { label: 'Order Report', icon: <SignalCellularAltIcon />, link: '/' },
    { label: 'DeliveryMan Report', icon: <DataUsageIcon />, link: '/' },
    { label: 'Product Report', icon: <BubbleChartIcon />, link: '/' },
    { label: 'Sale Report', icon: <SignalCellularAltIcon />, link: '/' },
    { label: 'Customer', icon: <AccountCircleIcon />, link: '/' ,
      submenu: [
        { label: 'List' ,icon:<HorizontalRuleIcon />, link: '' },
        
        
      ],
    },
    { label: 'Customer Wallet', icon: <WalletIcon />, link: '/' ,
      submenu: [
        { label: 'Add Fund' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Report' ,icon:<HorizontalRuleIcon />, link: '' },
        {label:'Wallet Bonus Setup' ,icon:<HorizontalRuleIcon />,link:''},
        
      ],
    },
    { label: 'Customer Loyality Point', icon: <WorkspacePremiumOutlinedIcon />, link: '/',
      submenu: [
        { label: 'Report' ,icon:<HorizontalRuleIcon />, link: '' },
      
      ],
     },
    { label: 'Subscribe Emails', icon: <MailOutlineIcon />, link: '/' },
    { label: 'DeliveryMan', icon: <PersonIcon />, link: '/',
      submenu: [
        { label: 'DeliveryMan List' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Add New Delivery Man' ,icon:<HorizontalRuleIcon />, link: '' },
        {label:'New Joining Request' ,icon:<HorizontalRuleIcon />,link:''},
        {label:'DeliveryMan Review' ,icon:<HorizontalRuleIcon />,link:''},
      ],
     },
    { label: 'Employees', icon: <PersonAddAltIcon  />, link: '/',
      submenu: [
        { label: 'Employee Role Setup' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Employee Setup' ,icon:<HorizontalRuleIcon />, link: '' },
        
      ],
     },
    { label: 'Business Setup', icon: <SettingsSuggestIcon />, link: '/' },
    { label: 'Email Template', icon: <EmailIcon />, link: '/' },
    { label: 'Branch Setup', icon: <StoreOutlinedIcon />, link: '/' ,
      submenu: [
        { label: 'Add new' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'List' ,icon:<HorizontalRuleIcon />, link: '' },
        
      ],
    },
    { label: 'Page & Media', icon: <PermMediaIcon />, link: '/' ,
      submenu: [
        { label: 'Page Setup' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Social Media' ,icon:<HorizontalRuleIcon />, link: '' },
        
      ],
    },
    { label: '3rd Party', icon: <DirectionsRunIcon />, link: '/',
      submenu: [
        { label: '3rd Party Configuration' ,icon:<HorizontalRuleIcon />, link: '' },
        { label: 'Offline Payment Method' ,icon:<HorizontalRuleIcon />, link: '' },
        { label:'Firebase Notification' ,icon:<HorizontalRuleIcon />,link:''}
        
      ],
     },
    { label: 'System Setup', icon: <GppGoodOutlinedIcon  />, link: '/' },
    { label: 'System Addons', icon: <AddCircleOutlineIcon />, link: '/' },
    
  

  
   
    { label: 'Logout', icon: <ExitToAppIcon />, link: '/' },
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    // Check if the main menu item label matches the search term
    if (item.label.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    // Check if any submenu item label matches the search term
    if (item.submenu) {
      const foundInSubmenu = item.submenu.some(subitem =>
        subitem.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return foundInSubmenu;
    }
    return false;
  });

  return (
    <div
        className={`flex ${
          isOpen ? "" : "md:flex-col"
        } flex-auto flex-shrink-0`}
      >
      <div
          className={`${
            isOpen ? "block" : "hidden md:block"
          } fixed  top-0 left-0 w-64 bg-white h-full border-r overflow-y-auto z-50`}
        >
          <div className="fixed top-0 z-50 left-0 p-3 px-14 w-full flex h-14 border-b bg-white text-black">
            <div className="font-bold text-xl">My Software</div>
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-14 space-y-1">
        <li className="px-5">
          <div className="relative mt-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 text-sm bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 105.291 14.032l4.387 4.387a.75.75 0 001.06-1.061l-4.387-4.387A8 8 0 0010 2zm-6.5 8a6.5 6.5 0 1111.703 4.259.75.75 0 00-.11.119L17.573 19l-.707.707-4.287-4.287a.75.75 0 00-.119-.11A6.48 6.48 0 013.5 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>
            {item.submenu ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(item.label.toLowerCase())}
                  className="relative flex flex-row items-center w-full h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    {/* Render Material UI icon here */}
                    {item.icon}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {item.label}
                  </span>
                  <svg
                    className={`${
                      isDropdownOpen[item.label.toLowerCase()]
                        ? "transform rotate-180"
                        : ""
                    } w-4 h-4 ml-auto`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Render submenu items */}
                {isDropdownOpen[item.label.toLowerCase()] && (
                  <ul className="ml-4 mt-2">
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex}>
                        <a
                          href={subitem.link}
                          className="block px-4 py-1 text-sm text-gray-700 hover:text-indigo-700 flex items-center"
                        >
                          {/* Render submenu item icon here */}
                          {subitem.icon && (
                            <span className="inline-flex items-center mr-3">
                              {subitem.icon}
                            </span>
                          )}
                          {subitem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              // Render regular items without dropdown
              <a
                href={item.link}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-indigo-700 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  {/* Render Material UI icon here */}
                  {item.icon}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  {item.label}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
      </div>

     <div className="fixed top-0 w-full md:pl-64 z-50">
          <div className="bg-indigo-500 text-white h-14 w-full flex items-center justify-end px-5">
            <div className="media-body d-flex align-items-end flex-column flex flex-col">
              <span className="card-title h5">Admin</span>
              
            </div>
            <div className="relative flex items-center pl-2">
              {islockMenu && (
                <div className="absolute right-0 mt-48 bg-white shadow-lg py-2 w-48">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                </div>
              )}
              <button onClick={lockDropdown} className="focus:outline-none">
                <img
                  src="https://i.pinimg.com/564x/4a/43/da/4a43da03892a2dc31b77e7e1f7853676.jpg"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full cursor-pointer"
                />
              </button>
              </div>
          </div>
</div>
<button
          className="fixed md:hidden left-0 top-0 mt-2 ml-4 p-2  rounded-lg text-white z-50"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
    </div>
  );
};

export default SideBar;
