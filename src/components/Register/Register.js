import { useEffect, useState } from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import images from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/registerSlice";
import Loading from "../Loading/Loading";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidUsername: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const history = useHistory();

  const dispatch = useDispatch();
  const registerInfo = useSelector((state) => state.auth_register.registerInfo);
  const isLoading = useSelector((state) => state.auth_register.isLoading);
  const isError = useSelector((state) => state.auth_register.isError);

  const handleRegister = () => {
    let check = isValidInputs();

    if (check) {
      dispatch(registerUser({ email, username, password, fullname }));
    }
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      if (registerInfo.EC === 0) {
        history.push("/login");

        toast.success("Register successfully!");
      } else {
        toast.error(registerInfo.EM);
      }
    }
  }, [registerInfo, isLoading, isError, history]);

  if (isLoading && !isError) {
    return <Loading />;
  }

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

    if (!username) {
      toast.error("Username is required !");
      setObjCheckInput({ ...defaultValidInput, isValidUsername: false });
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

            <div className="form-group">
              <label>Fullname:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Fullname"
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
              />
            </div>

            <div className="form-group">
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

            <div className="form-group">
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
