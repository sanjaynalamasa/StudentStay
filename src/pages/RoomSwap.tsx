// import React from 'react';
// import { Repeat, MapPin, Calendar } from 'lucide-react';

// const RoomSwap = () => {
//   const swapListings = [
//     {
//       id: 1,
//       currentLocation: "Modern Studio near University",
//       desiredLocation: "College District",
//       duration: "3 months (April - June)",
//       reason: "Looking for a place closer to campus",
//       contact: "john.doe@email.com",
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 2,
//       currentLocation: "Shared Student Apartment",
//       desiredLocation: "University Heights",
//       duration: "4 months (May - August)",
//       reason: "Seeking a quieter neighborhood",
//       contact: "jane.smith@email.com",
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     // Add more swap listings as needed
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Swap</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Looking to swap your room with another student? Browse available swap opportunities
//           or create your own listing.
//         </p>
//         <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
//           Post Swap Request
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {swapListings.map((listing) => (
//           <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src={listing.image}
//               alt={listing.currentLocation}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <div className="flex items-center justify-center text-indigo-600 mb-4">
//                 <div className="flex items-center">
//                   <MapPin size={20} />
//                   <span className="ml-1">{listing.currentLocation}</span>
//                 </div>
//                 <Repeat size={20} className="mx-4" />
//                 <div className="flex items-center">
//                   <MapPin size={20} />
//                   <span className="ml-1">{listing.desiredLocation}</span>
//                 </div>
//               </div>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <Calendar size={16} className="mr-2" />
//                 <span>{listing.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-4">{listing.reason}</p>
//               <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
//                 Contact for Swap
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomSwap;























import { useState } from 'react';
import { Repeat, MapPin, Calendar } from 'lucide-react';

// Define the type for swap listings
type SwapListing = {
  id: number;
  currentLocation: string;
  desiredLocation: string;
  duration: string;
  reason: string;
  contact: string;
  image: string;
};

const RoomSwap = () => {
  // Sample data
  const swapListings: SwapListing[] = [
    {
      id: 1,
      currentLocation: "Modern Studio near University",
      desiredLocation: "College District",
      duration: "3 months (April - June)",
      reason: "Looking for a place closer to campus",
      contact: "sanjaynalamasa07@gmail.com",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      currentLocation: "Shared Student Apartment",
      desiredLocation: "University Heights",
      duration: "4 months (May - August)",
      reason: "Seeking a quieter neighborhood",
      contact: "sanjay.nalamasa@gmail.com",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    // Add more listings as needed
  ];

  const [selectedListing, setSelectedListing] = useState<SwapListing | null>(null);

  // Handlers
  const handleContactClick = (listing: SwapListing) => {
    setSelectedListing(listing);
    alert(`Contact details: ${listing.contact}`);
  };

  const handleSwapRequestClick = (listing: SwapListing) => {
    setSelectedListing(listing);
    alert(
      `You are requesting a swap:\n\nFrom: ${listing.currentLocation}\nTo: ${listing.desiredLocation}`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Swap</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Looking to swap your room with another student? Browse available swap opportunities or create your own listing.
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Post Swap Request
        </button>
      </div>

      {/* Listings Grid */}
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

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleContactClick(listing)}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Contact for Swap
                </button>
                <button
                  onClick={() => handleSwapRequestClick(listing)}
                  className="w-full bg-gray-100 text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Request Swap
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Listing Modal */}
      {selectedListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Swap Request Details</h2>
            <p>
              <strong>Current Location:</strong> {selectedListing.currentLocation}
            </p>
            <p>
              <strong>Desired Location:</strong> {selectedListing.desiredLocation}
            </p>
            <p>
              <strong>Duration:</strong> {selectedListing.duration}
            </p>
            <p>
              <strong>Reason:</strong> {selectedListing.reason}
            </p>
            <p>
              <strong>Contact:</strong> {selectedListing.contact}
            </p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => setSelectedListing(null)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => alert('Swap confirmed!')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Confirm Swap
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomSwap;
