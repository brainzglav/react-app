import "./index.scss";

const Button = ({ children, ...remainingProps }: Props) => {
  return <button {...remainingProps}>{children}</button>;
};

type Props = {
  children: any;
  [x: string]: any;
};

export default Button;
