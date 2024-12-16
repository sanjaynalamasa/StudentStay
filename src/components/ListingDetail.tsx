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














import React from 'react';
import { MapPin, Star, Wifi, Home, Users, Calendar, Shield } from 'lucide-react';
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const listing = {
    id: parseInt(id || '1'),
    title: "Modern Studio near University",
    location: "Downtown Campus Area",
    price: "$800/month",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    description: "This beautiful studio apartment is perfect for students. Located just 5 minutes from campus, it offers modern looks and a comfortable living space.",
    amenities: ["WiFi", "Kitchen", "Laundry", "Security", "Study Area"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      { icon: Home, text: "Fully Furnished" },
      { icon: Wifi, text: "High-Speed Internet" },
      { icon: Users, text: "Common Area" },
      { icon: Calendar, text: "Flexible Lease" },
      { icon: Shield, text: "24/7 Security" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            {listing.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${listing.title} ${index + 2}`}
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
              onClick={() => {
                window.location.href = "tel:+918919753387";
              }}
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





















//strat
// import React, { useState, useEffect } from 'react';
// import { Star, ThumbsUp, Trash } from 'lucide-react';

// const Reviews = () => {
//   const loadReviews = () => {
//     const storedReviews = localStorage.getItem('reviews');
//     return storedReviews ? JSON.parse(storedReviews) : [
//       {
//         id: 1,
//         author: "Sarah Johnson",
//         property: "Modern Studio near University",
//         rating: 5,
//         date: "March 15, 2024",
//         content: "Amazing place! The location is perfect for students, and the amenities are exactly as described. The landlord is very responsive and helpful.",
//         helpful: 12,
//         image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//       },
//       {
//         id: 2,
//         author: "Michael Chen",
//         property: "Shared Student Apartment",
//         rating: 4,
//         date: "March 10, 2024",
//         content: "Great value for money. The common areas are well-maintained, and the roommates are friendly. Only minor issue is the occasional noise from the street.",
//         helpful: 8,
//         image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//       },
//     ];
//   };

//   const [reviews, setReviews] = useState(loadReviews);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newReview, setNewReview] = useState({
//     author: '',
//     property: '',
//     rating: 0,
//     content: '',
//   });

//   const [password, setPassword] = useState('');
//   const [deleteReviewId, setDeleteReviewId] = useState<number | null>(null);
//   const [passwordError, setPasswordError] = useState('');

//   const updateLocalStorage = (reviews: any) => {
//     localStorage.setItem('reviews', JSON.stringify(reviews));
//   };

//   const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setNewReview((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleRatingChange = (rating: number) => {
//     setNewReview((prevState) => ({
//       ...prevState,
//       rating,
//     }));
//   };

//   const handleSubmitReview = () => {
//     if (newReview.author && newReview.property && newReview.rating > 0 && newReview.content) {
//       const newReviewData = {
//         id: reviews.length + 1,
//         ...newReview,
//         date: new Date().toLocaleDateString(),
//         helpful: 0,
//         image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
//       };
//       const updatedReviews = [...reviews, newReviewData];
//       setReviews(updatedReviews);
//       updateLocalStorage(updatedReviews);
//       setIsModalOpen(false);
//       setNewReview({ author: '', property: '', rating: 0, content: '' });
//     } else {
//       alert('Please fill in all fields to submit your review.');
//     }
//   };

//   const handleDeleteReview = (id: number) => {
//     if (password === '9963324060@') {
//       const updatedReviews = reviews.filter((review) => review.id !== id);
//       setReviews(updatedReviews);
//       updateLocalStorage(updatedReviews);
//       setPassword('');
//       setPasswordError('');
//     } else {
//       setPasswordError('Incorrect password. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
//       {/* Reviews */}
//       <div className="space-y-8">
//         {reviews.map((review) => (
//           <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-start">
//               <img
//                 src={review.image}
//                 alt={review.property}
//                 className="w-24 h-24 rounded-lg object-cover"
//               />
//               <div className="ml-6 flex-1">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">{review.property}</h3>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         className={`${
//                           i < review.rating
//                             ? 'text-yellow-400 fill-current'
//                             : 'text-gray-300'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="mt-2 text-gray-600">{review.content}</p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="text-sm text-gray-500">
//                     <span>{review.author}</span>
//                     <span className="mx-2">•</span>
//                     <span>{review.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                       <ThumbsUp size={16} className="mr-1" />
//                       <span>Helpful ({review.helpful})</span>
//                     </button>
//                     <button
//                       onClick={() => setDeleteReviewId(review.id)}
//                       className="text-red-600 hover:text-red-800 flex items-center space-x-1"
//                     >
//                       <Trash size={16} className="mr-1" />
//                       <span>Delete</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Button to Open Modal for Writing a Review */}
//       <div className="mt-8 text-center">
//         <button
//           className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Write a Review
//         </button>
//       </div>

//       {/* Modal for Writing a Review */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-sm w-full">
//             <h3 className="text-2xl font-semibold mb-4">Write a Review</h3>
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="author"
//                 value={newReview.author}
//                 onChange={handleReviewChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 placeholder="Your Name"
//               />
//               <input
//                 type="text"
//                 name="property"
//                 value={newReview.property}
//                 onChange={handleReviewChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 placeholder="Property Name"
//               />
//               <div className="flex items-center space-x-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={24}
//                     className={`${
//                       i < newReview.rating
//                         ? 'text-yellow-400 fill-current cursor-pointer'
//                         : 'text-gray-300 fill-current cursor-pointer'
//                     }`}
//                     onClick={() => handleRatingChange(i + 1)}
//                   />
//                 ))}
//               </div>
//               <textarea
//                 name="content"
//                 value={newReview.content}
//                 onChange={handleReviewChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 placeholder="Write your review here..."
//                 rows={4}
//               />
//               <div className="flex justify-between items-center">
//                 <button
//                   className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
//                   onClick={handleSubmitReview}
//                 >
//                   Submit Review
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Password Modal for Deleting a Review */}
//       {deleteReviewId !== null && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-sm w-full">
//             <h3 className="text-2xl font-semibold mb-4">Enter Password to Delete Review</h3>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//               placeholder="Password"
//             />
//             {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
//             <div className="flex justify-between items-center">
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
//                 onClick={() => setDeleteReviewId(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
//                 onClick={() => handleDeleteReview(deleteReviewId)}
//               >
//                 Delete Review
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Reviews;
























// import React from 'react';
// import { MapPin, Star, Wifi, Home, Users, Calendar, Shield } from 'lucide-react';
// import { useParams, useNavigate } from 'react-router-dom';

// const ListingDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

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

//   const goToNextListing = () => {
//     navigate(`/listings/${listing.id + 1}`); // Navigate to the next listing
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

//           {/* Buttons */}
//           <div className="mt-8 flex flex-col md:flex-row md:space-x-4">
//             <button
//               className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors mb-4 md:mb-0"
//               onClick={() => {
//                 window.location.href = "tel:+918919753387";
//               }}
//             >
//               Contact Landlord
//             </button>
//             <button
//               className="w-full md:w-auto bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
//               onClick={goToNextListing}
//             >
//               Next Listing
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;



















// import { MapPin, Star, Wifi, Home, Users, Calendar, Shield } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// const ListingDetail = () => {
//   const { id } = useParams<{ id: string }>(); // TypeScript type for `useParams`

//   // Mock data - replace with an API call in real scenarios
//   const listing = {
//     id: parseInt(id || '1', 10),
//     title: "Modern Studio near University",
//     location: "Downtown Campus Area",
//     price: "$800/month",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     description:
//       "This beautiful studio apartment is perfect for students. Located just 5 minutes from campus, it offers modern amenities and a comfortable living space.",
//     amenities: ["WiFi", "Kitchen", "Laundry", "Security", "Study Area"],
//     images: [
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     ],
//     features: [
//       { icon: Home, text: "Fully Furnished" },
//       { icon: Wifi, text: "High-Speed Internet" },
//       { icon: Users, text: "Common Area" },
//       { icon: Calendar, text: "Flexible Lease" },
//       { icon: Shield, text: "24/7 Security" },
//     ],
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//           <img
//             src={listing.images[0]}
//             alt={`Main image of ${listing.title}`}
//             className="w-full h-96 object-cover rounded-lg"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             {listing.images.slice(1).map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Additional image ${index + 2} of ${listing.title}`}
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
//             <button
//               className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
//               onClick={() => alert("Contact Landlord clicked")}
//             >
//               Contact Landlord
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;





















// import { MapPin, Star, Wifi, Home, Users, Calendar, Shield } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// interface ListingFeature {
//   icon: React.ComponentType<{ size: number; className?: string }>;
//   text: string;
// }

// interface Listing {
//   id: number;
//   title: string;
//   location: string;
//   price: string;
//   image: string;
//   rating: number;
//   description: string;
//   amenities: string[];
//   images: string[];
//   features: ListingFeature[];
// }

// const ListingDetail = () => {
//   const { id } = useParams<{ id: string }>();

//   // Mock data - replace with an API call in real scenarios
//   const listing: Listing = {
//     id: parseInt(id || '1', 10),
//     title: "Modern Studio near University",
//     location: "Downtown Campus Area",
//     price: "$800/month",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     description:
//       "This beautiful studio apartment is perfect for students. Located just 5 minutes from campus, it offers modern amenities and a comfortable living space.",
//     amenities: ["WiFi", "Kitchen", "Laundry", "Security", "Study Area"],
//     images: [
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     ],
//     features: [
//       { icon: Home, text: "Fully Furnished" },
//       { icon: Wifi, text: "High-Speed Internet" },
//       { icon: Users, text: "Common Area" },
//       { icon: Calendar, text: "Flexible Lease" },
//       { icon: Shield, text: "24/7 Security" },
//     ],
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//           <img
//             src={listing.images[0]}
//             alt={`Main image of ${listing.title}`}
//             className="w-full h-96 object-cover rounded-lg"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             {listing.images.slice(1).map((image: string, index: number) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Additional image ${index + 2} of ${listing.title}`}
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
//               {listing.features.map(({ icon: Icon, text }: ListingFeature, index: number) => (
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
//             <button
//               className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
//               onClick={() => alert("Contact Landlord clicked")}
//             >
//               Contact Landlord
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;


