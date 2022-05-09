import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneElement } from "react";
import { useState } from "react";

import "./index.scss";

const InputField = ({ className = "", children, icon }: Props) => {
  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const content = cloneElement(children, { onFocus, onBlur });

  return (
    <div className={`input-field ${focus ? "focus" : ""} ${className}`}>
      <FontAwesomeIcon className="m-r-5" icon={icon} />
      {content}
    </div>
  );
};

type Props = {
  className?: string;
  children: any;
  icon?: IconProp;
};

export default InputField;
