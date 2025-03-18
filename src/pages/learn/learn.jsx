import { useContext, useState } from "react";
import { useWallet } from "../../context/context.jsx";
import { Link } from "react-router-dom";

const Learn = () => {
  const { walletConnected, walletAddress, connectWallet, eduTokens } =
    useWallet();
  const [lockedCards, setLockedCards] = useState([
    "Advanced Security",
    "Blockchain 101",
  ]);

  const unlockCard = (card) => {
    if (!walletConnected) {
      alert("Connect your wallet to unlock this card.");
      return;
    }
    if (eduTokens < 0.002) {
      alert("Not enough EDU tokens to unlock this card.");
      return;
    }
    setLockedCards(lockedCards.filter((c) => c !== card));
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Learn Web Technologies</h1>

      {/* Wallet Section */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg">
        {walletConnected ? (
          <p className="text-green-400">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </p>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-purple-600 px-4 py-2 rounded-lg"
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">HTML & CSS Basics</h2>
          <p className="text-gray-400">
            Learn the fundamentals of web development.
          </p>
          <Link
            to="/learn/html-css"
            className="text-purple-400 hover:underline"
          >
            Start Learning
          </Link>
        </div>

        {lockedCards.includes("Advanced Security") ? (
          <div className="bg-gray-900 p-6 rounded-lg shadow-md opacity-50">
            <h2 className="text-xl font-semibold">Advanced Security</h2>
            <p className="text-gray-400">Requires 0.002 EDU Tokens</p>
            <button
              className="mt-3 px-4 py-2 bg-purple-600 rounded-lg"
              onClick={() => unlockCard("Advanced Security")}
            >
              Unlock
            </button>
          </div>
        ) : (
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Advanced Security</h2>
            <p className="text-gray-400">Explore deeper security principles.</p>
            <Link
              to="/learn/security"
              className="text-purple-400 hover:underline"
            >
              Start Learning
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
