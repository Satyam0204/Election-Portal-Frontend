import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 30000,
});

export const addAuthToken = async (authToken) => {
  //Add Auth token here from nextAuth
  // const authToken = "token";
  try {
    api.defaults.headers.common["Authorization"] = authToken
      ? "Bearer " + authToken
      : "";
    api.defaults.headers["Authorization"] = authToken
      ? "Bearer " + authToken
      : "";
  } catch (e) {
    api.defaults.headers.common["Authorization"] = "";
    api.defaults.headers["Authorization"] = "";
  }
};

export const GET = async (url) => {
  try {
    const response = await api.get(url);
    return {
      metadata: {
        status: response.status,
        success: true,
      },
      payload: response.data,
    };
  } catch (e) {
    const status = e.response ? e.response : "UNKNOWN_STATUS";
    const message = e.response
      ? e.response.data
      : "Some unknown error occurred! Please try again.";

    return {
      metadata: {
        status,
        success: false,
      },
      payload: {
        data: {
          message,
        },
      },
    };
  }
};

export const POST = async (url, data, extendTimeOut = false) => {
  // await addAuthToken();
  if (extendTimeOut) {
    api.defaults.timeout = +60000;
  }
  try {
    const response = await api.post(url, data);
    return {
      metadata: {
        status: response.status,
        success: true,
      },
      payload: response.data,
    };
  } catch (e) {
    const status = e.response ? e.response.status : "UNKNOWN_STATUS";
    const message = e.response
      ? e.response.data
      : "Some unknown error occurred! Please try again.";

    return {
      metadata: {
        status,
        success: false,
      },
      payload: {
        data: {
          message,
        },
      },
    };
  }
};

export const PUT = async (url, data, token = null) => {
  if (token) {
    await addAuthToken(token);
  }

  try {
    const response = await api.put(url, data);
    return {
      metadata: {
        status: response.status,
        success: true,
      },
      payload: response.data,
    };
  } catch (e) {
    const status = e.response ? e.response.status : "UNKNOWN_STATUS";
    const message = e.response
      ? e.response.data
      : "Some unknown error occurred! Please try again.";

    return {
      metadata: {
        status,
        success: false,
      },
      payload: {
        data: {
          message,
        },
      },
    };
  }
};

export const DELETE = async (url, data) => {
  // await addAuthToken();

  try {
    const response = await api.delete(url, data);
    return {
      metadata: {
        status: response.status,
        success: true,
      },
      payload: response.data,
    };
  } catch (e) {
    const status = e.response ? e.response.status : "UNKNOWN_STATUS";
    const message = e.response
      ? e.response.data
      : "Some unknown error occurred! Please try again.";

    return {
      metadata: {
        status,
        success: false,
      },
      payload: {
        data: {
          message,
        },
      },
    };
  }
};
