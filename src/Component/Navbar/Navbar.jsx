import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center font-bold  fixed text-red-600 z-50 p-5 mx-auto uppercase shadow-2xl">
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/review"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textShadow: "2px 2px 4px #000000", paddingLeft: "10px" }}
          >
            Review Of Parents
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
