import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#264653] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-[#264653] mb-6">Page Not Found</h2>
        <p className="text-xl text-[#2a9d8f] mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-[#2a9d8f] text-white font-medium rounded-lg hover:bg-[#264653] transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
