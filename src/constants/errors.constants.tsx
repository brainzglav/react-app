import { ErrorObject } from "models/generic.model";
import { EMAIL_REGEX } from "./regex.constants";

export const DEFAULT_ERRORS: any = {
  required: "This field is required",
  maxLength: (length: number) => `Max ${length} characters allowed`,
  pattern: (msg: string) => msg,
};

export const EMAIL_PATTERN: ErrorObject = {
  value: EMAIL_REGEX,
  message: "Invalid email pattern",
};
