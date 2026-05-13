export function hasRole(user,roles) {
  if (!user) {
    return false
  }

  return roles.includes(user.role)
}