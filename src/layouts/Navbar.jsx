import user from "../assets/user.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Career</a>
      </div>

      <div className="nav-right">
        <img src={user} alt="user" className="nav-user-img" />
        <button className="nav-login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;