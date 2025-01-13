// src/components/feed/Tweet.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { Tweet as TweetType } from '@/types';

export const Tweet: React.FC<{ tweet: TweetType }> = ({ tweet }) => {
  return (
    <div className="border-b border-gray-700 p-4 hover:bg-gray-900/50">
      <div className="flex space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{tweet.author.name}</span>
            {tweet.author.verified && (
              <span className="text-blue-500">✓</span>
            )}
            <span className="text-gray-500">@{tweet.author.username}</span>
            <span className="text-gray-500">· {tweet.timestamp}</span>
          </div>
          <p className="mt-2">{tweet.content}</p>
          {tweet.media && (
            <div className="mt-4 rounded-xl overflow-hidden">
              {tweet.media.type === 'image' ? (
                <img
                  src={tweet.media.content}
                  alt="Tweet media"
                  className="w-full object-cover"
                />
              ) : (
                <div className="border border-gray-700 rounded-xl p-4">
                  {tweet.media.content}
                </div>
              )}
            </div>
          )}
          {tweet.interactions && (
            <div className="flex justify-between mt-4 text-gray-500">
              <button className="hover:text-blue-500">
                💬 {tweet.interactions.replies}
              </button>
              <button className="hover:text-green-500">
                🔄 {tweet.interactions.reposts}
              </button>
              <button className="hover:text-red-500">
                ❤️ {tweet.interactions.likes}
              </button>
              <button className="hover:text-blue-500">
                📊 {tweet.interactions.views}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};