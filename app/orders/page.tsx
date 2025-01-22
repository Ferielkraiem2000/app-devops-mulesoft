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


// "use client";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import {
//   FaHome,
//   FaBoxOpen,
//   FaCog,
//   FaSearch,
//   FaUser,
//   FaCheck,
//   FaTimes,
//   FaSpinner,
// } from "react-icons/fa";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   // const [orders, setOrders] = useState<any[]>([]); // Initial state as an empty array
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;
//   // const [loading, setLoading] = useState(false);
//   const [loadingOrderId, setLoadingOrderId] = useState<string | null>(null);

//   const getOrders = async () => {
//     try {
//       const response = await axios.get(
//         "https://app-back-deploy.vercel.app/orders"
//       );
//       console.log(response.data)
//       return response.data;
//     } catch (error) {
//       console.error("Error getting orders:", error);
//       return [];
//     }
//   };

//   // const handleAcceptOrder = async (orderId: string) => {
//   //   try {
//   //     const response = await axios.post(
//   //       `http://localhost:4000/accept-order/${orderId}`
//   //     );
//   //     alert(`Order accepted! Repository URL: ${response.data.repoUrl}`);
//   //   } catch (error) {
//   //     console.error("Error accepting order:", error);
//   //     alert("Error accepting order. Please try again.");
//   //   }
//   // };
//   const handleAcceptOrder = async (order:any) => {
//     // setLoading(true); 
//     setLoadingOrderId(order._id); 

//     try {
//       const response = await axios.post(
//         `http://localhost:4000/accept-order/${order._id}`
//       );
//       const repoUrl = response.data.repoUrl;
//       if (repoUrl) {
//         order.status="acceptée"
//         alert(`Order accepted! Repository URL: ${repoUrl}`);
//       } else {
//         alert("Order accepted, but repository URL is null.");
//       }
//     } catch (error) {
//       console.error("Error accepting order:", error);
//       alert("Error accepting order. Please try again.");
//     } finally {
//       // setLoading(false); 
//       setLoadingOrderId(null);
//     }
//   };

//   const handleCancelOrder = async (order: any) => {
//     const isConfirmed = window.confirm("Êtes-vous sûr de vouloir annuler cette commande ?");
//     if (isConfirmed) {
//       try {
//         const response = await axios.delete(
//           `https://app-back-deploy.vercel.app/delete-order/${order._id}`
//         );
//         if (response.status === 200) {
//           order.status="annulée"
//           const updatedOrders = await getOrders();
//           setOrders(updatedOrders);
//           setFilteredOrders(updatedOrders);
//           setCurrentPage(1); 
//         }
//         alert("Commande annulée avec succès !");
//       } catch (error) {
//         console.error("Erreur lors de l'annulation de la commande :", error);
//       }
//     }
//   };
  
//   useEffect(() => {
//     const fetchOrders = async () => {
//       const fetchedOrders = await getOrders();
//       setOrders(fetchedOrders);
//       setFilteredOrders(fetchedOrders);
//     };
//     fetchOrders();
//   }, []);

//   // Filter orders based on search term
//   useEffect(() => {
//     const filtered = orders.filter((order) =>
//       Object.values(order).some((value) =>
//         String(value).toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredOrders(filtered);
//     setCurrentPage(1); // Reset to the first page when search changes
//   }, [searchTerm, orders]);

//   // Pagination logic
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const endIndex = startIndex + rowsPerPage;
//   const currentOrders = filteredOrders.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

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
//                 placeholder="Rechercher..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="border border-gray-300 rounded-lg p-2 pl-10"
//               />
//             </div>
//           </div>

//           {/* Orders Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                 <th className="p-3 border" style={{ color: "black" }}>
//                     Nom du Client
//                   </th>
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
//                 {currentOrders.length > 0 ? (
//                   currentOrders.map((order: any, index: number) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                     <td className="p-3 border text-gray-500">
//                         {order.customerId|| "N/A"}
//                       </td>
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
//                           {/* <button
//                             onClick={() => handleAcceptOrder(order._id)}
//                             className="bg-green-500 text-white py-1 px-3 rounded flex items-center"
//                           >
//                             <FaCheck className="mr-2" />
//                           </button> */}
//                       {/* <button
//                             onClick={() => handleAcceptOrder(order)}
//                             className={`${
//                               order.status === "acceptée"
//                                 ? "bg-gray-300 cursor-not-allowed"
//                                 : "bg-green-500"
//                             } text-white py-1 px-3 rounded flex items-center`}                            disabled={order.status === "acceptée"}
//                           >
//                             {loading ? (
//                               <FaSpinner className="animate-spin mr-2" />
//                             ) : (
//                               <FaCheck className="mr-2" />
//                             )}
//                             {loading ? "Loading..." : ""}
//                           </button> */}
//                                         <button
//                 onClick={() => handleAcceptOrder(order)}
//                 className={`${
//                   order.status === "acceptée"
//                     ? "bg-gray-300 cursor-not-allowed"
//                     : "bg-green-500"
//                 } text-white py-1 px-3 rounded flex items-center`}
//                 disabled={order.status === "acceptée" || loadingOrderId === order._id} // Disable while loading
//               >
//                 {loadingOrderId === order._id ? ( // Show spinner only for the specific order
//                   <FaSpinner className="animate-spin mr-2" />
//                 ) : (
//                   <FaCheck className="mr-2" />
//                 )}
//                 {/* {loadingOrderId === order._id ? "Loading..." : ""} */}
//               </button>
//                           <button
//                             onClick={() => handleCancelOrder(order)}
//                             className={`${
//                               order.status === "acceptée"
//                                 ? "bg-gray-300 cursor-not-allowed"
//                                 : "bg-red-500"
//                             } text-white py-1 px-3 rounded flex items-center`}                            disabled={order.status === "acceptée" || loadingOrderId === order._id} // Disable while loading

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
//                     Aucune commande trouvée.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

// {/* Pagination Controls */}
// {totalPages > 0 ? (
//   <div className="mt-4 flex justify-center space-x-2 items-center">
//     {/* Previous Button */}
//     <button
//       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//       disabled={currentPage === 1}
//       className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
//     >
//       &lt; {/* Left Arrow */}
//     </button>

//     {/* Page Numbers */}
//     {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//       <button
//         key={page}
//         onClick={() => setCurrentPage(page)}
//         className={`px-3 py-1 rounded ${
//           currentPage === page
//             ? "bg-blue-500 text-white"
//             : "bg-gray-200 text-gray-700"
//         }`}
//       >
//         {page}
//       </button>
//     ))}

//     {/* Next Button */}
//     <button
//       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//       disabled={currentPage === totalPages}
//       className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
//     >
//       &gt; {/* Right Arrow */}
//     </button>
//   </div>
// ) : (
//   <div className="mt-4 text-center text-gray-500">Aucune page disponible</div>
// )}


//           </div>
//         </div>
//       </div>
//   );
// }
"use client"
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

const OrdersPage = () =>  {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [loadingOrderId, setLoadingOrderId] = useState<string | null>(null);

  const getCustomerName = async (customerId:any) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/customer/${customerId}`
      );
      return response.data.customerName;
    } catch (error) {
      console.error("Error fetching customer name:", error);
      return "N/A";
    }
  };

  const getOrders = async () => {
    try {
      const response = await axios.get(
        "https://app-back-deploy.vercel.app/orders"
      );
      const ordersWithCustomerNames = await Promise.all(
        response.data.map(async (order:any) => {
          const customerName = await getCustomerName(order.customerId);
          return { ...order, customerName };
        })
      );
      return ordersWithCustomerNames;
    } catch (error) {
      console.error("Error getting orders:", error);
      return [];
    }
  };
  const handleAcceptOrder = async (orderId: string) => {
    console.log(orderId)
    try {
      const response = await axios.post(`https://app-back-deploy.vercel.app/accept-order/${orderId}`);
      console.log("Order accepted:", response.data);
      alert(`Order accepted! Repository URL: ${response.data.repoUrl}`);
    } catch (error) {
      console.error("Error accepting order:", error);
      alert("Error accepting order. Please try again.");
    }
  };
  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders:any = await getOrders();
      setOrders(fetchedOrders);
      setFilteredOrders(fetchedOrders);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    const filtered = orders.filter((order) =>
      Object.values(order).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredOrders(filtered);
    setCurrentPage(1);
  }, [searchTerm, orders]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
        {/* Sidebar */}
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
                  <th className="p-3 border" style={{ color: "black" }}>
                    Nom du Client
                  </th>
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
                  currentOrders.map((order:any, index:any) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-3 border text-gray-500">
                        {order.customerName || "N/A"}
                      </td>
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
                        <button
                          onClick={() => handleAcceptOrder(order)}
                          className="bg-green-500 text-white py-1 px-3 rounded"
                        >
                          <FaCheck className="mr-2" />
                        </button>
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
                    <td colSpan={7} className="p-3 border text-center">
                      Aucune commande trouvée.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="mt-4 flex justify-center space-x-2 items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrdersPage;
