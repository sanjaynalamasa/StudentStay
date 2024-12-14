import React from 'react';
import { Repeat, MapPin, Calendar } from 'lucide-react';

const RoomSwap = () => {
  const swapListings = [
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
    },
    // Add more swap listings as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Swap</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Looking to swap your room with another student? Browse available swap opportunities
          or create your own listing.
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Post Swap Request
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {swapListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={listing.image}
              alt={listing.currentLocation}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-center text-indigo-600 mb-4">
                <div className="flex items-center">
                  <MapPin size={20} />
                  <span className="ml-1">{listing.currentLocation}</span>
                </div>
                <Repeat size={20} className="mx-4" />
                <div className="flex items-center">
                  <MapPin size={20} />
                  <span className="ml-1">{listing.desiredLocation}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{listing.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{listing.reason}</p>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Contact for Swap
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSwap;