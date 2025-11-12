import { FaLock, FaClock, FaChartLine, FaThumbsUp } from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    { icon: <FaLock size={30} />, title: "Secure Payment", desc: "End-to-end encrypted transactions." },
    { icon: <FaClock size={30} />, title: "Fast Processing", desc: "Pay bills within seconds." },
    { icon: <FaChartLine size={30} />, title: "Track Bills", desc: "Monitor monthly usage & costs." },
    { icon: <FaThumbsUp size={30} />, title: "Easy to Use", desc: "Clean & user-friendly dashboard." },
  ];

  return (
    <div className="py-12 bg-base-300">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="card bg-base-100 shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="text-primary flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
