import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ADMIN LAYOUT (SHELL)
 * This component controls the dashboard structure:
 * - Sidebar navigation
 * - Top identity display
 * - Outlet for nested admin pages
 */
const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { to: '/dashboard', label: '📊 Overview', end: true },
    { to: '/dashboard/members', label: '👥 Members' },
    { to: '/dashboard/events', label: '📅 Events' },
    { to: '/dashboard/donations', label: '🪙 Donations' },
    { to: '/dashboard/reports', label: '📈 Reports' }
  ];

  return (
    <div className="min-h-screen flex bg-neutral-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-neutral-900 text-white flex flex-col">

        {/* Header */}
        <div className="p-5 border-b border-neutral-800">
          <p className="text-xs text-amber-400 uppercase tracking-widest">
            Admin Panel
          </p>
          <p className="text-sm font-semibold">
            {user?.name || 'Administrator'}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm transition ${
                  isActive
                    ? 'bg-amber-500 text-black'
                    : 'text-gray-300 hover:bg-neutral-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer buttons */}
        <div className="p-4 border-t border-neutral-800 space-y-2">
          <button
            onClick={() => navigate('/')}
            className="w-full text-sm py-2 border border-neutral-700 rounded"
          >
            Exit
          </button>

          <button
            onClick={() => logout().then(() => navigate('/login'))}
            className="w-full text-sm py-2 bg-red-600 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;