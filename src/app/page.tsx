// src/app/page.tsx
'use client';
import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TweetInput } from '@/components/feed/TweetInput';
import { Tweet } from '@/components/feed/Tweet';

const sampleTweet = {
  id: '1',
  author: {
    name: 'Elon Musk',
    username: 'elonmusk',
    verified: true,
    avatar: '/avatar.jpg'
  },
  content: 'Is this accurate?',
  timestamp: '7h',
  media: {
    type: 'article',
    content: 'Designated terrorist group to host Islamic supremacy conference in Mississauga'
  },
  interactions: {
    replies: 1234,
    reposts: 567,
    likes: 8901,
    views: 1000000
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen ml-64">
          <div className="max-w-2xl border-x border-gray-700">
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur">
              <div className="flex justify-between px-4 py-3 border-b border-gray-700">

                <div className="flex space-x-4">
                  <button>For you</button>
                  <button className="text-gray-500">Following</button>
                </div>
              </div>
            </div>
            <TweetInput />
            <Tweet tweet={sampleTweet} />
            {/* Add more tweets here */}
          </div>
        </main>
        
        {/* Right sidebar */}
        <div className="w-96 p-4 hidden xl:block">
          <div className="sticky top-0">
            <div className="bg-gray-900 rounded-full mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent p-3 pl-12 rounded-full"
              />
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4">
              <h2 className="text-xl font-bold mb-4">Try Premium for free today</h2>
              <p className="mb-4">Upgrade your experience with less ads, power tools, and more with Premium.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Start free 14-day trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}