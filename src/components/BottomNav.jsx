import React, { useState } from 'react';
import { Home, FileText, User } from 'lucide-react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'documents', icon: FileText, label: 'Documents' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Navigation Container */}
      <nav className="bg-[#1C1C1E] text-white rounded-3xl py-4 px-6 flex justify-around items-center shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative p-2 focus:outline-none transition-colors duration-200"
              aria-label={item.label}
            >
              <Icon
                size={22}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;