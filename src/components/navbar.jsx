import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-gray-800/50">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-white-600/70 to-purple-500/70 rounded-lg backdrop-blur-sm border border-gray-600/30 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent">
              Puzzled
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              to="/explorer"
              className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
            >
              Explorer
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gray-400/0 via-gray-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link
              to="/blocks"
              className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
            >
              Blocks
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gray-400/0 via-gray-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link
              to="/transactions"
              className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
            >
              Transactions
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gray-400/0 via-purple-400/40 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Connect Wallet Button */}
          <button className="px-6 py-2.5 bg-gradient-to-r from-gray-600/60 to-purple-600/60 rounded-lg backdrop-blur-sm border border-gray-600/30 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300">
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent">
              Connect Wallet
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
