export const verifyCsrf = (req, res, next) => {

  const csrfHeader =  req.headers['x-csrf-token']

  const csrfCookie =  req.cookies.csrf_token;

  if (!csrfHeader ||csrfHeader !== csrfCookie) {
    return res.status(403).json({
      message: 'Invalid CSRF token'
    })
  }
  next()
}