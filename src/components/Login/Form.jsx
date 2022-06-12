import "./form.css";
const Form = () => {
  return (
    <form className="form">
      <h1 className="form__title">Welcome Back</h1>
      <div className="form__inputs">
        <input
          type="email"
          className="form__input"
          name="email"
          placeholder="Email Address*"
        />
      </div>
      <div className="form__inputs">
        <input
          type="password"
          className="form__input"
          name="password"
          placeholder="Password*"
        />
      </div>

      <button className="form__btn">Login</button>
    </form>
  );
};

export { Form };
