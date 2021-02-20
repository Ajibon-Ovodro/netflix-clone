export const AUTH_TOKEN_KEY = "login";

export const checkAuth = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuth = (data) => {
  localStorage && localStorage.setItem(AUTH_TOKEN_KEY, data);
};

export const logout = () => {
  localStorage && localStorage.removeItem(AUTH_TOKEN_KEY);
};
