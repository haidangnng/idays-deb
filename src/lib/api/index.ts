const API_URL = process.env.API_URL;

enum FETCH_METHOD {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE ",
  UPDATE = "UPDATE",
}

type RequestParams = {
  url: string;
  type: FETCH_METHOD;
  opts?: RequestInit;
};

const fetchRequest = async (params: RequestParams) => {
  const { url, type, opts } = params;
  let options: RequestInit = {
    method: type,
  };

  switch (type) {
    case FETCH_METHOD.GET:
      break;
    default:
      options = {
        ...options,
        ...opts,
      };
  }

  const request = new Request(`${API_URL}/${url}`, options);

  try {
    const response = await fetch(request);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("e", e);
    return;
  }
};

const get = async (url: string) => {
  try {
    const response = await fetchRequest({
      url,
      type: FETCH_METHOD.GET,
    });
    return response;
  } catch (e) {
    return e;
  }
};

const post = async <T>(url: string, body: T) => {
  try {
    const response = await fetchRequest({
      url,
      type: FETCH_METHOD.POST,
      opts: {
        body: JSON.stringify(body),
      },
    });
    return response;
  } catch (e) {
    return e;
  }
};

const remove = async (url: string) => {
  try {
    const response = await fetchRequest({
      url,
      type: FETCH_METHOD.DELETE,
    });
    return response;
  } catch (e) {
    return e;
  }
};

const update = async <T>(url: string, body: T) => {
  try {
    const response = await fetchRequest({
      url,
      type: FETCH_METHOD.UPDATE,
      opts: {
        body: JSON.stringify(body),
      },
    });
    return response;
  } catch (e) {
    return e;
  }
};

export { get, post, remove, update };
