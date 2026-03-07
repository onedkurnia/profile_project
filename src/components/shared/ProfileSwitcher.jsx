import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileSwitcher = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-10 z-[100] bg-slate-900 border-b border-slate-700 flex items-center justify-center gap-6">
      <span className="text-slate-500 text-xs tracking-widest uppercase mr-2 hidden sm:inline">
        Profiles
      </span>
      <NavLink
        to="/denione"
        className={({ isActive }) =>
          `text-sm font-semibold px-3 py-1 rounded-full transition-all ${
            isActive
              ? 'bg-sky-500 text-white'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`
        }
      >
        Deni One
      </NavLink>
      <span className="text-slate-600 text-lg leading-none">·</span>
      <NavLink
        to="/vincensia"
        className={({ isActive }) =>
          `text-sm font-semibold px-3 py-1 rounded-full transition-all ${
            isActive
              ? 'bg-pink-500 text-white'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`
        }
      >
        Vincensia
      </NavLink>
    </div>
  );
};

export default ProfileSwitcher;
