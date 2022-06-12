import "./home.css";
import { Form } from "../../components/Login/Form";

const Home = () => {
  return (
    <div>
      <div className="heading-container">
        <h1>ATools<sub style={{color:"red"}}>*</sub></h1>
        <div className="heading-btn-container">
          <button className="form__btn">Start Free Trial</button>
          <button className="form__btn" style={{backgroundColor:"#FBBF24"}}>Login</button>
        </div>
      </div>
      <div className="main-container">
        <div className="form-container">
          <Form />
        </div>

        <div className="image-container">
          <img src="./assets/img.svg" alt="bacground-img" />
        </div>
      </div>
    </div>
  );
};

export { Home };
