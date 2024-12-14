// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">StudentStay</h3>
//             <p className="text-gray-400">
//               Making student housing search simple, secure, and affordable.
//             </p>
//             <div className="mt-4 flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li><Link to="/" className="hover:text-white">Home</Link></li>
//               <li><Link to="/listings" className="hover:text-white">Listings</Link></li>
//               <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//               <li><Link to="/signin" className="hover:text-white">Sign In</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Support</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="#" className="hover:text-white">Help Center</a></li>
//               <li><a href="#" className="hover:text-white">Safety Information</a></li>
//               <li><a href="#" className="hover:text-white">Cancellation Options</a></li>
//               <li><a href="#" className="hover:text-white">Contact Us</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>Email: sanjaynalamasa07@gmail.com</li>
//               <li>Phone: (91+) 8919753387</li>
//               <li>Address: Warangal, College Town</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-8 pt-8 border-t border-gray-700">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400">&copy; 2024 StudentStay. All rights reserved.</p>
//             <div className="mt-4 md:mt-0 space-x-4 text-gray-400">
//               <a href="#" className="hover:text-white">Privacy Policy</a>
//               <a href="#" className="hover:text-white">Terms of Service</a>
//               <a href="#" className="hover:text-white">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


















import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Linkedin} from 'lucide-react';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show the button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Attach the scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StudentStay</h3>
            <p className="text-gray-400">
              Making student housing search simple, secure, and affordable.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/share/rfsa6MydgBs22Eai/?mibextid=qi2Omg" target="_blank" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/sanjay_nalamasa?t=MTBgu5KhXvxFCgKlrSdvmA&s=09" target="_blank" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/sanjaysig_?igsh=Nzh1aDhyaWRqbmk2" target= "_blank" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="mailto:sanjaynalamasa07@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanjay-nalamasa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target= "_blank" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/listings" className="hover:text-white">Listings</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/signin" className="hover:text-white">Sign In</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Safety Information</a></li>
              <li><a href="#" className="hover:text-white">Cancellation Options</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: sanjaynalamasa07@gmail.com</li>
              <li>Phone: (91+) 8919753387</li>
              <li>Address: Warangal, College Town</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 StudentStay. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4 text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
  {/* Made with ❤️ by Sanjay Nalamasa */}
  <div className="text-center mt-8 text-gray-400">
        <p>Made with ❤️ by <span className="font-semibold text-white">Sanjay Nalamasa</span></p>
      </div>
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-white-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
