import { Navigate } from 'react-router-dom'
// import { usePermission } from '../hooks/usePermission';
import { permissions } from '../permissions/permissions';
import { useAuth } from "../hooks/useAuth";
export const PermissionGuard = ({children,permission,redirect = false}) => {
 // const allowed = usePermission(permission)
const {user,isAuthenticated} = useAuth();
 const allowed = permissions[user.role]?.includes(permission)
  if (!allowed) {
    if (redirect) {
      return <Navigate to="/unauthorized" replace />
    }
    return null
  }
  return children
}