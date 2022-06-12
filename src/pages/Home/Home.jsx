import "./home.css";
import { Form } from "../../components/Login/Form";

const Home = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <Form />
      </div>

      <div className="image-container">
        <img src="./assets/img.svg" alt="bacground-img" />
      </div>
    </div>
  );
};

export { Home };
