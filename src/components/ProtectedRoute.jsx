import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isRememberMe = await localStorage.getItem("isRemember");
        const token = await localStorage.getItem("authToken");
        // const id = await localStorage.getItem("userID");

        // if (token && id) await dispatch(getUserInfo(id));
        if (!token || isRememberMe !== "true")
          navigate("/login");
      } catch (err) {
        console.log(err);
      }
    };

    setTimeout(() => checkLoginStatus(), 1000);
  }, [navigate]);

  return children
}

export default ProtectedRoute