import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { COLOR_PRIMARY } from "constants/colors.constants";

import "./index.scss";
import { createClass } from "utils/generic.util";
import { useContext } from "react";
import { CustomFormContext } from "context/custom-form.context";

const ImageFrame = ({ imageUrl, icon, formControl = null }: Props) => {
  const methods = useContext(CustomFormContext);
  const [id, validators] = formControl;

  const placeholder = (
    <FontAwesomeIcon
      icon={formControl ? faUpload : faUser}
      size="3x"
      color="gray"
    />
  );

  const createContent = () => {
    if (formControl) {
      return (
        <>
          {placeholder}
          <label htmlFor="image-upload"></label>
          <input id="image-upload" type="file" accept="image/*" />
        </>
      );
    }

    if (icon) {
      return (
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          color={COLOR_PRIMARY}
          {...methods.register()}
        />
      );
    }

    if (imageUrl) {
      return <img src={imageUrl} alt="" />;
    }

    return placeholder;
  };
  const classes = createClass(
    { "image-frame--secondary": icon },
    "image-frame"
  );

  return <div className={classes}>{createContent()}</div>;
};

type Props = { imageUrl?: string; icon?: IconDefinition; formControl?: any[] };

export default ImageFrame;
