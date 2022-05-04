import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ChangeEventHandler } from "react";
import "./index.scss";

const InputField = ({ onChange, type, icon }: Props) => {
  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return (
    <div className={`input-field ${focus ? "focus" : ""}`}>
      <FontAwesomeIcon icon={icon} />
      <input
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
      />
    </div>
  );
};

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  icon?: IconProp;
};

export default InputField;
