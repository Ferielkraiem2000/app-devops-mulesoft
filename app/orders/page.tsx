// "use client";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { FaHome, FaBoxOpen, FaCog, FaSearch, FaUser, FaCheck, FaTimes } from "react-icons/fa";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);

//   const getOrders = async () => {
//     try {
//       const response = await axios.get("https://app-back-deploy.vercel.app/orders");
//       return response.data;
//     } catch (error) {
//       console.error("Error getting orders:", error);
//       return [];
//     }
//   };

//   const handleAcceptOrder = async (orderId: string) => {
//     console.log(orderId)
//     try {
//       const response = await axios.post(`https://app-back-deploy.vercel.app/accept-order/${orderId}`);
//       console.log("Order accepted:", response.data);
//       alert(`Order accepted! Repository URL: ${response.data.repoUrl}`);
//     } catch (error) {
//       console.error("Error accepting order:", error);
//       alert("Error accepting order. Please try again.");
//     }
//   };

//   const handleCancelOrder = async (orderId: string) => {
//     console.log(orderId)
//     try {
//       const response = await axios.delete(`https://app-back-deploy.vercel.app/delete-order/${orderId}`);
//       const updatedOrders = await getOrders();
//       setOrders(updatedOrders);
//       window.location.reload();
//       console.log("Order deleted:", response.data);
//     } catch (error) {
//       console.error("Error deleting order:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const fetchedOrders = await getOrders();
//       setOrders(fetchedOrders);
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
//         <div className="mb-6">
//           <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
//         </div>
//         <div className="mb-6">
//           <a href="/orders">
//             <FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" />
//           </a>
//         </div>
//         <div className="mb-6">
//           <FaUser className="text-gray-700 hover:text-blue-500 text-2xl" />
//         </div>
//         <div>
//           <FaCog className="text-gray-700 hover:text-blue-500 text-2xl" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
//           {/* Search Section */}
//           <div className="mb-6 flex justify-between items-center">
//             <h1 className="text-2xl font-bold" style={{ color: "black" }}>
//               Commandes
//             </h1>
//             <div className="relative">
//               <FaSearch className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border border-gray-300 rounded-lg p-2 pl-10"
//               />
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-3 border" style={{ color: "black" }}>
//                     Outil CI/CD
//                   </th>
//                   <th className="p-3 border" style={{ color: "black" }}>
//                     Type d'hébergement
//                   </th>
//                   <th className="p-3 border" style={{ color: "black" }}>
//                     Outil de monitoring
//                   </th>
//                   <th className="p-3 border" style={{ color: "black" }}>
//                     Outil d'hébergement des JARs
//                   </th>
//                   <th className="p-3 border" style={{ color: "black" }}>
//                     Décision
//                   </th>
//                   <th className="p-3 border" style={{ color: "black" }}>
//                     Statut
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.length > 0 ? (
//                   orders.map((order: any, index: number) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="p-3 border text-gray-500">
//                         {order.versioningTool || "N/A"}
//                       </td>
//                       <td className="p-3 border text-gray-500">
//                         {order.hostingType || "N/A"}
//                       </td>
//                       <td className="p-3 border text-gray-500">
//                         {order.monitoringTool || "N/A"}
//                       </td>
//                       <td className="p-3 border text-gray-500">
//                         {order.hostingJarTool || "N/A"}
//                       </td>
//                       <td className="p-3 border text-gray-500">
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleAcceptOrder(order._id)}
//                             className="bg-green-500 text-white py-1 px-3 rounded flex items-center"
//                           >
//                             <FaCheck className="mr-2" />
//                           </button>
//                           <button
//                             onClick={() => handleCancelOrder(order._id)}
//                             className="bg-red-500 text-white py-1 px-3 rounded flex items-center"
//                           >
//                             <FaTimes className="mr-2" />
//                           </button>
//                         </div>
//                       </td>
//                       <td className="p-3 border text-gray-500">
//                         <span
//                           className={`py-1 px-3 rounded ${
//                             order.status === "en attente"
//                               ? "bg-yellow-500"
//                               : "bg-green-500"
//                           }`}
//                         >
//                           {order.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={6} className="p-3 border text-center">
//                       No orders found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBoxOpen,
  FaCog,
  FaSearch,
  FaUser,
  FaCheck,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    try {
      const response = await axios.get(
        "https://app-back-deploy.vercel.app/orders"
      );
      return response.data;
    } catch (error) {
      console.error("Error getting orders:", error);
      return [];
    }
  };

  // const handleAcceptOrder = async (orderId: string) => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:4000/accept-order/${orderId}`
  //     );
  //     alert(`Order accepted! Repository URL: ${response.data.repoUrl}`);
  //   } catch (error) {
  //     console.error("Error accepting order:", error);
  //     alert("Error accepting order. Please try again.");
  //   }
  // };
  const handleAcceptOrder = async (orderId: string) => {
    setLoading(true); // Show loading spinner
    try {
      const response = await axios.post(
        `http://localhost:4000/accept-order/${orderId}`
      );
      const repoUrl = response.data.repoUrl;
      if (repoUrl) {
        alert(`Order accepted! Repository URL: ${repoUrl}`);
      } else {
        alert("Order accepted, but repository URL is null.");
      }
    } catch (error) {
      console.error("Error accepting order:", error);
      alert("Error accepting order. Please try again.");
    } finally {
      setLoading(false); 
    }
  };
  // const handleCancelOrder = async (orderId: string) => {
  //   try {
  //     await axios.delete(
  //       `https://app-back-deploy.vercel.app/delete-order/${orderId}`
  //     );
  //     const updatedOrders = await getOrders();
  //     setOrders(updatedOrders);
  //     setFilteredOrders(updatedOrders);
  //     setCurrentPage(1); // Reset to the first page after deletion
  //   } catch (error) {
  //     console.error("Error deleting order:", error);
  //   }
  // };
  const handleCancelOrder = async (orderId: string) => {
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir annuler cette commande ?");
    if (isConfirmed) {
      try {
        await axios.delete(
          `https://app-back-deploy.vercel.app/delete-order/${orderId}`
        );
        const updatedOrders = await getOrders();
        setOrders(updatedOrders);
        setFilteredOrders(updatedOrders);
        setCurrentPage(1); 
      } catch (error) {
        console.error("Erreur lors de la suppression de la commande :", error);
      }
    }
  };
  
  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = await getOrders();
      setOrders(fetchedOrders);
      setFilteredOrders(fetchedOrders);
    };
    fetchOrders();
  }, []);

  // Filter orders based on search term
  useEffect(() => {
    const filtered = orders.filter((order) =>
      Object.values(order).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredOrders(filtered);
    setCurrentPage(1); // Reset to the first page when search changes
  }, [searchTerm, orders]);

  // Pagination logic
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
        <div className="mb-6">
          <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
        </div>
        <div className="mb-6">
          <a href="/orders">
            <FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" />
          </a>
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
            <h1 className="text-2xl font-bold" style={{ color: "black" }}>
              Commandes
            </h1>
            <div className="relative">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
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
                  <th className="p-3 border" style={{ color: "black" }}>
                    Outil CI/CD
                  </th>
                  <th className="p-3 border" style={{ color: "black" }}>
                    Type d'hébergement
                  </th>
                  <th className="p-3 border" style={{ color: "black" }}>
                    Outil de monitoring
                  </th>
                  <th className="p-3 border" style={{ color: "black" }}>
                    Outil d'hébergement des JARs
                  </th>
                  <th className="p-3 border" style={{ color: "black" }}>
                    Décision
                  </th>
                  <th className="p-3 border" style={{ color: "black" }}>
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.length > 0 ? (
                  currentOrders.map((order: any, index: number) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-3 border text-gray-500">
                        {order.versioningTool || "N/A"}
                      </td>
                      <td className="p-3 border text-gray-500">
                        {order.hostingType || "N/A"}
                      </td>
                      <td className="p-3 border text-gray-500">
                        {order.monitoringTool || "N/A"}
                      </td>
                      <td className="p-3 border text-gray-500">
                        {order.hostingJarTool || "N/A"}
                      </td>
                      <td className="p-3 border text-gray-500">
                        <div className="flex space-x-2">
                          {/* <button
                            onClick={() => handleAcceptOrder(order._id)}
                            className="bg-green-500 text-white py-1 px-3 rounded flex items-center"
                          >
                            <FaCheck className="mr-2" />
                          </button> */}
                      <button
                            onClick={() => handleAcceptOrder(order._id)}
                            className="bg-green-500 text-white py-1 px-3 rounded flex items-center"
                          >
                            {loading ? (
                              <FaSpinner className="animate-spin mr-2" />
                            ) : (
                              <FaCheck className="mr-2" />
                            )}
                            {loading ? "Loading..." : ""}
                          </button>
                          <button
                            onClick={() => handleCancelOrder(order._id)}
                            className="bg-red-500 text-white py-1 px-3 rounded flex items-center"
                          >
                            <FaTimes className="mr-2" />
                          </button>
                        </div>
                      </td>
                      <td className="p-3 border text-gray-500">
                        <span
                          className={`py-1 px-3 rounded ${
                            order.status === "en attente"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-3 border text-center">
                    Aucune commande trouvée.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

{/* Pagination Controls */}
{totalPages > 0 ? (
  <div className="mt-4 flex justify-center space-x-2">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="bg-gray-300 px-3 py-1 rounded disabled:opacity-30"
    >
      Précédent
    </button>
    <span className="px-3 py-1">
      Page {currentPage} sur {totalPages}
    </span>
    <button
      onClick={() =>
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
      }
      disabled={currentPage === totalPages}
      className="bg-gray-300 px-3 py-1 rounded disabled:opacity-30"
    >
      Suivant
    </button>
  </div>
) : (
  <div className="mt-4 text-center text-gray-500">Aucune page disponible</div>
)}

          </div>
        </div>
      </div>
  );
}
