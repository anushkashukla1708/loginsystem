import { useState } from "react";
import { verifyOTP } from "../services/authService";
import { useNavigate } from "react-router-dom";

function verifyOTP() {

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const email = localStorage.getItem("email");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await verifyOTP({
        email,
        otp,
      });

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      navigate("/dashboard");

    } catch (err) {

      alert(err.response?.data?.message);

    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-3xl font-bold text-center mb-6">

          Verify OTP

        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border p-3 rounded mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button className="w-full bg-purple-600 text-white py-3 rounded">

            Verify

          </button>

        </form>

      </div>

    </div>

  );

}

export default verifyOTP;