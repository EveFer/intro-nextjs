import { URL_BASE } from '../config'

function loginAccount (credentials) {
  const URL = `${URL_BASE}/auth/account`
  const options = {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  //   retornar la promesa
  return fetch(URL, options)
}

export {
  loginAccount
}
