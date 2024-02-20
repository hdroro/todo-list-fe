import { useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { handleUserLogin } from "../../services/userService";
import images from "../../assets/images";

function Login() {
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const history = useHistory();
  const handleCreateNewAccount = () => {
    history.push("/register");
  };

  const handleLogin = async () => {
    let check = isValidInputs();
    let userData = { valueLogin, password };

    if (check) {
      let response = await handleUserLogin(valueLogin, password);
      if (response && +response.EC === 0) {
        let groupWithRoles = response.DT.groupWithRoles;
        let email = response.DT.email;
        let username = response.DT.username;
        let token = response.DT.access_token;
        //success
        let data = {
          isAuthenticated: true,
          token,
          account: {
            groupWithRoles,
            email,
            username,
          },
        };

        localStorage.setItem("jwt", token);

        history.push("/users");
        // window.location.reload();

        toast.success("Login successfully!");
      } else if (response && +response.EC !== 0) {
        toast.error(response.EM);
      }
    }
  };

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    // let re = /\S+@\S+\.\S+/;
    if (!valueLogin) {
      toast.error("Please enter your email address or username !");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    if (!password) {
      toast.error("Password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    return true;
  };

  const handlePressEnter = (event) => {
    if (event.charCode === 13 && event.code === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none d-flex justify-content-center">
              Login
            </div>
            <input
              type="text"
              className={`form-control ${
                objCheckInput.isValidEmail ? "" : "is-invalid"
              }`}
              placeholder="Email address or your username"
              value={valueLogin}
              onChange={(event) => setValueLogin(event.target.value)}
            />
            <input
              type="password"
              className={`form-control ${
                objCheckInput.isValidPassword ? "" : "is-invalid"
              }`}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={(event) => handlePressEnter(event)}
            />
            <button className="btn btn-login" onClick={() => handleLogin()}>
              Login
            </button>
            <span className="text-center">
              <a className="forgotten-password" href="#">
                Forgot your password?
              </a>
            </span>
            <div className="text-center forward-to-register">
              Don’t have an account?
              <span onClick={() => handleCreateNewAccount()}> Sign up</span>
            </div>
          </div>

          <div className="content-right col-12 d-none col-sm-7 d-sm-block">
            <div className="detail d-flex justify-content-center mt-5">
              <img src={images.bgImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
