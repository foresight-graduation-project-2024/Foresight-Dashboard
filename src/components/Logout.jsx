import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { authLogout } from "../services/Auth";
import { useNavigate } from "react-router-dom";

import ButtonIcon from "./custom/ButtonIcon";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authLogout());
    navigate("/login");
  };

  return (
    <ButtonIcon onClick={logoutHandler} aria-label="Logout">
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
