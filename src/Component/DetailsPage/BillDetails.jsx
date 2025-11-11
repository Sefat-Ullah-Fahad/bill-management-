


// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { AuthContext } from "../../Context/AuthContext";

// const BillDetails = ({ onBillPaid }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [bill, setBill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     username: user?.name || "",
//     email: user?.email || "",
//     billId: id,
//     amount: 0,
//     address: "",
//     phone: "",
//     date: new Date().toISOString().split("T")[0],
//     info: "",
//   });

//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:2000/bills/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setBill(data);
//         setFormData(prev => ({ ...prev, amount: data.amount, billId: data._id || data.billsId }));
//       })
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) return <p className="text-center mt-10 text-xl font-semibold">Loading...</p>;
//   if (!bill) return <p className="text-center mt-10 text-xl font-semibold">Bill not found!</p>;

//   const billDate = new Date(bill.date);
//   const now = new Date();
//   const isCurrentMonth = billDate.getMonth() === now.getMonth() && billDate.getFullYear() === now.getFullYear();

//   const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:2000/myBills", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const savedBill = await res.json();
//       if (res.ok) {
//         toast.success("Bill paid successfully!");
//         setModalOpen(false);
//         if (onBillPaid) onBillPaid(savedBill); // Update MyPayBills page
//       } else {
//         toast.error("Payment failed!");
//       }
//     } catch (err) {
//       toast.error("Payment failed!");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4 md:p-6">
//       <button onClick={() => navigate(-1)} className="mb-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">← Back</button>

//       <div className="border rounded-lg shadow-lg p-4 md:p-6">
//         <img src={bill.image} alt={bill.title} className="w-full h-56 md:h-64 object-cover rounded-lg" />
//         <h2 className="text-2xl font-bold mt-4">{bill.title}</h2>
//         <p className="text-gray-500">{bill.date}</p>

//         <div className="mt-4 space-y-1">
//           <p><strong>Category:</strong> {bill.category}</p>
//           <p><strong>Amount:</strong> {bill.amount} BDT</p>
//           <p><strong>Location:</strong> {bill.location}</p>
//           <p><strong>Email:</strong> {bill.email}</p>
//         </div>

//         <p className="mt-3 text-gray-700">{bill.description}</p>

//         <button disabled={!isCurrentMonth} onClick={() => setModalOpen(true)}
//           className={`mt-4 w-full py-2 rounded text-white ${isCurrentMonth ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}>
//           {isCurrentMonth ? "Pay Bill" : "Only current month bills can be paid"}
//         </button>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//             <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold">×</button>
//             <h2 className="text-xl font-bold mb-4">Pay Bill</h2>

//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} readOnly className="border w-full p-2 rounded bg-gray-100"/>
//               </div>
//               <div>
//                 <label>Bill ID:</label>
//                 <input type="text" name="billId" value={formData.billId} readOnly className="border w-full p-2 rounded bg-gray-100"/>
//               </div>
//               <div>
//                 <label>Amount:</label>
//                 <input type="number" name="amount" value={formData.amount} readOnly className="border w-full p-2 rounded bg-gray-100"/>
//               </div>
//               <div>
//                 <label>Date:</label>
//                 <input type="date" name="date" value={formData.date} readOnly className="border w-full p-2 rounded bg-gray-100"/>
//               </div>
//               <div>
//                 <label>Username:</label>
//                 <input type="text" name="username" value={formData.username} onChange={handleChange} className="border w-full p-2 rounded" required/>
//               </div>
//               <div>
//                 <label>Address:</label>
//                 <input type="text" name="address" value={formData.address} onChange={handleChange} className="border w-full p-2 rounded" required/>
//               </div>
//               <div>
//                 <label>Phone:</label>
//                 <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border w-full p-2 rounded" required/>
//               </div>
//               <div className="md:col-span-2">
//                 <label>Additional Info:</label>
//                 <textarea name="info" value={formData.info} onChange={handleChange} className="border w-full p-2 rounded"/>
//               </div>
//               <div className="md:col-span-2">
//                 <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Pay Bill</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BillDetails;






import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast"; // Toaster import
import { AuthContext } from "../../Context/AuthContext";

const BillDetails = ({ onBillPaid }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: user?.name || "",
    email: user?.email || "",
    billId: id,
    amount: 0,
    address: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    info: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:2000/bills/${id}`)
      .then(res => res.json())
      .then(data => {
        setBill(data);
        setFormData(prev => ({ ...prev, amount: data.amount, billId: data._id || data.billsId }));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-xl font-semibold">Loading...</p>;
  if (!bill) return <p className="text-center mt-10 text-xl font-semibold">Bill not found!</p>;

  const billDate = new Date(bill.date);
  const now = new Date();
  const isCurrentMonth = billDate.getMonth() === now.getMonth() && billDate.getFullYear() === now.getFullYear();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:2000/myBills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const savedBill = await res.json();
      if (res.ok) {
        // Custom toast
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-xs w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  ✅
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    Payment Successful 🎉
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Thank you for paying your bill.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        ));

        setModalOpen(false);
        if (onBillPaid) onBillPaid(savedBill);
      } else {
        toast.error("Payment failed!");
      }
    } catch (err) {
      toast.error("Payment failed!");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <Toaster position="top-right" reverseOrder={false} /> {/* Toaster Component */}

      <button onClick={() => navigate(-1)} className="mb-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">← Back</button>

      <div className="border rounded-lg shadow-lg p-4 md:p-6">
        <img src={bill.image} alt={bill.title} className="w-full h-56 md:h-64 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{bill.title}</h2>
        <p className="text-gray-500">{bill.date}</p>

        <div className="mt-4 space-y-1">
          <p><strong>Category:</strong> {bill.category}</p>
          <p><strong>Amount:</strong> {bill.amount} BDT</p>
          <p><strong>Location:</strong> {bill.location}</p>
          <p><strong>Email:</strong> {bill.email}</p>
        </div>

        <p className="mt-3 text-gray-700">{bill.description}</p>

        <button disabled={!isCurrentMonth} onClick={() => setModalOpen(true)}
          className={`mt-4 w-full py-2 rounded text-white ${isCurrentMonth ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}>
          {isCurrentMonth ? "Pay Bill" : "Only current month bills can be paid"}
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold">×</button>
            <h2 className="text-xl font-bold mb-4">Pay Bill</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} readOnly className="border w-full p-2 rounded bg-gray-100"/>
              </div>
              <div>
                <label>Bill ID:</label>
                <input type="text" name="billId" value={formData.billId} readOnly className="border w-full p-2 rounded bg-gray-100"/>
              </div>
              <div>
                <label>Amount:</label>
                <input type="number" name="amount" value={formData.amount} readOnly className="border w-full p-2 rounded bg-gray-100"/>
              </div>
              <div>
                <label>Date:</label>
                <input type="date" name="date" value={formData.date} readOnly className="border w-full p-2 rounded bg-gray-100"/>
              </div>
              <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} className="border w-full p-2 rounded" required/>
              </div>
              <div>
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="border w-full p-2 rounded" required/>
              </div>
              <div>
                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border w-full p-2 rounded" required/>
              </div>
              <div className="md:col-span-2">
                <label>Additional Info:</label>
                <textarea name="info" value={formData.info} onChange={handleChange} className="border w-full p-2 rounded"/>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Pay Bill</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillDetails;
