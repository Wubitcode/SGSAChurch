import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


// Comprehensive administrative navigation menu options array
  const navItems = [
    { label: '👥 Member Registry', path: '/dashboard/members' },
    { label: '🪙 Tithes & Contributions', path: '/dashboard/tithes' },
    { label: '📋 Attendance tracking', path: '/dashboard/attendance' },
    { label: '📣 Bulletin Board', path: '/dashboard/announcements' }, // ADDED BULLETIN TAB MAPPING
  ];

const DashboardLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  // Main administrative navigation link mappings
  const navItems = [
    { label: '👥 Member Registry', path: '/dashboard/members' },
    { label: '🪙 Tithes & Contributions', path: '/dashboard/tithes' },
  ];

  return (
    <div className="flex h-screen bg-neutral-100 font-sans">
      {/* Fixed Vertical Navigation Panel */}
      <aside className="w-64 bg-churchDark text-white flex flex-col justify-between border-r border-neutral-800">
        <div>
          {/* Dashboard Title Header Block */}
          <div className="p-5 border-b border-neutral-800 bg-neutral-950">
            <h2 className="text-sm font-black text-churchGold uppercase tracking-widest">Gabriel & Arsema</h2>
            <p className="text-xs text-neutral-400 mt-0.5">Administrative Console</p>
          </div>
          

          {/* Action Links List */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-bold transition ${
                    isActive
                      ? 'bg-churchGold text-neutral-950 shadow-md'
                      : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Session Section Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/50 flex items-center justify-between">
          <div className="truncate pr-2">
            <p className="text-xs font-bold text-neutral-200 truncate">{user?.username || 'Admin Account'}</p>
            <p className="text-[10px] text-neutral-500 uppercase font-black tracking-wider">System Operator</p>
          </div>
          <button 
            onClick={handleLogout}
            className="text-xs font-bold bg-neutral-800 hover:bg-churchCrimson text-neutral-300 hover:text-white px-3 py-1.5 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Panel Content Viewing Window */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Dynamic Context Header Strip */}
        <header className="h-14 bg-white border-b border-neutral-200 flex items-center px-8 justify-between shadow-sm z-10">
          <h1 className="text-sm font-extrabold uppercase tracking-wider text-neutral-700">
            {navItems.find(item => location.pathname === item.path)?.label || 'System Core Control Panel'}
          </h1>
          <div className="text-xs font-semibold text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-200">
            Bilingual Ledger Mode Active (EN/AM)
          </div>
        </header>

        {/* Workspace Canvas Layer */}
        <section className="flex-1 overflow-y-auto p-8 bg-neutral-50">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;