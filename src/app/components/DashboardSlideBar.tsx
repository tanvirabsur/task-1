"use client"
import { useState } from 'react';
import { Menu, X, Home, BarChart3, Users, Settings, LogOut } from 'lucide-react';

export default function DashboardSlideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: BarChart3, label: 'addproduct', href: '/dashboard/addproduct' },
    { icon: Users, label: 'Team', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 flex flex-col relative h-full`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800  ">
          {sidebarOpen && <h1 className="text-xl font-bold">Dashboard</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group"
            >
              <item.icon size={20} className="flex-shrink-0" />
              {sidebarOpen && (
                <span className="text-sm font-medium group-hover:text-white">
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-800 p-2">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <LogOut size={20} className="flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
     
    </div>
  );
}