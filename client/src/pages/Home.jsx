import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all">
      {/* Hero Section */}
      <div
        className="w-full h-[92vh] bg-cover bg-center relative flex flex-col items-center justify-center px-4"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Hostel.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Over Background */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            Welcome!
            <br />
            <strong color="pink"> the Airbnb for Hostels in Mangalpally</strong>
            <br />
          </h1>
          <p className="text-lg mb-6 drop-shadow-sm">
            Searching for Hostel (in Mangalpally).
            <br />
            Let’s do it together. 
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold text-white"
            >
              Register
            </a>
            <a
              href="/login"
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md font-semibold text-white"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
