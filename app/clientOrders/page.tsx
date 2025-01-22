"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaClipboardList,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Typography } from "@mui/material";
import ProfileModal from "@/components/profileModal";

const clientOrders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate filtered and paginated orders
  const filteredOrders = orders.filter((order) =>
    Object.values(order).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState(null);
  // Fetch orders on component mount
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    const customerId = localStorage.getItem("customerId");

    const fetchClientOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/client-orders/${customerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.orders) {
          setOrders(response.data.orders);
        } else {
          setError("Aucune commande trouvée pour ce client.");
        }
      } catch (err: any) {
        setError(err.message || "Une erreur s'est produite lors du chargement des commandes.");
      }
    };

    if (customerId) {
      fetchClientOrders();
    } else {
      setError("Aucun ID client trouvé.");
    }
  }, []);

  // Reset page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleProfileClick = async () => {
    try {
      const token = localStorage.getItem("token");  

  
      if (!token) {
        console.error("Token not found, redirecting to login...");
        return;
      }
  
      const response = await axios.get("http://localhost:4000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,  
        },
      });
  
      console.log("User Profile:", response.data);

      setUser(response.data);

      setOpenProfile(true);
  
    } catch (error) {
      console.error("Error fetching user profile:", error);
  

    }
  };


  const handleCloseProfile = () => {
    setOpenProfile(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    window.location.href = '/signin'; 
  };
  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <Typography variant="h6" style={{ fontWeight: "bold", color: "#007bff" }}>
        </Typography>
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-700 hover:text-blue-500 text-2xl cursor-pointer" />
          <FaUserCircle
            className="text-gray-700 hover:text-blue-500 text-2xl cursor-pointer"
            onClick={handleProfileClick}
          />
          <FaSignOutAlt
            className="text-gray-700 hover:text-blue-500 text-2xl cursor-pointer"
            onClick={handleLogout}
          />
                {user && (
        <ProfileModal open={openProfile} onClose={handleCloseProfile} user={user} />
      )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-1">
        <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
          <div className="mb-6">
            <a href="/">
              <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
            </a>
          </div>
          <div className="mb-6">
            <a href="/bookOrder">
              <FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" />
            </a>
          </div>
          <div className="mb-6">
            <a href="/clientOrders">
              <FaClipboardList className="text-gray-700 hover:text-blue-500 text-2xl" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
            {/* Search Section */}
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold" style={{ color: "black" }}>
                Commandes
              </h1>
              <div className="relative">
                <FaSearch className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 pl-10"
                />
              </div>
            </div>

            {/* Orders Table */}
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
                  {currentOrders.length > 0 ? (
                    currentOrders.map((order: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="p-3 border text-gray-500">{order.versioningTool || "N/A"}</td>
                        <td className="p-3 border text-gray-500">{order.hostingType || "N/A"}</td>
                        <td className="p-3 border text-gray-500">{order.monitoringTool || "N/A"}</td>
                        <td className="p-3 border text-gray-500">{order.hostingJarTool || "N/A"}</td>
                        <td className="p-3 border text-gray-500">
                          <span
                            className={`py-1 px-3 rounded ${
                              order.status === "en attente"
                                ? "bg-yellow-500 text-white"
                                : "bg-green-500 text-white"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-3 border text-center">
                        Aucune commande trouvée.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 0 && (
              <div className="mt-4 flex justify-center space-x-2 items-center">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default clientOrders;
