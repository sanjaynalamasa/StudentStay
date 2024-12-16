// import React from 'react';
// import { Star, ThumbsUp } from 'lucide-react';

// const Reviews = () => {
//   const reviews = [
//     {
//       id: 1,
//       author: "Sarah Johnson",
//       property: "Modern Studio near University",
//       rating: 5,
//       date: "March 15, 2024",
//       content: "Amazing place! The location is perfect for students, and the amenities are exactly as described. The landlord is very responsive and helpful.",
//       helpful: 12,
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 2,
//       author: "Michael Chen",
//       property: "Shared Student Apartment",
//       rating: 4,
//       date: "March 10, 2024",
//       content: "Great value for money. The common areas are well-maintained, and the roommates are friendly. Only minor issue is the occasional noise from the street.",
//       helpful: 8,
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     // Add more reviews as needed
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
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
//                   <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                     <ThumbsUp size={16} className="mr-1" />
//                     <span>Helpful ({review.helpful})</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reviews;



















// import React, { useState } from 'react';
// import { Star, ThumbsUp } from 'lucide-react';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       author: "Sarah Johnson",
//       property: "Modern Studio near University",
//       rating: 5,
//       date: "March 15, 2024",
//       content: "Amazing place! The location is perfect for students, and the amenities are exactly as described. The landlord is very responsive and helpful.",
//       helpful: 12,
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 2,
//       author: "Michael Chen",
//       property: "Shared Student Apartment",
//       rating: 4,
//       date: "March 10, 2024",
//       content: "Great value for money. The common areas are well-maintained, and the roommates are friendly. Only minor issue is the occasional noise from the street.",
//       helpful: 8,
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//   ]);
  
//   // State for showing the modal and new review input
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newReview, setNewReview] = useState({
//     author: '',
//     property: '',
//     rating: 0,
//     content: '',
//   });

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
//       setReviews([...reviews, newReviewData]);
//       setIsModalOpen(false);
//       setNewReview({ author: '', property: '', rating: 0, content: '' });
//     } else {
//       alert('Please fill in all fields to submit your review.');
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
//                   <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                     <ThumbsUp size={16} className="mr-1" />
//                     <span>Helpful ({review.helpful})</span>
//                   </button>
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
//     </div>
//   );
// };

// export default Reviews;


























// import React, { useState } from 'react';
// import { Trash, Star, ThumbsUp } from 'lucide-react';

// // Define the Review interface to avoid 'any' type
// interface Review {
//   id: number;
//   author: string;
//   property: string;
//   rating: number;
//   date: string;
//   content: string;
//   helpful: number;
//   image: string;
// }

// const ListingDetail = () => {
//   const [reviews, setReviews] = useState<Review[]>([
//     {
//       id: 1,
//       author: "Sarah Johnson",
//       property: "Modern Studio near University",
//       rating: 5,
//       date: "March 15, 2024",
//       content: "Amazing place! The location is perfect for students, and the amenities are exactly as described. The landlord is very responsive and helpful.",
//       helpful: 12,
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 2,
//       author: "Michael Chen",
//       property: "Shared Student Apartment",
//       rating: 4,
//       date: "March 10, 2024",
//       content: "Great value for money. The common areas are well-maintained, and the roommates are friendly. Only minor issue is the occasional noise from the street.",
//       helpful: 8,
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     // Add more reviews if needed
//   ]);

//   const [password, setPassword] = useState('');
//   const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

//   const handleDeleteReview = (reviewId: number) => {
//     if (password === '9963324060@') {
//       setReviews(reviews.filter((review) => review.id !== reviewId));
//       setPassword('');
//       setIsPasswordCorrect(true); // Reset password validity after deletion
//     } else {
//       setIsPasswordCorrect(false); // Invalid password
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
//       {/* Password Input */}
//       <div className="mb-4">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password to delete review"
//           className="border border-gray-300 rounded-md p-2 w-full"
//         />
//         {!isPasswordCorrect && (
//           <p className="text-red-600 mt-2">Incorrect password. Please try again.</p>
//         )}
//       </div>

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
//                   <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                     <ThumbsUp size={16} className="mr-1" />
//                     <span>Helpful ({review.helpful})</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Delete Button */}
//             <button
//               onClick={() => handleDeleteReview(review.id)}
//               className="mt-4 flex items-center text-red-600 hover:text-red-700"
//             >
//               <Trash size={16} className="mr-1" />
//               <span>Delete Review</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;






















// import React, { useState } from 'react';
// import { Trash, Star, ThumbsUp } from 'lucide-react';

// // Define the Review interface to avoid 'any' type
// interface Review {
//   id: number;
//   author: string;
//   property: string;
//   rating: number;
//   date: string;
//   content: string;
//   helpful: number;
//   image: string;
// }

// const ListingDetail = () => {
//   const [reviews, setReviews] = useState<Review[]>([
//     {
//       id: 1,
//       author: "Sarah Johnson",
//       property: "Modern Studio near University",
//       rating: 5,
//       date: "March 15, 2024",
//       content: "Amazing place! The location is perfect for students, and the amenities are exactly as described. The landlord is very responsive and helpful.",
//       helpful: 12,
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 2,
//       author: "Michael Chen",
//       property: "Shared Student Apartment",
//       rating: 4,
//       date: "March 10, 2024",
//       content: "Great value for money. The common areas are well-maintained, and the roommates are friendly. Only minor issue is the occasional noise from the street.",
//       helpful: 8,
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
//     },
//     // Add more reviews if needed
//   ]);

//   const [newReview, setNewReview] = useState({
//     author: "",
//     property: "",
//     rating: 0,
//     content: "",
//   });
//   const [password, setPassword] = useState('');
//   const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

//   const handleSubmitReview = () => {
//     const newReviewData = {
//       id: reviews.length + 1,
//       author: newReview.author,
//       property: newReview.property,
//       rating: newReview.rating,
//       date: new Date().toLocaleDateString(),
//       content: newReview.content,
//       helpful: 0,
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" // Placeholder image
//     };
    
//     setReviews([newReviewData, ...reviews]);
//     setNewReview({ author: "", property: "", rating: 0, content: "" });
//   };

//   const handleDeleteReview = (reviewId: number) => {
//     if (password === '9963324060@') {
//       setReviews(reviews.filter((review) => review.id !== reviewId));
//       setPassword('');
//       setIsPasswordCorrect(true); // Reset password validity after deletion
//     } else {
//       setIsPasswordCorrect(false); // Invalid password
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
//       {/* Submit Review Form */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h3>
//         <input
//           type="text"
//           placeholder="Your name"
//           className="border border-gray-300 rounded-md p-2 w-full mb-4"
//           value={newReview.author}
//           onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Property name"
//           className="border border-gray-300 rounded-md p-2 w-full mb-4"
//           value={newReview.property}
//           onChange={(e) => setNewReview({ ...newReview, property: e.target.value })}
//         />
//         <textarea
//           placeholder="Write your review"
//           className="border border-gray-300 rounded-md p-2 w-full mb-4"
//           value={newReview.content}
//           onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
//         />
//         <div className="flex mb-4">
//           {[1, 2, 3, 4, 5].map((ratingValue) => (
//             <Star
//               key={ratingValue}
//               size={24}
//               className={`cursor-pointer ${newReview.rating >= ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
//               onClick={() => setNewReview({ ...newReview, rating: ratingValue })}
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleSubmitReview}
//           className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//         >
//           Submit Review
//         </button>
//       </div>

//       {/* Password Input for Deleting Review */}
//       <div className="mb-4">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password to delete review"
//           className="border border-gray-300 rounded-md p-2 w-full"
//         />
//         {!isPasswordCorrect && (
//           <p className="text-red-600 mt-2">Incorrect password. Please try again.</p>
//         )}
//       </div>

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
//                   <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                     <ThumbsUp size={16} className="mr-1" />
//                     <span>Helpful ({review.helpful})</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Delete Button */}
//             <button
//               onClick={() => handleDeleteReview(review.id)}
//               className="mt-4 flex items-center text-red-600 hover:text-red-700"
//             >
//               <Trash size={16} className="mr-1" />
//               <span>Delete Review</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;



















// import React, { useState, useEffect } from 'react';
// import { Trash, Star, ThumbsUp } from 'lucide-react';

// // Define the Review interface to avoid 'any' type
// interface Review {
//   id: number;
//   author: string;
//   property: string;
//   rating: number;
//   date: string;
//   content: string;
//   helpful: number;
//   image: string;
// }

// const ListingDetail = () => {
//   // Retrieve reviews from localStorage or use an empty array if not available
//   const loadReviews = () => {
//     const savedReviews = localStorage.getItem('reviews');
//     return savedReviews ? JSON.parse(savedReviews) : [];
//   };

//   const [reviews, setReviews] = useState<Review[]>(loadReviews());
//   const [newReview, setNewReview] = useState({
//     author: "",
//     property: "",
//     rating: 0,
//     content: "",
//   });
//   const [password, setPassword] = useState('');
//   const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

//   // Save reviews to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('reviews', JSON.stringify(reviews));
//   }, [reviews]);

//   const handleSubmitReview = () => {
//     const newReviewData = {
//       id: reviews.length + 1,
//       author: newReview.author,
//       property: newReview.property,
//       rating: newReview.rating,
//       date: new Date().toLocaleDateString(),
//       content: newReview.content,
//       helpful: 0,
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" // Placeholder image
//     };
    
//     setReviews([newReviewData, ...reviews]);
//     setNewReview({ author: "", property: "", rating: 0, content: "" });
//   };

//   const handleDeleteReview = (reviewId: number) => {
//     if (password === '9963324060@') {
//       setReviews(reviews.filter((review) => review.id !== reviewId));
//       setPassword('');
//       setIsPasswordCorrect(true); // Reset password validity after deletion
//     } else {
//       setIsPasswordCorrect(false); // Invalid password
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
//       {/* Submit Review Form */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h3>
//         <input
//           type="text"
//           placeholder="Your name"
//           className="border border-gray-300 rounded-md p-2 w-full mb-4"
//           value={newReview.author}
//           onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Property name"
//           className="border border-gray-300 rounded-md p-2 w-full mb-4"
//           value={newReview.property}
//           onChange={(e) => setNewReview({ ...newReview, property: e.target.value })}
//         />
//         <textarea
//           placeholder="Write your review"
//           className="border border-gray-300 rounded-md p-2 w-full mb-4"
//           value={newReview.content}
//           onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
//         />
//         <div className="flex mb-4">
//           {[1, 2, 3, 4, 5].map((ratingValue) => (
//             <Star
//               key={ratingValue}
//               size={24}
//               className={`cursor-pointer ${newReview.rating >= ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
//               onClick={() => setNewReview({ ...newReview, rating: ratingValue })}
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleSubmitReview}
//           className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//         >
//           Submit Review
//         </button>
//       </div>

//       {/* Password Input for Deleting Review */}
//       <div className="mb-4">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password to delete review"
//           className="border border-gray-300 rounded-md p-2 w-full"
//         />
//         {!isPasswordCorrect && (
//           <p className="text-red-600 mt-2">Incorrect password. Please try again.</p>
//         )}
//       </div>

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
//                   <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                     <ThumbsUp size={16} className="mr-1" />
//                     <span>Helpful ({review.helpful})</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Delete Button */}
//             <button
//               onClick={() => handleDeleteReview(review.id)}
//               className="mt-4 flex items-center text-red-600 hover:text-red-700"
//             >
//               <Trash size={16} className="mr-1" />
//               <span>Delete Review</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListingDetail;































import React, { useState, useEffect } from 'react';
import { Trash, Star, ThumbsUp } from 'lucide-react';

// Define the Review interface to avoid 'any' type
interface Review {
  id: number;
  author: string;
  property: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  image: string;
}

const ListingDetail = () => {
  // Retrieve reviews from localStorage or use an empty array if not available
  const loadReviews = () => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  };

  const [reviews, setReviews] = useState<Review[]>(loadReviews());
  const [newReview, setNewReview] = useState({
    author: "",
    property: "",
    rating: 0,
    content: "",
  });
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null); // State to track which review is being deleted

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmitReview = () => {
    const newReviewData = {
      id: reviews.length + 1,
      author: newReview.author,
      property: newReview.property,
      rating: newReview.rating,
      date: new Date().toLocaleDateString(),
      content: newReview.content,
      helpful: 0,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" // Placeholder image
    };
    
    setReviews([newReviewData, ...reviews]);
    setNewReview({ author: "", property: "", rating: 0, content: "" });
  };

  const handleDeleteClick = (reviewId: number) => {
    setReviewToDelete(reviewId); // Set the review id to be deleted
  };

  const handleDeleteReview = () => {
    if (password === '9963324060@' && reviewToDelete !== null) {
      setReviews(reviews.filter((review) => review.id !== reviewToDelete));
      setPassword('');
      setIsPasswordCorrect(true); // Reset password validity after deletion
      setReviewToDelete(null); // Reset the review ID to null after deletion
    } else {
      setIsPasswordCorrect(false); // Invalid password
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
      {/* Submit Review Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h3>
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={newReview.author}
          onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Property name"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={newReview.property}
          onChange={(e) => setNewReview({ ...newReview, property: e.target.value })}
        />
        <textarea
          placeholder="Write your review"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={newReview.content}
          onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
        />
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((ratingValue) => (
            <Star
              key={ratingValue}
              size={24}
              className={`cursor-pointer ${newReview.rating >= ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
              onClick={() => setNewReview({ ...newReview, rating: ratingValue })}
            />
          ))}
        </div>
        <button
          onClick={handleSubmitReview}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Submit Review
        </button>
      </div>

      {/* Password Input for Deleting Review */}
      {reviewToDelete !== null && (
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password to delete review"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {!isPasswordCorrect && (
            <p className="text-red-600 mt-2">Incorrect password. Please try again.</p>
          )}
          <button
            onClick={handleDeleteReview}
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
          >
            Confirm Delete
          </button>
        </div>
      )}

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <img
                src={review.image}
                alt={review.property}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="ml-6 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{review.property}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{review.content}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>{review.author}</span>
                    <span className="mx-2">•</span>
                    <span>{review.date}</span>
                  </div>
                  <button className="flex items-center text-gray-500 hover:text-indigo-600">
                    <ThumbsUp size={16} className="mr-1" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteClick(review.id)}
              className="mt-4 flex items-center text-red-600 hover:text-red-700"
            >
              <Trash size={16} className="mr-1" />
              <span>Delete Review</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingDetail;


