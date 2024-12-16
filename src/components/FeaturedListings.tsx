// import React from 'react';
// import { MapPin, Star, Users } from 'lucide-react';
// const FeaturedListings = () => {
//   const listings = [
//     {
//       id: 1,
//       title: "Modern Studio near University",
//       location: "Downtown Campus Area",
//       price: "$800/month",
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       rating: 4.8,
//       amenities: ["WiFi", "Kitchen", "Laundry"]
//     },
//     {
//       id: 2,
//       title: "Shared Student Apartment",
//       location: "College District",
//       price: "$500/month",
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       rating: 4.5,
//       amenities: ["WiFi", "Gym", "Study Room"]
//     },
//     {
//       id: 3,
//       title: "Cozy Private Room",
//       location: "University Heights",
//       price: "$600/month",
//       image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       rating: 4.7,
//       amenities: ["WiFi", "Parking", "Security"]
//     }
//   ];

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Listings</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {listings.map((listing) => (
//             <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
//                   <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors onClick={ListingDetail.tsx}">
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
































// // import React from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import for navigation
// // import { MapPin, Star } from 'lucide-react';

// // const FeaturedListings = () => {
// //   const navigate = useNavigate(); // Hook to programmatically navigate

// //   const listings = [
// //     {
// //       id: 1,
// //       title: "Modern Studio near University",
// //       location: "Downtown Campus Area",
// //       price: "$800/month",
// //       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       rating: 4.8,
// //       amenities: ["WiFi", "Kitchen", "Laundry"],
// //     },
// //     {
// //       id: 2,
// //       title: "Shared Student Apartment",
// //       location: "College District",
// //       price: "$500/month",
// //       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       rating: 4.5,
// //       amenities: ["WiFi", "Gym", "Study Room"],
// //     },
// //     {
// //       id: 3,
// //       title: "Cozy Private Room",
// //       location: "University Heights",
// //       price: "$600/month",
// //       image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       rating: 4.7,
// //       amenities: ["WiFi", "Parking", "Security"],
// //     },
// //   ];

// //   const handleViewDetails = (id) => {
// //     navigate(`/details/${id}`); // Navigates to the details page with the ID
// //   };

// //   return (
// //     <div className="py-16 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Listings</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {listings.map((listing) => (
// //             <div
// //               key={listing.id}
// //               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
// //             >
// //               <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
// //               <div className="p-6">
// //                 <div className="flex justify-between items-start">
// //                   <h3 className="text-xl font-semibold text-gray-900">{listing.title}</h3>
// //                   <span className="flex items-center text-indigo-600">
// //                     <Star size={16} className="fill-current" />
// //                     <span className="ml-1">{listing.rating}</span>
// //                   </span>
// //                 </div>
// //                 <p className="mt-2 flex items-center text-gray-600">
// //                   <MapPin size={16} className="mr-1" />
// //                   {listing.location}
// //                 </p>
// //                 <div className="mt-4 flex items-center justify-between">
// //                   <span className="text-xl font-bold text-indigo-600">{listing.price}</span>
// //                   <button
// //                     onClick={() => handleViewDetails(listing.id)} // Attach click handler here
// //                     className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
// //                   >
// //                     View Details
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedListings;




























// import React, { useState } from 'react';
// import { MapPin, Star } from 'lucide-react';

// // Define the listing type
// type Listing = {
//   id: number;
//   title: string;
//   location: string;
//   price: string;
//   image: string;
//   rating: number;
//   amenities: string[];
// };

// const FeaturedListings: React.FC = () => {
//   const [selectedListing, setSelectedListing] = useState<Listing | null>(null); // State to track the selected listing

//   const listings: Listing[] = [
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

//   const handleViewDetails = (listing: Listing) => {
//     setSelectedListing(listing); // Set the selected listing
//   };

//   const closeDetails = () => {
//     setSelectedListing(null); // Reset the selected listing to close details view
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
//                     onClick={() => handleViewDetails(listing)}
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {selectedListing && (
//           <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                 onClick={closeDetails}
//               >
//                 &times;
//               </button>
//               <img
//                 src={selectedListing.image}
//                 alt={selectedListing.title}
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedListing.title}</h3>
//               <p className="text-gray-700 mb-2">
//                 <strong>Location:</strong> {selectedListing.location}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Price:</strong> {selectedListing.price}
//               </p>
//               <p className="text-gray-700 mb-4">
//                 <strong>Amenities:</strong> {selectedListing.amenities.join(', ')}
//               </p>
//               <button
//                 onClick={closeDetails}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeaturedListings;





// import React, { useState } from 'react';
// import { MapPin, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // Define the listing type
// type Listing = {
//   id: number;
//   title: string;
//   location: string;
//   price: string;
//   image: string;
//   rating: number;
//   amenities: string[];
// };

// const FeaturedListings: React.FC = () => {
//   const [selectedListing, setSelectedListing] = useState<Listing | null>(null); // State to track the selected listing
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const listings: Listing[] = [
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

//   const handleViewDetails = (listing: Listing) => {
//     setSelectedListing(listing); // Set the selected listing
//   };

//   const closeDetails = () => {
//     setSelectedListing(null); // Reset the selected listing to close details view
//   };

//   const handleBookListing = () => {
//     navigate('/listings'); // Navigate to Listings route
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
//                     onClick={() => handleViewDetails(listing)}
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {selectedListing && (
//           <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                 onClick={closeDetails}
//               >
//                 &times;
//               </button>
//               <img
//                 src={selectedListing.image}
//                 alt={selectedListing.title}
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedListing.title}</h3>
//               <p className="text-gray-700 mb-2">
//                 <strong>Location:</strong> {selectedListing.location}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Price:</strong> {selectedListing.price}
//               </p>
//               <p className="text-gray-700 mb-4">
//                 <strong>Amenities:</strong> {selectedListing.amenities.join(', ')}
//               </p>
//               <div className="flex space-x-4">
//                 <button
//                   onClick={closeDetails}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={handleBookListing} // Add functionality for the BOOK button
//                   className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
//                 >
//                   BOOK
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeaturedListings;














import React, { useState } from 'react';
import { MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define the listing type
type Listing = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  rating: number;
  amenities: string[];
};

const FeaturedListings: React.FC = () => {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null); // State to track the selected listing
  const navigate = useNavigate(); // Initialize useNavigate hook

  const listings: Listing[] = [
    {
      id: 1,
      title: "Modern Studio near University",
      location: "Downtown Campus Area",
      price: "$800/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      amenities: ["WiFi", "Kitchen", "Laundry"],
    },
    {
      id: 2,
      title: "Shared Student Apartment",
      location: "College District",
      price: "$500/month",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      amenities: ["WiFi", "Gym", "Study Room"],
    },
    {
      id: 3,
      title: "Cozy Private Room",
      location: "University Heights",
      price: "$600/month",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      amenities: ["WiFi", "Parking", "Security"],
    },
  ];

  const handleViewDetails = (listing: Listing) => {
    setSelectedListing(listing); // Set the selected listing
  };

  const closeDetails = () => {
    setSelectedListing(null); // Reset the selected listing to close details view
  };

  const handleBookListing = () => {
    if (selectedListing) {
      // Navigate to the Listings route and pass the selected listing as state
      navigate('/listings', { state: { listing: selectedListing } });
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Listings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                  <button
                    onClick={() => handleViewDetails(listing)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedListing && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeDetails}
              >
                &times;
              </button>
              <img
                src={selectedListing.image}
                alt={selectedListing.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedListing.title}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {selectedListing.location}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Price:</strong> {selectedListing.price}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Amenities:</strong> {selectedListing.amenities.join(', ')}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={closeDetails}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleBookListing} // Book button to navigate to Listings route with selected listing
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Choose Your Rooms:)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedListings;

