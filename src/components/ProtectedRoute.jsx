import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from "../store/userSlice";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isRememberMe = await localStorage.getItem("isRemember");
        const token = await localStorage.getItem("authToken");
        const id = await localStorage.getItem("userID");

        if (!token || isRememberMe !== "true")
          navigate("/login");
        else dispatch(getUserInfo(id));
      } catch (err) {
        console.log(err);
      }
    };

    setTimeout(() => checkLoginStatus(), 1000);
  }, [navigate, dispatch]);

  return children
}

export default ProtectedRoute