import React from 'react';
import { Shield, Users, Home, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'Every property is verified to ensure safety and authenticity for our students.'
    },
    {
      icon: Users,
      title: 'Student Community',
      description: 'Join a thriving community of students and find the perfect roommates.'
    },
    {
      icon: Home,
      title: 'Quality Housing',
      description: 'Carefully curated properties that meet student needs and budgets.'
    },
    {
      icon: Trophy,
      title: 'Best Support',
      description: '24/7 support to help you find and secure your ideal student housing.'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About StudentStay
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to make student housing search simple, secure, and affordable.
            Your perfect home away from home is just a few clicks away.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Our Story
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
              <p>
                StudentStay was founded by former students who experienced firsthand the
                challenges of finding suitable accommodation while studying. We understand
                the unique needs of students and the importance of having a comfortable,
                safe, and affordable place to call home during your academic journey.
              </p>
              <p>
                Today, we're proud to help thousands of students find their perfect
                housing solution. Our platform combines cutting-edge technology with
                personal service to make the housing search process as smooth as possible.
              </p>
              <p>
                We work closely with property owners and universities to ensure that all
                listings meet our high standards for quality and safety. Our team is
                dedicated to providing exceptional support throughout your entire journey,
                from search to move-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;