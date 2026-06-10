import "../styles/Sign-in.css";
import Footer from "./Footer";

function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Sign In</h2>

        <form className="signin-form">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;