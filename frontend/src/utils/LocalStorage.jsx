export const getToken = () => localStorage.getItem("token") || null;

export const getRole = () => localStorage.getItem("role") || null;

export const setToken = (token) => localStorage.setItem("token", token);
export const setRole = (role) => localStorage.setItem("role", role);

export const setRoleAndToken = (role, token) => {
  setRole(role);
  setToken(token);
};

export const removeRoleAndToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}
