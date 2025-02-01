import React from "react";
import RoomDesignWizard from "./RoomDesignWizard";

interface HomeProps {
  onDesignComplete?: (data: any) => void;
}

const Home = ({ onDesignComplete = () => {} }: HomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Room Designer</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <RoomDesignWizard onComplete={onDesignComplete} />
        </div>
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Room Designer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
