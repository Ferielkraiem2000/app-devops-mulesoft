"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaHome, FaBoxOpen, FaCog, FaSearch, FaUser } from "react-icons/fa";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get("https://app-back-deploy.vercel.app/orders");
      return response.data;
    } catch (error) {
      console.error("Error getting orders:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = await getOrders();
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
        <div className="mb-6">
          <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
        </div>
        <div className="mb-6">
          <FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" />
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
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
          {/* Search Section */}
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Orders</h1>
            <div className="relative">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg p-2 pl-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border" style={{ color: "black" }}>Outil CI/CD</th>
                  <th className="p-3 border" style={{ color: "black" }}>Type d'hébergement</th>
                  <th className="p-3 border" style={{ color: "black" }}>Outil de monitoring</th>
                  <th className="p-3 border" style={{ color: "black" }}>Outil d'hébergement des JARs</th>
                  <th className="p-3 border" style={{ color: "black" }}>Statut</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order: any, index: number) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-3 border">{order.versioningTool || "N/A"}</td>
                      <td className="p-3 border">{order.hostingType || "N/A"}</td>
                      <td className="p-3 border">{order.monitoringTool || "N/A"}</td>
                      <td className="p-3 border">{order.hostingJarTool || "N/A"}</td>
                      <td className="p-3 border">
                      <span className={`py-1 px-3 rounded text-white ${order.status === "en attente" ? "bg-green-500" : "bg-gray-400"}`}>
                        {order.status}
                      </span>
                    </td>                          </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-3 border text-center">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
