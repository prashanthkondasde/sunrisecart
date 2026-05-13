import { Navigate } from 'react-router-dom'
import { useAuth } from "../hooks/useAuth";
// import { useRole } from '../hooks/useRole';
export const RoleGuard = ({children,allowedRoles = []})=>{
  const {user,isAuthenticated} = useAuth();
  // const allowed = useRole(allowedRoles);
  // console.log(allowed);
   if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }
  // shortcut / direct 
  const hasAccess = allowedRoles.includes(user?.role);
  if (!hasAccess) {
    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }

  
  // if (!allowed) {
  //   return (
  //     <Navigate to="/unauthorized" />
  //   )
  // }

  return children
}