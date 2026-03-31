import logo from "../assets/logo.png";

const Header = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="The Dragon News" className="header-logo" />
      <p className="header-subtitle">Journalism Without Fear or Favour</p>
      <p className="header-date">{formattedDate}</p>
    </header>
  );
};

export default Header;