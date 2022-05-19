import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { COLOR_PRIMARY } from "constants/colors.constants";

import "./index.scss";
import { createClass } from "utils/generic.util";

const ImageFrame = ({ imageUrl, icon }: Props) => {
  const createContent = () => {
    if (icon) {
      return <FontAwesomeIcon icon={icon} size="3x" color={COLOR_PRIMARY} />;
    }

    if (imageUrl) {
      return <img src={imageUrl} alt="" />;
    }

    return <FontAwesomeIcon icon={faUser} size="3x" color="gray" />;
  };
  const classes = createClass(
    { "image-frame--secondary": icon },
    "image-frame"
  );

  return <div className={classes}>{createContent()}</div>;
};

type Props = { imageUrl?: string; icon?: IconDefinition };

export default ImageFrame;
