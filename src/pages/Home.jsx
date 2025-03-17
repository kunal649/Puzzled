import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Code,
  Globe,
  Lock,
  Shield,
} from "lucide-react";

export default function BlockchainLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6"></header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated blockchain background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black"></div>
            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-0 top-0 w-full h-full border-[1px] border-blue-500/20 grid grid-cols-6 grid-rows-6">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-blue-500/10 relative">
                    {Math.random() > 0.7 && (
                      <div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating blockchain nodes */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-blue-500/20 animate-pulse"
                  style={{
                    width: `${Math.random() * 20 + 5}px`,
                    height: `${Math.random() * 20 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 5 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Animated connection lines */}
            <div className="absolute inset-0">
              <svg
                className="w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="line-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <line
                  x1="10%"
                  y1="20%"
                  x2="40%"
                  y2="60%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="30%"
                  y1="10%"
                  x2="70%"
                  y2="40%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="60%"
                  y1="30%"
                  x2="90%"
                  y2="70%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="20%"
                  y1="80%"
                  x2="60%"
                  y2="30%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="80%"
                  y1="10%"
                  x2="40%"
                  y2="70%"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </line>
              </svg>
            </div>

            {/* Dark maze overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/90 to-black"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-lg text-sm font-medium mb-6">
                    Next Generation Blockchain
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                    Learn. Earn. Win
                  </h1>
                  <p className="mt-6 text-lg text-gray-300 max-w-lg">
                    Navigate our crypto maze, solve blockchain challenges, and
                    earn real rewards while learning Web3 fundamentals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 h-12 px-6 rounded-md">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 h-12 px-6 rounded-md">
                    How It Works
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-800"
                      />
                    ))}
                  </div>
                  <span>
                    Will be Joined by 100+ crypto learners by end of this month
                  </span>
                </div>
              </div>

              {/* Laptop Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                <div className="relative">
                  {/* Laptop Base */}
                  <div className="relative mx-auto w-full max-w-[640px]">
                    {/* Laptop Screen */}
                    <div className="relative pt-[56.25%] rounded-t-xl overflow-hidden bg-gray-900 border-2 border-gray-800">
                      {/* Screen Content - Replace with your screenshot */}
                      <div className="absolute inset-[2px] rounded-t-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                        <img
                          src="/placeholder.svg?height=720&width=1280"
                          alt="Screenshot"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Screen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"></div>
                    </div>
                    {/* Laptop Base */}
                    <div className="relative h-[20px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg mx-auto w-[90%]">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[4px] bg-gray-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Glassmorphism card overlays */}
                  <div className="absolute -bottom-10 -left-10 w-64 h-32 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">
                          Crypto Challenges Completed
                        </h3>
                        <p className="text-xs text-gray-400">
                          12/25 Web3 Concepts Mastered
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-5 -right-5 w-64 h-32 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">
                          Today's Earnings
                        </h3>
                        <p className="text-xs text-gray-400">
                          42.5 $PUZZL Earned
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gamified Learning Features
            </h2>
            <p className="text-gray-400">
              Our crypto maze combines interactive education with blockchain
              rewards, transforming Web3 learning into an engaging adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6 text-blue-400" />,
                title: "Wallet Integration",
                description:
                  "Connect your Web3 wallet to track earnings, showcase achievements, and manage crypto rewards.",
              },
              {
                icon: <Code className="w-6 h-6 text-purple-400" />,
                title: "Smart Contracts",
                description:
                  "Earn verified NFT badges and $PUZZL tokens for every completed challenge and correct MCQ answer",
              },
              {
                icon: <Globe className="w-6 h-6 text-cyan-400" />,
                title: "Progressive Learning Path",
                description:
                  "Start with blockchain basics and advance through DeFi, NFTs, and DAO governance systems.",
              },
              {
                icon: <Lock className="w-6 h-6 text-blue-400" />,
                title: "Interactive Crypto Maze",
                description:
                  "Explore a dynamic blockchain-themed labyrinth filled with Web3 knowledge vaults and hidden crypto challenges.",
              },
              {
                icon: <ArrowRight className="w-6 h-6 text-purple-400" />,
                title: "Live Leaderboards",
                description:
                  "Compete with other learners and climb ranks based on knowledge gained and tokens earned.",
              },
              {
                icon: <ChevronRight className="w-6 h-6 text-cyan-400" />,
                title: "Scalable Architecture",
                description:
                  "Our platform scales seamlessly to handle many transactions .",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

            <div className="relative p-12 md:p-20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Decode Web3?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join our alpha testers to experience the future of crypto
                  education. First 100 players receive bonus $PUZZL tokens!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-gray-900 hover:bg-gray-100 h-12 px-8 rounded-md">
                    Get Started Now
                  </button>
                  <button className="border border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-md">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold">BlockChain</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Building the future of decentralized technology.
                </p>
                <div className="flex gap-4">
                  {["Twitter", "GitHub", "Discord", "LinkedIn"].map(
                    (social) => (
                      <Link
                        key={social}
                        to="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-4 h-4" />
                      </Link>
                    )
                  )}
                </div>
              </div>

              {[
                {
                  title: "Product",
                  links: [
                    "Features",
                    "Security",
                    "Team",
                    "Enterprise",
                    "Pricing",
                    "Resources",
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    "Documentation",
                    "API Reference",
                    "Guides",
                    "Examples",
                    "Community",
                    "Help",
                  ],
                },
                {
                  title: "Company",
                  links: [
                    "About Us",
                    "Blog",
                    "Careers",
                    "Press",
                    "Contact",
                    "Partners",
                  ],
                },
              ].map((column, index) => (
                <div key={index}>
                  <h3 className="font-medium mb-4">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          to="#"
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} BlockChain. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link
                  to="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
