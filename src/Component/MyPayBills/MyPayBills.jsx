

// import React, { useEffect, useState, useContext } from "react";
// import { toast } from "react-hot-toast";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable"; // ✅ Correct plugin import
// import { AuthContext } from "../../Context/AuthContext";

// const MyPayBills = () => {
//   const { user } = useContext(AuthContext);
//   const email = user?.email;

//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [updating, setUpdating] = useState(false);

//   // ✅ Fetch Bills
//   const fetchBills = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:2000/myBills?email=${email}`);
//       const data = await res.json();
//       setBills(data);
//     } catch {
//       toast.error("Failed to load bills");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (email) fetchBills();
//   }, [email]);

//   const totalAmount = bills.reduce((sum, b) => sum + Number(b.amount), 0);

//   // ✅ Download PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("My Paid Bills", 14, 20);

//     const tableData = bills.map(b => [
//       b.username, b.email, b.amount, b.address, b.phone, b.date
//     ]);

//     autoTable(doc, {
//       startY: 30,
//       head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]],
//       body: tableData,
//     });

//     doc.save("my_bills.pdf");
//   };

//   // ✅ Delete Bill
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this bill?")) return;
//     try {
//       await fetch(`http://localhost:2000/myBills/${id}`, { method: "DELETE" });
//       toast.success("Deleted successfully!");
//       setBills(prev => prev.filter(b => b._id !== id));
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   // ✅ Open Edit Modal
//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setFormData(bill);
//     setModalOpen(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Update Bill Fixed (DB + UI refresh)
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setUpdating(true);

//     try {
//       const res = await fetch(`http://localhost:2000/myBills/${selectedBill._id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("✅ Updated successfully");

//         // ✅ Refresh bills after update
//         await fetchBills();

//         setModalOpen(false);
//       } else {
//         toast.error("Update failed");
//       }
//     } catch {
//       toast.error("Update error");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">My Paid Bills</h2>

//       <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2 md:gap-0">
//         <p>Total Bills: {bills.length}</p>
//         <p>Total Amount: ৳{totalAmount}</p>
//         <button
//           onClick={downloadPDF}
//           className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
//         >
//           Download PDF
//         </button>
//       </div>

//       {loading ? (
//         <p className="text-center mt-10 font-semibold">⏳ Loading...</p>
//       ) : bills.length === 0 ? (
//         <p className="text-center text-gray-500 mt-10">No paid bills found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-3 py-2">User</th>
//                 <th className="border px-3 py-2">Email</th>
//                 <th className="border px-3 py-2">Amount</th>
//                 <th className="border px-3 py-2">Address</th>
//                 <th className="border px-3 py-2">Phone</th>
//                 <th className="border px-3 py-2">Date</th>
//                 <th className="border px-3 py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bills.map(bill => (
//                 <tr key={bill._id}>
//                   <td className="border px-3 py-2">{bill.username}</td>
//                   <td className="border px-3 py-2">{bill.email}</td>
//                   <td className="border px-3 py-2">{bill.amount}</td>
//                   <td className="border px-3 py-2">{bill.address}</td>
//                   <td className="border px-3 py-2">{bill.phone}</td>
//                   <td className="border px-3 py-2">{bill.date}</td>
//                   <td className="border px-3 py-2 flex gap-2">
//                     <button
//                       onClick={() => openModal(bill)}
//                       className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(bill._id)}
//                       className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {modalOpen && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-2 right-2 font-bold text-xl"
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-bold mb-3">Update Bill</h3>

//             <form onSubmit={handleUpdate} className="space-y-2">
//               <input
//                 className="input border p-2 w-full rounded"
//                 name="username"
//                 value={formData.username || ""}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="input border p-2 w-full rounded"
//                 name="address"
//                 value={formData.address || ""}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="input border p-2 w-full rounded"
//                 name="phone"
//                 value={formData.phone || ""}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="input border p-2 w-full rounded"
//                 type="date"
//                 name="date"
//                 value={formData.date || ""}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="input border p-2 w-full rounded"
//                 type="number"
//                 name="amount"
//                 value={formData.amount || ""}
//                 onChange={handleChange}
//                 required
//               />

//               <button
//                 className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 disabled={updating}
//               >
//                 {updating ? "Updating..." : "Update"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyPayBills;



import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../../Context/AuthContext";

const MyPayBills = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [formData, setFormData] = useState({});
  const [updating, setUpdating] = useState(false);

  // Fetch Bills
  const fetchBills = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:2000/myBills?email=${email}`);
      const data = await res.json();
      setBills(data);
    } catch {
      toast.error("Failed to load bills");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) fetchBills();
  }, [email]);

  const totalAmount = bills.reduce((sum, b) => sum + Number(b.amount), 0);

  // Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Paid Bills", 14, 20);

    const tableData = bills.map((b) => [
      b.username,
      b.email,
      b.amount,
      b.address,
      b.phone,
      b.date,
    ]);

    autoTable(doc, {
      startY: 30,
      head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]],
      body: tableData,
    });

    doc.save("my_bills.pdf");
  };

  // Delete Bill
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this bill?")) return;
    try {
      await fetch(`http://localhost:2000/myBills/${id}`, { method: "DELETE" });
      toast.success("Deleted successfully!");
      setBills((prev) => prev.filter((b) => b._id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  // Open Edit Modal
  const openModal = (bill) => {
    setSelectedBill(bill);
    setFormData(bill);
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update Bill
  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const res = await fetch(`http://localhost:2000/myBills/${selectedBill._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("✅ Updated successfully");
        await fetchBills();
        setModalOpen(false);
      } else {
        toast.error("Update failed");
      }
    } catch {
      toast.error("Update error");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      <h2 className="text-3xl font-bold text-center mb-6"><span className="text-color2">My Paid</span> <span className="text-color1">Bills</span></h2>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="animate-spin h-12 w-12 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <p className="text-lg font-semibold text-blue-600">⏳ Loading bills...</p>
          </div>
        </div>
      )}

      {/* Top Info & PDF Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2 md:gap-0">
        <p>Total Bills: {bills.length}</p>
        <p>Total Amount: ৳{totalAmount}</p>
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>

      {/* Bills Table */}
      {!loading && (bills.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No paid bills found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="">
              <tr>
                <th className="border px-3 py-2">User</th>
                <th className="border px-3 py-2">Email</th>
                <th className="border px-3 py-2">Amount</th>
                <th className="border px-3 py-2">Address</th>
                <th className="border px-3 py-2">Phone</th>
                <th className="border px-3 py-2">Date</th>
                <th className="border px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill._id}>
                  <td className="border px-3 py-2">{bill.username}</td>
                  <td className="border px-3 py-2">{bill.email}</td>
                  <td className="border px-3 py-2">{bill.amount}</td>
                  <td className="border px-3 py-2">{bill.address}</td>
                  <td className="border px-3 py-2">{bill.phone}</td>
                  <td className="border px-3 py-2">{bill.date}</td>
                  <td className="border px-3 py-2 flex gap-2">
                    <button
                      onClick={() => openModal(bill)}
                      className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(bill._id)}
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 font-bold text-xl"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-3">Update Bill</h3>

            <form onSubmit={handleUpdate} className="space-y-2">
              <input
                className="input border p-2 w-full rounded"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                required
              />
              <input
                className="input border p-2 w-full rounded"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                required
              />
              <input
                className="input border p-2 w-full rounded"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                required
              />
              <input
                className="input border p-2 w-full rounded"
                type="date"
                name="date"
                value={formData.date || ""}
                onChange={handleChange}
                required
              />
              <input
                className="input border p-2 w-full rounded"
                type="number"
                name="amount"
                value={formData.amount || ""}
                onChange={handleChange}
                required
              />

              <button
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={updating}
              >
                {updating ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPayBills;
