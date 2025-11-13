


// CategorySection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Electricity",
    image: "https://i.ibb.co/9k1jTM5r/sun-setting-silhouette-electricity-pylons.jpg",
    path: "/",
  },
  {
    name: "Gas",
    image: "https://i.ibb.co/VWrjcZv4/closeup-shot-beautiful-blue-green-flame-gas-stove.jpg",
    path: "/",
  },
  {
    name: "Water",
    image: "https://i.ibb.co/wF5cYRzJ/fresh-water-texture-background-transparent-liquid.jpg",
    path: "/",
  },
  {
    name: "Internet",
    image: "https://i.ibb.co.com/twY5Bjyz/futuristic-smart-city-with-5g-global-network-technology.jpg",
    path: "/",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-color1">Our</span>{" "}
        <span className="text-color2">Categories</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleClick(cat.path)}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-56 object-cover"
            />
            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-white drop-shadow-md">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
