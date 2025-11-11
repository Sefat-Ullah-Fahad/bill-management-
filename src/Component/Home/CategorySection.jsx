// CategorySection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Electricity",
    image: "https://i.ibb.co.com/9k1jTM5r/sun-setting-silhouette-electricity-pylons.jpg",
    path: "/",
  },
  {
    name: "Gas",
    image: "https://i.ibb.co.com/VWrjcZv4/closeup-shot-beautiful-blue-green-flame-gas-stove.jpg",
    path: "/",
  },
  {
    name: "Water",
    image: "https://i.ibb.co.com/wF5cYRzJ/fresh-water-texture-background-transparent-liquid.jpg",
    path: "/",
  },
  {
    name: "Internet",
    image: "https://i.ibb.co.com/9kPtKx3k/futuristic-smart-city-with-5g-global-network-technology.jpg",
    path: "/",
    // /bills?category=Internet
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-10"><span className="text-color2">Our</span> <span className="text-color1">Categories</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleClick(cat.path)}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
