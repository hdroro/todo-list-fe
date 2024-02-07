import { useState } from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerNewUser } from "../../services/userService";
import images from "../../assets/images";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const history = useHistory();

  const handleRegister = async () => {
    let check = isValidInputs();
    let userData = { email, username, password };
    console.log(">> check userData", userData);

    if (check) {
      let serverData = await registerNewUser(email, username, password);

      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
        history.push("/login");
      } else toast.error(serverData.EM);
    }
  };

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    let re = /\S+@\S+\.\S+/;
    if (!email) {
      toast.error("Email is required !");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    if (!re.test(email)) {
      toast.error("Please enter a valid email address !");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    if (!password) {
      toast.error("Password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Your password is not the same !");
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
      return false;
    }

    return true;
  };

  const handleForwardToLogin = () => {
    history.push("/login");
  };
  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none d-flex justify-content-center">
              Register
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className={`form-control ${
                  objCheckInput.isValidEmail ? "" : "is-invalid"
                }`}
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                className={`form-control ${
                  objCheckInput.isValidPassword ? "" : "is-invalid"
                }`}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div>
              <label>Repeat password:</label>
              <input
                type="password"
                className={`form-control ${
                  objCheckInput.isValidConfirmPassword ? "" : "is-invalid"
                }`}
                placeholder="Repeat Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button
              className="btn btn-register"
              type="submit"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <div className="text-center forward-to-login">
              ALready've an account?{" "}
              <span onClick={() => handleForwardToLogin()}>Login</span>
            </div>
          </div>

          <div className="content-right col-12 d-none col-sm-7 d-sm-block">
            <div className="detail d-flex justify-content-center">
              <img src={images.bgRegister} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
