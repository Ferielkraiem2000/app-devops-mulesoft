"use client";
import React, { useEffect } from "react";
import { FaHome, FaShoppingCart} from "react-icons/fa";


export default function ClientPage() {
    useEffect(() => {
      if (window.location.pathname === "/client") {
        window.location.replace("/bookOrder");
      }
    }, []);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
        <div className="mb-6">
          <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
        </div>
        {/* <div className="mb-6">
          <FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" />
        </div> */}
        <div className="mb-6">
          <a href="/bookOrder"><FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
        </div>
        {/* <div className="mb-6">
          <FaUser className="text-gray-700 hover:text-blue-500 text-2xl" />
        </div> */}
        {/* <div>
          <FaCog className="text-gray-700 hover:text-blue-500 text-2xl" />
        </div> */}

      </div>


    </div>
  );
}
