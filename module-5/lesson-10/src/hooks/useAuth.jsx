export const useAuth = () => {
  let token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  return true;
};

export const LogOut = (redirect) => {
  redirect("/login");
  localStorage.clear();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
