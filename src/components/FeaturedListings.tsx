import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';
const FeaturedListings = () => {
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
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{listing.title}</h3>
                  <span className="flex items-center text-indigo-600">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1">{listing.rating}</span>
                  </span>
                </div>
                <p className="mt-2 flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  {listing.location}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-indigo-600">{listing.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors onClick={ListingDetail.tsx}">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
































// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import for navigation
// import { MapPin, Star } from 'lucide-react';

// const FeaturedListings = () => {
//   const navigate = useNavigate(); // Hook to programmatically navigate

//   const listings = [
//     {
//       id: 1,
//       title: "Modern Studio near University",
//       location: "Downtown Campus Area",
//       price: "$800/month",
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       rating: 4.8,
//       amenities: ["WiFi", "Kitchen", "Laundry"],
//     },
//     {
//       id: 2,
//       title: "Shared Student Apartment",
//       location: "College District",
//       price: "$500/month",
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       rating: 4.5,
//       amenities: ["WiFi", "Gym", "Study Room"],
//     },
//     {
//       id: 3,
//       title: "Cozy Private Room",
//       location: "University Heights",
//       price: "$600/month",
//       image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       rating: 4.7,
//       amenities: ["WiFi", "Parking", "Security"],
//     },
//   ];

//   const handleViewDetails = (id) => {
//     navigate(`/details/${id}`); // Navigates to the details page with the ID
//   };

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Listings</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {listings.map((listing) => (
//             <div
//               key={listing.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//             >
//               <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-xl font-semibold text-gray-900">{listing.title}</h3>
//                   <span className="flex items-center text-indigo-600">
//                     <Star size={16} className="fill-current" />
//                     <span className="ml-1">{listing.rating}</span>
//                   </span>
//                 </div>
//                 <p className="mt-2 flex items-center text-gray-600">
//                   <MapPin size={16} className="mr-1" />
//                   {listing.location}
//                 </p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-xl font-bold text-indigo-600">{listing.price}</span>
//                   <button
//                     onClick={() => handleViewDetails(listing.id)} // Attach click handler here
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedListings;





























