



import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import usePageTitle from "../../utils/usePageTitle";
// import { AuthContext } from "../contexts/AuthContext"; // path ঠিক করে নাও

const Register = () => {
  const { registerUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


        // ✅ Use custom hook for dynamic title
    usePageTitle("Register | Utility Bill System");



  // Password Validation
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) return "Password must have at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must have at least one lowercase letter";
    if (password.length < 6) return "Password must be at least 6 characters long";
    return null;
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      await registerUser(email, password, name, photo);
      navigate("/"); // সফল হলে home page
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      await googleLogin();
      navigate("/"); // সফল হলে home page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-blue-200">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Reg<span className="text-color2">ister</span>
          </h2>

          <form className="form-control space-y-3 mt-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary w-full">Register</button>
          </form>

          {/* Error message */}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] w-full mt-3"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Register with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to={'/login'} className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
