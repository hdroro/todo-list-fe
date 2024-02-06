import { useContext, useEffect, useState } from "react";
import "./NavHeader.scss";
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logoutUser } from "../../services/userService";
import { toast } from "react-toastify";

function NavHeader() {
  const location = useLocation();
  const history = useHistory();
  const [pathCurrent, setPathCurrent] = useState("");

  useEffect(() => {
    setPathCurrent(location.pathname);
  }, [pathCurrent]);

  const handleLogout = async () => {
    let data = await logoutUser(); //clear cookies
    localStorage.removeItem("jwt"); //clear local storage

    if (data && +data.EC === 0) {
      toast.success("Logout successfully!");
      history.push("/login");
    } else {
      toast.error(data.EM);
    }
  };

  console.log(pathCurrent);
  return (
    <>
      <div className="nav-header">
        <Navbar expand="lg" className="bg-header">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="favicon.ico"
                width="32"
                height="32"
                className="d-inline-block align-top"
                alt=""
              />
              <div className="brand-name">todolist</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {pathCurrent !== "/login" && pathCurrent !== "/register" && (
              <Nav>
                <a href="/login" className="nav-link">
                  Login
                </a>
                <a href="/register" className="nav-link register">
                  Start for free
                </a>
              </Nav>
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavHeader;
