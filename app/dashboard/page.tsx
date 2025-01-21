"use client";
import React from "react";
import { FaHome, FaBoxOpen, FaCog, FaSearch, FaUser } from "react-icons/fa";

export default function DashboardPage() {

  return (
    <div className="flex min-h-screen bg-gray-100">
              <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
                <div className="mb-6">
                  <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
                </div>
                <div className="mb-6">
                  <a href="/orders"><FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
                </div>
                <div className="mb-6">
                  <FaUser className="text-gray-700 hover:text-blue-500 text-2xl" />
                </div>
                <div>
                  <FaCog className="text-gray-700 hover:text-blue-500 text-2xl" />
                </div>
              </div>
              <h1 className="text-2xl font-bold p-6">Tableau De Bord</h1>
    </div>
    
  );
}
