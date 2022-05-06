abstract class HttpClient {
  private _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  protected url(url: string): string {
    return `${this._baseUrl}${url}`;
  }

  protected buildUrlParams(obj: any): URLSearchParams {
    const params = new URLSearchParams();

    for (const key in obj) {
      const param = obj[key];

      if (param !== "" && param !== undefined) {
        params.append(key, param);
      }
    }

    return params;
  }
}

export default HttpClient;
