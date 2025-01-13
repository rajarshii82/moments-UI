// src/data/mockData.ts
import { Category, Company } from '../types';

export const categories: Category[] = [
  { 
    name: "Home & Garden",
    companies: 2345,
    href: "/categories/home-garden"
  },
  { 
    name: "Electronics",
    companies: 1897,
    href: "/categories/electronics"
  },
  { 
    name: "Fashion & Accessories",
    companies: 1654,
    href: "/categories/fashion"
  },
  { 
    name: "Health & Wellness",
    companies: 1432,
    href: "/categories/health"
  },
  { 
    name: "Travel & Leisure",
    companies: 1234,
    href: "/categories/travel"
  }
];

export const featuredCompanies: Company[] = [
  { 
    name: "TechGear Pro",
    rating: 4.8,
    reviews: 1234,
    description: "Leading electronics retailer",
    href: "/companies/techgear-pro"
  },
  {
    name: "HomeStyle",
    rating: 4.7,
    reviews: 987,
    description: "Premium home furnishings",
    href: "/companies/homestyle"
  },
  {
    name: "HealthFirst",
    rating: 4.9,
    reviews: 2156,
    description: "Healthcare solutions",
    href: "/companies/healthfirst"
  }
];