import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login() {

  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await login(form);

      alert(res.data.message);

      localStorage.setItem("email", form.email);

      navigate("/verify-otp");

    } catch (err) {

      alert(err.response?.data?.message);

    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-500">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />

          <div className="relative mb-4">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    className="w-full border p-3 rounded pr-10"
    onChange={handleChange}
  />

  <span
    className="absolute right-3 top-4 cursor-pointer"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

          <button className="w-full bg-green-600 text-white py-3 rounded">

            Login

          </button>

        </form>

        <p className="text-center mt-4">

          New User?

          <Link to="/" className="text-blue-600 ml-2">

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;