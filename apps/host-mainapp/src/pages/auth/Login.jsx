import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setAuth } from '@srcart/shared-store'
import { authApi } from '@srcart/shared-api'
import { Button, Input } from '@srcart/shared-ui'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}

    if (!form.email) {
      nextErrors.email = 'Email required'
    }

    if (!form.password) {
      nextErrors.password = 'Password required'
    }

    setErrors(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    try {
      const response = await authApi.login(form);
       dispatch(setAuth({
            accessToken: response.accessToken,
            csrfToken: response.csrfToken,
            user: response.user,
          }));
      navigate('/')
    } catch {
      alert('Invalid credentials')
    }
  }
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-5">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Email"
            value={form.email}
            onChange={event => {
              setForm({
                ...form,
                email: event.target.value
              })
            }}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={event => {
              setForm({
                ...form,
                password: event.target.value
              })
            }}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <Button className="w-full h-10">
          Login
        </Button>
      </form>
    </div>
  )
}