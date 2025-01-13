"use client";
import React, { useEffect } from "react";
import { FaHome, FaBoxOpen, FaCog, FaSearch, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default function AdminPage() {
  useEffect(() => {
    if (window.location.pathname === "/admin") {
      window.location.replace("/dashboard");
    }
  }, []);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
        <div className="mb-6">
        <a href="/dashboard"><FaHome className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
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
       {/* Main Content */}
              <div className="flex-1 p-6">

        </div>

      </div>
  );
}
