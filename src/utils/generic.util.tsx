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
