import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data.user);

      } catch (error) {

        alert("Unauthorized");

        navigate("/login");

      }

    };

    fetchDashboard();

  }, [navigate]);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");

  navigate("/login");
};

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-600 text-white p-5 flex justify-between">

        <h1 className="text-2xl font-bold">

          Dashboard

        </h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded"
        >

          Logout

        </button>

      </div>

      <div className="p-10">

        {user && (

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-5">

              Welcome {user.name}

            </h2>

            <p>

              <b>Email:</b> {user.email}

            </p>

            <p>

              <b>User ID:</b> {user._id}

            </p>

          </div>

        )}

      </div>

    </div>

  );

}

export default Dashboard;