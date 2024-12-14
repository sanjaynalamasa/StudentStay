export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  rating: number;
  amenities: string[];
  description?: string;
  features?: Array<{
    icon: any;
    text: string;
  }>;
  images?: string[];
}

export interface Review {
  id: number;
  author: string;
  property: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  image: string;
}

export interface SwapListing {
  id: number;
  currentLocation: string;
  desiredLocation: string;
  duration: string;
  reason: string;
  contact: string;
  image: string;
}