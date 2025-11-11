


// import React, { useEffect, useState, useContext } from "react";
// import { toast } from "react-hot-toast";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { AuthContext } from "../../Context/AuthContext";
// // import BillDetails from "./BillDetails";

// const MyPayBills = () => {
//   const { user } = useContext(AuthContext);
//   const email = user?.email;

//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBills = () => {
//     setLoading(true);
//     fetch(`http://localhost:2000/myBills?email=${email}`)
//       .then(res => res.json())
//       .then(data => setBills(data))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => fetchBills(), [email]);

//   const handleDelete = (billId) => {
//     if (window.confirm("Are you sure you want to delete this bill?")) {
//       fetch(`http://localhost:2000/myBills/${billId}`, { method: "DELETE" })
//         .then(res => res.json())
//         .then(() => { toast.success("Deleted!"); fetchBills(); })
//         .catch(() => toast.error("Delete failed!"));
//     }
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text("My Paid Bills", 14, 20);
//     const tableData = bills.map(b => [b.username, b.email, b.amount, b.address, b.phone, b.date]);
//     doc.autoTable({ head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]], body: tableData, startY: 30 });
//     doc.save("my_bills.pdf");
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">My Paid Bills</h2>
//       <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2 md:gap-0">
//         <p>Total Bills Paid: {bills.length}</p>
//         <p>Total Amount: ৳{bills.reduce((sum,b)=>sum+Number(b.amount),0)}</p>
//         <button onClick={downloadPDF} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Download Report</button>
//       </div>

//       {loading ? <p className="text-center mt-10">Loading...</p> :
//         bills.length === 0 ? <p className="text-center mt-10 text-gray-500">No bills found.</p> :
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-3 py-2">Username</th>
//                 <th className="border px-3 py-2">Email</th>
//                 <th className="border px-3 py-2">Amount</th>
//                 <th className="border px-3 py-2">Address</th>
//                 <th className="border px-3 py-2">Phone</th>
//                 <th className="border px-3 py-2">Date</th>
//                 <th className="border px-3 py-2">Actions</th>
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
//                   <td className="border px-3 py-2 space-x-2">
//                     <button onClick={()=>handleDelete(bill._id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       }
//     </div>
//   );
// };

// export default MyPayBills;



// import React, { useEffect, useState, useContext } from "react";
// import { toast } from "react-hot-toast";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { AuthContext } from "../../Context/AuthContext";
// import BillDetails from "../DetailsPage/BillDetails";
// // import BillDetails from "./BillDetails";

// const MyPayBills = () => {
//   const { user } = useContext(AuthContext);
//   const email = user?.email;

//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch user's bills
//   const fetchBills = () => {
//     setLoading(true);
//     fetch(`http://localhost:2000/myBills?email=${email}`)
//       .then(res => res.json())
//       .then(data => setBills(data))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchBills();
//   }, [email]);

//   const totalAmount = bills.reduce((sum, b) => sum + Number(b.amount), 0);

//   // PDF Download
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text("My Paid Bills", 14, 20);
//     const tableData = bills.map(b => [
//       b.username, b.email, b.amount, b.address, b.phone, b.date
//     ]);
//     doc.autoTable({
//       head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]],
//       body: tableData,
//       startY: 30,
//     });
//     doc.save("my_bills.pdf");
//   };

//   const handleDelete = (billId) => {
//     if (!window.confirm("Are you sure you want to delete this bill?")) return;

//     fetch(`http://localhost:2000/myBills/${billId}`, { method: "DELETE" })
//       .then(res => res.json())
//       .then(() => {
//         toast.success("Bill deleted successfully!");
//         setBills(prev => prev.filter(b => b._id !== billId));
//       })
//       .catch(() => toast.error("Delete failed!"));
//   };

//   const handleUpdate = (updatedBill) => {
//     setBills(prev => prev.map(b => b._id === updatedBill._id ? updatedBill : b));
//     toast.success("Bill updated successfully!");
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">My Paid Bills</h2>

//       <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2 md:gap-0">
//         <p>Total Bills Paid: {bills.length}</p>
//         <p>Total Amount: ৳{totalAmount}</p>
//         <button onClick={downloadPDF} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
//           Download Report
//         </button>
//       </div>

//       {loading ? (
//         <p className="text-center mt-10">Loading...</p>
//       ) : bills.length === 0 ? (
//         <p className="text-center mt-10 text-gray-500">No bills found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-3 py-2">Username</th>
//                 <th className="border px-3 py-2">Email</th>
//                 <th className="border px-3 py-2">Amount</th>
//                 <th className="border px-3 py-2">Address</th>
//                 <th className="border px-3 py-2">Phone</th>
//                 <th className="border px-3 py-2">Date</th>
//                 <th className="border px-3 py-2">Actions</th>
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
//                   <td className="border px-3 py-2 space-x-2">
//                     <button onClick={() => handleDelete(bill._id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Hidden BillDetails for pay modal */}
//       <BillDetails onBillPaid={bill => setBills(prev => [...prev, bill])} />
//     </div>
//   );
// };

// export default MyPayBills;


// import React, { useEffect, useState, useContext } from "react";
// import { toast } from "react-hot-toast";
// // import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { AuthContext } from "../../Context/AuthContext";
// import jsPDF from "jspdf";

// const MyPayBills = () => {
//   const { user } = useContext(AuthContext);
//   const email = user?.email;

//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [updating, setUpdating] = useState(false);

//   const fetchBills = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:2000/myBills?email=${email}`);
//       const data = await res.json();
//       setBills(data);
//     } catch (err) {
//       toast.error("Failed to load bills");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (email) fetchBills();
//   }, [email]);

//   const totalAmount = bills.reduce((sum, b) => sum + Number(b.amount), 0);

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text("My Paid Bills", 14, 20);
//     const tableData = bills.map((b) => [
//       b.username, b.email, b.amount, b.address, b.phone, b.date
//     ]);
//     doc.autoTable({
//       head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]],
//       body: tableData,
//       startY: 30,
//     });
//     doc.save("my_bills.pdf");
//   };


// // const downloadPDF = () => {
// //     const doc = new jsPDF()
// //     doc.text('Data Export',20,10)

// //     const tableColumn = 
// // }





//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this bill?")) return;

//     try {
//       await fetch(`http://localhost:2000/myBills/${id}`, { method: "DELETE" });
//       toast.success("Deleted!");
//       setBills(prev => prev.filter(b => b._id !== id));
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setFormData(bill);
//     setModalOpen(true);
//   };

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value });
//   };

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
//         const updatedBill = await res.json();
//         setBills(prev => prev.map(b => b._id === updatedBill._id ? updatedBill : b));
//         toast.success("✅ Updated successfully");
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

//       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//         <p>Total Bills: {bills.length}</p>
//         <p>Total Amount: ৳{totalAmount}</p>
//         <button onClick={downloadPDF} className="bg-green-600 text-white py-2 px-4 rounded">
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
//                     <button onClick={() => openModal(bill)} className="bg-blue-600 text-white px-2 py-1 rounded">
//                       Edit
//                     </button>
//                     <button onClick={() => handleDelete(bill._id)} className="bg-red-600 text-white px-2 py-1 rounded">
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
//             <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 font-bold text-xl">✕</button>
//             <h3 className="text-xl font-bold mb-3">Update Bill</h3>

//             <form onSubmit={handleUpdate} className="space-y-2">
//               <input className="input" name="username" value={formData.username} onChange={handleChange} required />
//               <input className="input" name="address" value={formData.address} onChange={handleChange} required />
//               <input className="input" name="phone" value={formData.phone} onChange={handleChange} required />
//               <input className="input" type="date" name="date" value={formData.date} onChange={handleChange} required />
//               <input className="input" type="number" name="amount" value={formData.amount} onChange={handleChange} required />

//               <button className="w-full py-2 bg-blue-600 text-white rounded" disabled={updating}>
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









// import React, { useEffect, useState, useContext } from "react";
// import { toast } from "react-hot-toast";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable"; // ✅ Correct import for autoTable
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

//   // Fetch bills
//   const fetchBills = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:2000/myBills?email=${email}`);
//       const data = await res.json();
//       setBills(data);
//     } catch (err) {
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

//   // Delete bill
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this bill?")) return;
//     try {
//       await fetch(`http://localhost:2000/myBills/${id}`, { method: "DELETE" });
//       toast.success("Deleted!");
//       setBills(prev => prev.filter(b => b._id !== id));
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   // Open modal
//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setFormData(bill);
//     setModalOpen(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Update bill
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
//         const updatedBill = await res.json();
//         setBills(prev => prev.map(b => b._id === updatedBill._id ? updatedBill : b));
//         toast.success("✅ Updated successfully");
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
import autoTable from "jspdf-autotable"; // ✅ Correct plugin import
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

  // ✅ Fetch Bills
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

  // ✅ Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Paid Bills", 14, 20);

    const tableData = bills.map(b => [
      b.username, b.email, b.amount, b.address, b.phone, b.date
    ]);

    autoTable(doc, {
      startY: 30,
      head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]],
      body: tableData,
    });

    doc.save("my_bills.pdf");
  };

  // ✅ Delete Bill
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this bill?")) return;
    try {
      await fetch(`http://localhost:2000/myBills/${id}`, { method: "DELETE" });
      toast.success("Deleted successfully!");
      setBills(prev => prev.filter(b => b._id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  // ✅ Open Edit Modal
  const openModal = (bill) => {
    setSelectedBill(bill);
    setFormData(bill);
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Update Bill Fixed (DB + UI refresh)
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

        // ✅ Refresh bills after update
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
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Paid Bills</h2>

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

      {loading ? (
        <p className="text-center mt-10 font-semibold">⏳ Loading...</p>
      ) : bills.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No paid bills found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
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
              {bills.map(bill => (
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
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
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
