import { FaUserShield, FaEye, FaMoneyBillWave, FaFilePdf } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    { icon: <FaUserShield size={30} />, title: "Secure Login", desc: "Login securely to access your dashboard." },
    { icon: <FaEye size={30} />, title: "View Bills", desc: "Check Electricity, Gas, Water & Internet bills easily." },
    { icon: <FaMoneyBillWave size={30} />, title: "Pay Bills", desc: "Pay only current month's bills securely." },
    { icon: <FaFilePdf size={30} />, title: "Download PDF", desc: "Download paid bill history anytime." },
  ];

  return (
    <div className="py-12 bg-base-300">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {steps.map((s, i) => (
          <div key={i} className="card bg-base-100 shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="flex justify-center text-primary mb-3">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
