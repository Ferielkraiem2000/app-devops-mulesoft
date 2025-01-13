"use client";
import React from "react";
import { FaHome, FaBoxOpen, FaShoppingCart, FaCog, FaSearch, FaUser } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone X Pro",
    image: "/smartphone.jpg", 
    status: "Active",
    price: "$999.00",
    totalSales: 150,
    createdAt: "6/23/2024",
  },
  {
    id: 2,
    name: "Wireless Earbuds Ultra",
    image: "/earbuds.jpg",
    status: "Active",
    price: "$199.00",
    totalSales: 300,
    createdAt: "6/23/2024",
  },
  {
    id: 3,
    name: "Smart Home Hub",
    image: "/smarthome.jpg",
    status: "Active",
    price: "$149.00",
    totalSales: 200,
    createdAt: "6/23/2024",
  },
];

export default function ProductsPage() {
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

          <p className="text-gray-600 mb-6">Manage your products and view their sales performance.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border" style={{color:"black"}}>Outil CI/CD</th>
                  <th className="p-3 border" style={{color:"black"}}>Type d'hébergement</th>
                  <th className="p-3 border" style={{color:"black"}}>Outil de monitoring</th>
                  <th className="p-3 border" style={{color:"black"}}>Outil d'hébergement des JARs</th>
                  <th className="p-3 border" style={{color:"black"}}>Statut</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="p-3 border flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      {product.name}
                    </td>
                    <td className="p-3 border">{product.price}</td>

                    <td className="p-3 border">{product.price}</td>
                    <td className="p-3 border">{product.totalSales}</td>
                    <td className="p-3 border">
                      <span className={`py-1 px-3 rounded text-white ${product.status === "Active" ? "bg-green-500" : "bg-gray-400"}`}>
                        {product.status}
                      </span>
                    </td>                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
