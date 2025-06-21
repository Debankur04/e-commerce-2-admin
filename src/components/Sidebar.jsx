import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const links = [
    { to: "/add", label: "Add Items", icon: assets.add_icon },
    { to: "/list", label: "List Items", icon: assets.order_icon },
    { to: "/orders", label: "Orders", icon: assets.order_icon },
  ];

  const linkClasses = ({ isActive }) =>
    `text-white hover:bg-[#5e6775] transition-all duration-200 flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${
      isActive ? 'bg-[#4A5568] border-l-4' : ''
    }`;

  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-[#2D3748]'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        {links.map(({ to, label, icon }) => (
          <NavLink key={to} to={to} className={linkClasses}>
            <img className='w-5 h-5' src={icon} alt={`${label} icon`} />
            <p className='hidden md:block'>{label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
