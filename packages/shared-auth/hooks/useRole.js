import { useAuth } from './useAuth'

import { hasRole } from '../utils/hasRole'

export function useRole(roles = []) {
  const { user } = useAuth()
  return hasRole(user, roles)
}