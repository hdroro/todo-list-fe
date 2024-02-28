import { useState } from "react";
import { EyeIconClose, EyeIconOpen } from "../Icon/Icon";
import "./ChangePassword.scss";
import { toast } from "react-toastify";
import { handleChangePassword } from "../../services/userService";

function ChangePassword() {
  const [isToggleOldPassword, setIsToggleOldPassword] = useState(false);
  const [isToggleNewPassword, setIsToggleNewPassword] = useState(false);
  const [isToggleConfirmNewPassword, setIsToggleConfirmNewPassword] =
    useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conifrmNewPassword, setConfirmNewPassword] = useState("");
  const defaultValidInput = {
    isValidOldPassword: true,
    isValidNewPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const handleToggleOldPassword = () => {
    setIsToggleOldPassword(!isToggleOldPassword);
  };
  const handleToggleNewPassword = () => {
    setIsToggleNewPassword(!isToggleNewPassword);
  };

  const handleToggleConfirmNewPassword = () => {
    setIsToggleConfirmNewPassword(!isToggleConfirmNewPassword);
  };

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);

    if (!oldPassword) {
      toast.error("Old password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidOldPassword: false });
      return false;
    }

    if (!newPassword) {
      toast.error("New password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidNewPassword: false });
      return false;
    }
    if (!conifrmNewPassword) {
      toast.error("Confirm New password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
      return false;
    }

    if (newPassword !== conifrmNewPassword) {
      toast.error("Your password is not the same !");
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
      return false;
    }

    return true;
  };

  const handleCancel = () => {
    setObjCheckInput(defaultValidInput);

    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  const handleSave = async () => {
    const check = isValidInputs();
    if (check) {
      const res = await handleChangePassword(
        localStorage.getItem("id"),
        oldPassword,
        newPassword
      );

      if (res && +res.EC === 0) {
        toast.success(res.EM);
      } else {
        toast.error(res.EM);
      }
    }
  };
  return (
    <div className="container">
      <div className="form-change-password">
        <div className="mb-3">
          <label for="oldpassword" className="form-label">
            Old Password
          </label>
          <div className="form-group d-flex align-items-center">
            <input
              type={`${isToggleOldPassword ? "text" : "password"}`}
              className={`form-control ${
                objCheckInput.isValidOldPassword ? "" : "is-invalid"
              }`}
              id="oldpassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            {isToggleOldPassword ? (
              <EyeIconOpen
                className="mx-3"
                onClick={() => handleToggleOldPassword()}
              />
            ) : (
              <EyeIconClose
                className="mx-3"
                onClick={() => handleToggleOldPassword()}
              />
            )}
          </div>
        </div>

        <div className="mb-3">
          <label for="newpassword" className="form-label">
            New Password
          </label>
          <div className="form-group d-flex align-items-center">
            <input
              type={`${isToggleNewPassword ? "text" : "password"}`}
              className={`form-control ${
                objCheckInput.isValidNewPassword ? "" : "is-invalid"
              }`}
              id="newpassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {isToggleNewPassword ? (
              <EyeIconOpen
                className="mx-3"
                onClick={() => handleToggleNewPassword()}
              />
            ) : (
              <EyeIconClose
                className="mx-3"
                onClick={() => handleToggleNewPassword()}
              />
            )}
          </div>
        </div>

        <div className="mb-3">
          <label for="confirmnewpassword" className="form-label">
            Confirm New Password
          </label>
          <div className="form-group d-flex align-items-center">
            <input
              type={`${isToggleConfirmNewPassword ? "text" : "password"}`}
              className={`form-control ${
                objCheckInput.isValidConfirmPassword ? "" : "is-invalid"
              }`}
              id="confirmnewpassword"
              value={conifrmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            {isToggleConfirmNewPassword ? (
              <EyeIconOpen
                className="mx-3"
                onClick={() => handleToggleConfirmNewPassword()}
              />
            ) : (
              <EyeIconClose
                className="mx-3"
                onClick={() => handleToggleConfirmNewPassword()}
              />
            )}
          </div>
        </div>

        <div className="d-flex gap-2 justify-content-end">
          <button className="btn btn-secondary" onClick={() => handleCancel()}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={() => handleSave()}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
