import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyClientPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isClient ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}
