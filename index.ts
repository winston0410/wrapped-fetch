export interface UnwrappedResponse<T> {
  ok: boolean;
  status: number;
  body: T;
}

type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

const createWrapped = (f: Fetch) => {
  f = f ? f : window.fetch;
  return async <Body>(
    url: RequestInfo,
    opts?: RequestInit
  ): Promise<UnwrappedResponse<Body>> => {
    const res = await f(url, opts);

    return {
      ok: res.ok,
      status: res.status,
      body: await res.json(),
    };
  };
};

export default createWrapped;
