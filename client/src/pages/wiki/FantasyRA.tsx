import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ApiStatus {
  status: string;
  service: string;
}

const FantasyRA: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<ApiStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/health`);
        if (!response.ok) {
          throw new Error('API is not responding');
        }
        const data = await response.json();
        setApiStatus(data);
      } catch (err) {
        setError('Failed to connect to the API. Please ensure the backend server is running.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkApiStatus();
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">FantasyRA</h1>
        <div className="flex justify-center gap-4 mb-6">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Racing Game</span>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Fantasy</span>
        </div>
      </header>

      {/* Game Info Box */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Game Overview</h2>
            <p className="mb-4">
              FantasyRA is an immersive fantasy racing game that combines high-speed racing with magical elements. 
              Race through mystical landscapes, upgrade your vehicles with enchanted components, and compete against 
              other racers in a world where technology and magic collide.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="font-bold">Developer</h3>
                <p>Fantasy Studios</p>
              </div>
              <div>
                <h3 className="font-bold">Publisher</h3>
                <p>Epic Games</p>
              </div>
              <div>
                <h3 className="font-bold">Release Date</h3>
                <p>2023</p>
              </div>
              <div>
                <h3 className="font-bold">Genre</h3>
                <p>Racing, Fantasy, Action</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-md w-full h-full flex flex-col items-center justify-center space-y-4">
              <div className="text-5xl mb-2">🎮</div>
              <p className="text-sm text-gray-600">Game Cover Art</p>
              
              {/* API Status Indicator */}
              <div className="mt-4 p-3 rounded-lg text-sm w-full text-center">
                {loading ? (
                  <div className="text-blue-600">Checking API status...</div>
                ) : error ? (
                  <div className="text-red-600">
                    <p>⚠️ {error}</p>
                    <p className="text-xs mt-1">API URL: {process.env.REACT_APP_API_URL || 'Not set'}</p>
                  </div>
                ) : (
                  <div className="text-green-600">
                    <p>✓ {apiStatus?.service} is {apiStatus?.status}</p>
                    <p className="text-xs mt-1">API URL: {process.env.REACT_APP_API_URL}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          <button className="py-4 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600">
            Overview
          </button>
          <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
            Gameplay
          </button>
          <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
            Vehicles
          </button>
          <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
            Tracks
          </button>
          <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
            Reception
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article */}
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About FantasyRA</h2>
            <p className="mb-4">
              FantasyRA is a high-octane racing game set in a vibrant fantasy world where magic and technology coexist. 
              Players can customize their vehicles with both mechanical upgrades and magical enhancements, creating 
              unique racing experiences across diverse, otherworldly tracks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Gameplay Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Over 50 unique fantasy vehicles to unlock and customize</li>
              <li>12+ mystical tracks across different elemental realms</li>
              <li>Deep customization system with magical enhancements</li>
              <li>Dynamic weather and day/night cycles that affect gameplay</li>
              <li>Single-player campaign and online multiplayer modes</li>
              <li>Special abilities and power-ups based on magical elements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Development</h2>
            <p className="mb-4">
              FantasyRA was developed by Fantasy Studios, a team of passionate game developers and racing enthusiasts. 
              The game was built using Unreal Engine 5, allowing for stunning visuals and realistic physics while 
              maintaining the fantastical elements that set it apart from traditional racing games.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
            <dl className="space-y-3">
              <div>
                <dt className="font-medium">Platforms</dt>
                <dd className="text-gray-600">Windows, PlayStation 5, Xbox Series X/S</dd>
              </div>
              <div>
                <dt className="font-medium">Engine</dt>
                <dd className="text-gray-600">Unreal Engine 5</dd>
              </div>
              <div>
                <dt className="font-medium">Modes</dt>
                <dd className="text-gray-600">Single-player, Multiplayer</dd>
              </div>
              <div>
                <dt className="font-medium">Rating</dt>
                <dd className="text-gray-600">E10+ (Everyone 10+)</dd>
              </div>
            </dl>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">System Requirements</h4>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">OS:</span> Windows 10 64-bit</p>
                <p><span className="font-medium">CPU:</span> Intel i5-7600K or AMD Ryzen 5 1600</p>
                <p><span className="font-medium">Memory:</span> 16 GB RAM</p>
                <p><span className="font-medium">GPU:</span> NVIDIA GTX 1060 or AMD RX 580</p>
                <p><span className="font-medium">Storage:</span> 50 GB available space</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© 2023 Fantasy Studios. All rights reserved.</p>
        <div className="mt-2">
          <Link to="/privacy" className="text-blue-600 hover:underline mr-4">Privacy Policy</Link>
          <Link to="/terms" className="text-blue-600 hover:underline mr-4">Terms of Service</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default FantasyRA;
