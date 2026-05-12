import { Navigate }
from 'react-router-dom'

import { useRole }
from '../hooks/useRole'

export default function RoleGuard({
  children,
  roles = []
}) {
  const allowed =
    useRole(roles)

  if (!allowed) {
    return (
      <Navigate to="/403" />
    )
  }

  return children
}