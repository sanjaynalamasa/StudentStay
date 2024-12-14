import React, { useState } from 'react';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  // Mock data - in a real app, this would come from an API
  const listings = [
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
    },
    // Add more listings here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location or property name..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="0-500">$0 - $500</option>
              <option value="501-1000">$501 - $1000</option>
              <option value="1001+">$1001+</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Filter size={20} />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <Link
            key={listing.id}
            to={`/listing/${listing.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-semibold">{listing.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{listing.title}</h3>
              <p className="mt-2 flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                {listing.location}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-indigo-600">{listing.price}</span>
                <div className="flex gap-2">
                  {listing.amenities.slice(0, 2).map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listings;