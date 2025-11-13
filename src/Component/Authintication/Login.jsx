



import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import usePageTitle from "../../utils/usePageTitle";
// import { AuthContext } from "../contexts/AuthContext"; // AuthContext এর path ঠিক করে নিতে হবে

const Login = () => {
  const { googleLogin, loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


      // ✅ Use custom hook for dynamic title
    usePageTitle("Login | Utility Bill System");



  // Email/Password Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser(email, password);
      navigate("/"); // Login successful হলে homepage এ নিয়ে যাবে
    } catch (err) {
      setError(err.message);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async () => {
    setError("");
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-200">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Lo<span className="text-color1">gin</span>
          </h2>

          <form className="form-control space-y-3 mt-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className="label">
              <a href="#" className="text-sm link link-hover">
                Forget Password?
              </a>
            </label>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Error Message */}
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
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to={"/register"} className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
