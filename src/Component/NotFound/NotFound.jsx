import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-6 bg-[#0b0f1a]">

      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full shadow-lg"
            style={{ width: Math.random() * 3 + 2, height: Math.random() * 3 + 2 }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity }}
          />
        ))}
      </div>

      {/* 404 Energy Orb */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-[220px] h-[220px] rounded-full border border-cyan-400/60 backdrop-blur-xl bg-white/5 flex items-center justify-center shadow-[0_0_80px_20px_rgba(0,255,255,0.2)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <h1 className="text-6xl font-extrabold text-cyan-300 drop-shadow-xl">404</h1>
        </motion.div>
      </motion.div>

      {/* Floating Error Spheres */}
      {["ERROR", "404", "LOST", "ERROR"].map((txt, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-200/80 text-xl font-bold"
          initial={{ x: Math.random() * 500 - 250, y: Math.random() * 500 - 250, opacity: 0 }}
          animate={{ x: Math.random() * 500 - 250, y: Math.random() * 500 - 250, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          {txt}
        </motion.div>
      ))}

      <p className="text-center mt-10 text-lg text-gray-300 max-w-md">
        Oops! You're floating in digital space. This page doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition shadow-lg"
      >
        🚀 Back to Home
      </Link>
    </main>
  );
}