import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md border-t border-gray-200 py-6 w-full">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          
          

          
          <nav className="flex flex-wrap justify-center space-x-6 text-gray-600 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Pricing</a>
            <a href="#" className="hover:text-gray-900">About us</a>
            <a href="#" className="hover:text-gray-900">Features</a>
            <a href="#" className="hover:text-gray-900">Help Center</a>
            <a href="#" className="hover:text-gray-900">Contact us</a>
            <a href="#" className="hover:text-gray-900">FAQs</a>
            <a href="#" className="hover:text-gray-900">Careers</a>
          </nav>
        </div>

        
        <hr className="border-gray-300 mb-4" />

        
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© 2025 Brand, Inc. • <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">Terms</a> • <a href="#" className="hover:underline">Sitemap</a></p>

          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="text-blue-700 hover:text-blue-800"><FaFacebookF /></a>
            <a href="#" className="text-blue-600 hover:text-blue-700"><FaLinkedinIn /></a>
            <a href="#" className="text-red-500 hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
