import "./index.scss";
import { Props } from "./model";

const Header = ({ title }: Props) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

export default Header;
