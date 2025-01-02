import Link from "next/link";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-wrap justify-between items-center">

          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">My Assignment</h2>
            <p className="text-gray-400 text-sm">Your one-stop solution for everything.</p>
          </div>
  
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/Clint" className="hover:underline">Clint side</Link>
            <Link href="/Server" className="hover:underline">Server side</Link>
          </div>
  
          <div className="flex gap-4 mt-4 lg:mt-0">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
           </div>
           </div>
  
        <div className="text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  