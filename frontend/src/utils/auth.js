

export const BASE_URL = 'http://api.study.mesto.nomoredomains.rocks';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
        'email': email, 
        'password': password
    })
  })
  .then(_handleResponse)
};

export const login = (email, password) => {
  return fetch (`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
        'email': email, 
        'password': password
    })
  })
  .then(_handleResponse)
  // .then((data) => {
  //   if (data.token){
  //     localStorage.setItem('jwt', data.token);
  //     return data;
  //   }
  // })
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
  })
  .then(_handleResponse);
}

function _handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
}
return res.json();
}