import { useAuth } from './useAuth'
import { hasPermission } from '../utils/hasPermission'
export function usePermission(permission) {
  const { user } = useAuth()
  return hasPermission(user,permission)
}