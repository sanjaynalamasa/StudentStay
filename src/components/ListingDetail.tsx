// import React from 'react';
// import { MapPin, Star, Wifi, Home, Users, Calendar, Shield } from 'lucide-react';
// import { useParams } from 'react-router-dom';



// const ListingDetail = () => {
//   const { id } = useParams();
  
//   // Mock data - in a real app, this would come from an API
//   const listing = {
//     id: parseInt(id || '1'),
//     title: "Modern Studio near University",
//     location: "Downtown Campus Area",
//     price: "$800/month",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     description: "This beautiful studio apartment is perfect for students. Located just 5 minutes from campus, it offers modern amenities and a comfortable living space.",
//     amenities: ["WiFi", "Kitchen", "Laundry", "Security", "Study Area"],
//     images: [
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     ],
//     features: [
//       { icon: Home, text: "Fully Furnished" },
//       { icon: Wifi, text: "High-Speed Internet" },
//       { icon: Users, text: "Common Area" },
//       { icon: Calendar, text: "Flexible Lease" },
//       { icon: Shield, text: "24/7 Security" }
//     ]
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//           <img
//             src={listing.images[0]}
//             alt={listing.title}
//             className="w-full h-96 object-cover rounded-lg"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             {listing.images.slice(1).map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${listing.title} ${index + 2}`}
//                 className="w-full h-44 object-cover rounded-lg"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Listing Details */}
//         <div className="p-6">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
//               <p className="mt-2 flex items-center text-gray-600">
//                 <MapPin size={20} className="mr-2" />
//                 {listing.location}
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-3xl font-bold text-indigo-600">{listing.price}</p>
//               <div className="flex items-center mt-2">
//                 <Star size={20} className="text-yellow-400 fill-current" />
//                 <span className="ml-1 text-gray-600">{listing.rating}</span>
//               </div>
//             </div>
//           </div>

//           <p className="mt-6 text-gray-600">{listing.description}</p>

//           {/* Features */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//               {listing.features.map(({ icon: Icon, text }, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center p-3 bg-gray-50 rounded-lg"
//                 >
//                   <Icon size={20} className="text-indigo-600 mr-2" />
//                   <span className="text-gray-700">{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Button */}
//           <div className="mt-8">
//             <button className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
//               Contact Landlord
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;



























import { MapPin, Star, Wifi, Home, Users, Calendar, Shield } from 'lucide-react';
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>(); // TypeScript type for `useParams`

  // Mock data - replace with an API call in real scenarios
  const listing = {
    id: parseInt(id || '1', 10),
    title: "Modern Studio near University",
    location: "Downtown Campus Area",
    price: "$800/month",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    description:
      "This beautiful studio apartment is perfect for students. Located just 5 minutes from campus, it offers modern amenities and a comfortable living space.",
    amenities: ["WiFi", "Kitchen", "Laundry", "Security", "Study Area"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      { icon: Home, text: "Fully Furnished" },
      { icon: Wifi, text: "High-Speed Internet" },
      { icon: Users, text: "Common Area" },
      { icon: Calendar, text: "Flexible Lease" },
      { icon: Shield, text: "24/7 Security" },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <img
            src={listing.images[0]}
            alt={`Main image of ${listing.title}`}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            {listing.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional image ${index + 2} of ${listing.title}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Listing Details */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
              <p className="mt-2 flex items-center text-gray-600">
                <MapPin size={20} className="mr-2" />
                {listing.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-indigo-600">{listing.price}</p>
              <div className="flex items-center mt-2">
                <Star size={20} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{listing.rating}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-600">{listing.description}</p>

          {/* Features */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {listing.features.map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <Icon size={20} className="text-indigo-600 mr-2" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-8">
            <button
              className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={() => alert("Contact Landlord clicked")}
            >
              Contact Landlord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
