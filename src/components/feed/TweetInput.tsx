// src/components/feed/TweetInput.tsx
'use client';
import React from 'react';

export const TweetInput = () => {
  return (
    <div className="border-b border-gray-700 p-4">
      <div className="flex space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-700" />
        <div className="flex-1">
          <textarea
            placeholder="What is happening?!"
            className="w-full bg-transparent text-xl border-none focus:ring-0 resize-none"
            rows={3}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
              <button className="text-blue-500">📷</button>
              <button className="text-blue-500">📊</button>
              <button className="text-blue-500">😊</button>
              <button className="text-blue-500">📍</button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};