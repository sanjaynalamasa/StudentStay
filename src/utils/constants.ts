export const MOCK_LISTINGS = [
  {
    id: 1,
    title: "Modern Studio near University",
    location: "Downtown Campus Area",
    price: "$800/month",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    amenities: ["WiFi", "Kitchen", "Laundry"]
  },
  {
    id: 2,
    title: "Shared Student Apartment",
    location: "College District",
    price: "$500/month",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    amenities: ["WiFi", "Gym", "Study Room"]
  },
  {
    id: 3,
    title: "Cozy Private Room",
    location: "University Heights",
    price: "$600/month",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    amenities: ["WiFi", "Parking", "Security"]
  }
];

export const MOCK_REVIEWS = [
  {
    id: 1,
    author: "Sarah Johnson",
    property: "Modern Studio near University",
    rating: 5,
    date: "March 15, 2024",
    content: "Amazing place! The location is perfect for students, and the amenities are exactly as described. The landlord is very responsive and helpful.",
    helpful: 12,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    author: "Michael Chen",
    property: "Shared Student Apartment",
    rating: 4,
    date: "March 10, 2024",
    content: "Great value for money. The common areas are well-maintained, and the roommates are friendly. Only minor issue is the occasional noise from the street.",
    helpful: 8,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export const MOCK_SWAP_LISTINGS = [
  {
    id: 1,
    currentLocation: "Modern Studio near University",
    desiredLocation: "College District",
    duration: "3 months (April - June)",
    reason: "Looking for a place closer to campus",
    contact: "john.doe@email.com",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    currentLocation: "Shared Student Apartment",
    desiredLocation: "University Heights",
    duration: "4 months (May - August)",
    reason: "Seeking a quieter neighborhood",
    contact: "jane.smith@email.com",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];