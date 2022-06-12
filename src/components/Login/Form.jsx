import { useState } from "react";
import axios from "axios";
import "./form.css";
import { useAuth } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const { setAuth } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMgs, setErrorMgs] = useState("");
  const [showTost, setShowToast] = useState(false);

  const loginHandler = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("TOKEN", response.data.token);
      setAuth((user) => ({
        ...user,
        isAuthenticated: true,
        token: response.data.token,
      }));

      setErrorMgs("");
      setFormData({ email: "", password: "" });
      setShowToast(true);
      toast.success('Login Sucessfull!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } catch (errors) {
      setErrorMgs("Missing password or incorrect email");
      console.log(errors);
    }
  };
  return (
    <form className="form">
      <h1 className="form__title">Welcome Back</h1>
      <div className="form__inputs">
        <input
          type="email"
          className="form__input"
          name="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="form__inputs">
        <input
          type="password"
          className="form__input"
          name="password"
          placeholder="Password*"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <p>{errorMgs}</p>
      </div>

      <button
        className="form__btn"
        onClick={(e) => {
          e.preventDefault();
          loginHandler();
        }}
      >
        Login
      </button>
      <ToastContainer />
    </form>
  );
};

export { Form };
