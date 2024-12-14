import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const Reviews = () => {
  const reviews = [
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
    },
    // Add more reviews as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h1>
      
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;