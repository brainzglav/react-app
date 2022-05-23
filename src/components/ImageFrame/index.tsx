import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { COLOR_PRIMARY } from "constants/colors.constants";

import "./index.scss";
import { createClass, fileToBase64 } from "utils/generic.util";
import { useContext } from "react";
import { CustomFormContext } from "context/custom-form.context";
import { useState } from "react";
import { useEffect } from "react";

const ImageFrame = ({
  className = "",
  imageUrl,
  icon,
  formControl = null,
}: Props) => {
  const [id, validators] = formControl || [];
  const { disabled, ...methods } = useContext(CustomFormContext);
  const [image, setImage] = useState(null);
  const isFormEnabled = formControl && !disabled;
  const placeholder = (
    <FontAwesomeIcon
      icon={isFormEnabled ? faUpload : faUser}
      size="3x"
      color="gray"
    />
  );

  const imageHandler = async (event: any) => {
    const image = await fileToBase64(event.target.files);

    methods.setValue(id, image);
    setImage(image as string);
  };

  const createContent = () => {
    if (isFormEnabled) {
      return (
        <label htmlFor="image-upload">
          {image ? <img src={image} alt="" /> : placeholder}
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            {...methods.register(id, validators)}
            onChange={imageHandler}
          />
        </label>
      );
    }

    if (icon) {
      return <FontAwesomeIcon icon={icon} size="3x" color={COLOR_PRIMARY} />;
    }

    if (imageUrl) {
      return <img src={imageUrl} alt="" />;
    }

    return placeholder;
  };

  const classes = createClass(
    { "image-frame--secondary": icon },
    `image-frame ${className}`
  );

  useEffect(() => {
    if (isFormEnabled) {
      return setImage(methods.getValues(id));
    }

    setImage(imageUrl);
  }, [methods, id, imageUrl, isFormEnabled]);

  return <div className={classes}>{createContent()}</div>;
};

type Props = {
  className?: string;
  imageUrl?: string;
  icon?: IconDefinition;
  formControl?: any[];
};

export default ImageFrame;
