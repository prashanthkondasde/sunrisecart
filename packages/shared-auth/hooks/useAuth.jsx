import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import authApi from '@sunrise/shared-api/auth/authApi'

import {setAuth,logout,finishLoading} from '@sunrise/shared-store'

const useAuth = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const initAuth = async () => {

      try {
        const response = await authApi.refresh()

        dispatch(setAuth({
          accessToken: response.accessToken,
          user: response.user,
        }))

      } catch {

        dispatch(logout())

      } finally {
        dispatch(finishLoading())
      }
    }
    initAuth()

  }, [])
}

export default useAuth