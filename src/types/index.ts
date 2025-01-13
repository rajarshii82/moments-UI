// src/types/index.ts
export interface Tweet {
    id: string;
    author: {
      name: string;
      username: string;
      verified: boolean;
      avatar: string;
    };
    content: string;
    timestamp: string;
    media?: {
      type: 'image' | 'article';
      content: string;
    };
    interactions?: {
      replies?: number;
      reposts?: number;
      likes?: number;
      views?: number;
    };
  }