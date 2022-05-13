import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { colorPrimary } from "constants/colors.constants";

import "./index.scss";

const ImageFrame = ({ imageUrl, icon }: Props) => {
  const createContent = () => {
    if (icon) {
      return <FontAwesomeIcon icon={icon} size="3x" color={colorPrimary} />;
    }

    if (imageUrl) {
      return <img src={imageUrl} alt="" />;
    }

    return <FontAwesomeIcon icon={faUser} size="3x" color="gray" />;
  };

  return (
    <div className={`image-frame ${icon ? "image-frame--secondary" : ""}`}>
      {createContent()}
    </div>
  );
};

type Props = { imageUrl?: string; icon?: IconDefinition };

export default ImageFrame;
