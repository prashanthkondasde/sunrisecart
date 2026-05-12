import { authService } from '@ecommerce/shared-auth'

export default function LogoutButton() {
  const handleLogout = async () => {
    await authService.logout()

    window.location.href = '/login'
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}