export default class Api {
  #onResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res })
  }

  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  getCards() {
    return fetch(`${this._url}/v1/cohort-54/cards`, { headers: this._headers })
      .then(this.#onResponse);
  }
  getProfile() {
    return fetch(`${this._url}/v1/cohort-54/users/me`, { headers: this._headers })
      .then(this.#onResponse);
  }
  editInfo(data) {
    return fetch(`${this._url}/v1/cohort-54/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponse);
  }
  postCard(data) {
    return fetch(`${this._url}/v1/cohort-54/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponse);
  }
  deleteCard(id) {
    return fetch(`${this._url}/v1/cohort-54/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this.#onResponse);
  }
  addLike(id) {
    return fetch(`${this._url}/v1/cohort-54/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers  
    })
      .then(this.#onResponse);
  }
  deleteLike(id) {
    return fetch(`${this._url}/v1/cohort-54/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers  
    })
      .then(this.#onResponse);
  }
  postAvatar(data) {
    return fetch(`${this._url}/v1/cohort-54/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponse);
  }

}