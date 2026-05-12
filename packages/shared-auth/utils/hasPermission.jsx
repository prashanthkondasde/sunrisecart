import { permissions }
from '../permissions/permissions'

export function hasPermission(
  user,
  permission
) {
  if (!user) {
    return false
  }

  return permissions[
    user.role
  ]?.includes(permission)
}