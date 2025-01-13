// src/components/layout/Sidebar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Sidebar = () => {
  const menuItems = [
    { icon: '🏠', label: 'Home', href: '/' },
    { icon: '🔍', label: 'Explore', href: '/explore' },
    { icon: '🔔', label: 'Notifications', href: '/notifications' },
    { icon: '✉️', label: 'Messages', href: '/messages' },
    { icon: '👥', label: 'Communities', href: '/communities' },
    { icon: '👤', label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="fixed h-screen w-64 border-r border-gray-700 p-4">
      <Link href="/" className="mb-4 block">
        <div className="text-2xl font-bold">X</div>
      </Link>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-4 p-3 hover:bg-gray-800 rounded-full"
          >
            <span>{item.icon}</span>
            <span className="text-xl">{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <button className="w-full bg-blue-500 text-white rounded-full py-3 mt-4">
        Post
      </button>
    </div>
  );
};