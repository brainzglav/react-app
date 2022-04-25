import "./index.scss";

function Header({ title, color }) {
  return (
    <header className="background background--highlighted" style={{ color }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
