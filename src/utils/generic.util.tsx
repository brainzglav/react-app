import { DEFAULT_ERRORS } from "constants/errors.constants";

export function formatSearchQuery(query: string): string {
  return query.toLowerCase().replace(/\s/g, "");
}

export function buildUrlParams(obj: any): URLSearchParams {
  const params = new URLSearchParams();

  for (const key in obj) {
    const param = obj[key];

    if (param !== "" && param !== undefined) {
      params.append(key, param);
    }
  }

  return params;
}

export function parseUrlParams(query: any): any {
  const params = new URLSearchParams(query);
  const result: any = {};

  for (const [key, value] of params) {
    result[key] = value;
  }

  return result;
}

export function createClass(obj: any, rest = ""): string {
  const classes = Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => key)
    .join(" ");

  return `${classes} ${rest}`;
}

export function validators(obj: any): any {
  const result = Object.keys(obj).reduce((acc: any, key: string) => {
    const validator = {
      value: obj[key],
      message: DEFAULT_ERRORS[key] || key,
    };

    return { ...acc, [key]: validator };
  }, {});

  return result;
}

export function blobToBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
